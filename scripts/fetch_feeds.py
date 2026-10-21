#!/usr/bin/env python3
"""抓取应用生态 / 支付生态相关的权威 RSS 源，输出最近 N 天的新闻候选。

用法:
    python3 scripts/fetch_feeds.py --days 3
    python3 scripts/fetch_feeds.py --days 5 --json
    python3 scripts/fetch_feeds.py --only apple,ec --days 7

设计目的：替代"关键词盲搜"。搜索工具对新闻类查询常返回科普/SEO 长文，
而官方与垂直媒体的 RSS 有确定的发布时间，便于按时间窗筛选与去重。
"""
import argparse
import html
import json
import re
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"

# key: (显示名, URL, 分级, 关注模块)
FEEDS = {
    "apple": ("Apple Developer News", "https://developer.apple.com/news/rss/news.rss", "S", ["appstore"]),
    "google": ("Android Developers Blog", "https://android-developers.googleblog.com/feeds/posts/default", "S", ["googleplay"]),
    "googleplay": ("Android Blog · Google Play", "https://android-developers.googleblog.com/feeds/posts/default/-/Google%20Play", "S", ["googleplay"]),
    "ec": ("欧盟委员会新闻稿", "https://ec.europa.eu/commission/presscorner/api/rss?language=en", "S", ["dma"]),
    "cma": ("英国CMA", "https://www.gov.uk/government/organisations/competition-and-markets-authority.atom", "S", ["dma"]),
    "9to5mac": ("9to5Mac", "https://9to5mac.com/feed/", "B", ["appstore"]),
    "appleinsider": ("AppleInsider", "https://appleinsider.com/rss/news/", "B", ["appstore"]),
    "techcrunch": ("TechCrunch", "https://techcrunch.com/feed/", "A", ["appstore", "googleplay", "dma"]),
    "verge": ("The Verge", "https://www.theverge.com/rss/index.xml", "A", ["appstore", "googleplay", "dma", "payment"]),
    "finextra": ("Finextra", "https://www.finextra.com/rss/headlines.aspx", "B", ["payment"]),
    "paymentsdive": ("Payments Dive", "https://www.paymentsdive.com/feeds/news/", "B", ["payment"]),
    "ecb": ("欧洲央行", "https://www.ecb.europa.eu/rss/press.html", "S", ["payment"]),
}

KEYWORDS = [
    "app store", "apple", "ios", "iphone", "ipa", "sideload", "side-load", "notariz",
    "google play", "android", "play billing", "apk", "play store", "app bundle",
    "dma", "digital markets act", "gatekeeper", "interoperab", "antitrust", "competition",
    "european commission", "brussels", "cma", "doj", "ftc", "lawsuit", "court",
    "commission", "fine", "penalt", "appeal", "strategic market status",
    "wero", "epi", "digital euro", "visa", "mastercard", "paypal", "stripe", "wallet",
    "payment", "psd2", "psd3", "instant payment", "settlement", "checkout",
    "contactless", "nfc", "interchange", "merchant", "acquiring", "issuer",
    "whatsapp", "telegram", "imessage", "messaging", "agent",
    "subscription", "billing", "commission rate", "in-app",
    "app store ads", "apple maps", "advertising", "privacy", "dma compliance",
]

NEGATIVE = [
    "recipe", "horoscope", "sports score", "stock price", "crypto price today",
    "best antivirus", "how to", "what is ", "guide to", "deal of the day",
    "deals:", "price drop", "on sale", "premieres", "trailer", "episode",
    "tv+", "apple tv+", "box office", "review roundup", "how much is",
]

# 按源设定额外规则：require=必须命中其一；exclude_url=URL 含任一即丢弃
POLICY_HINTS = [
    "app store", "app review", "play store", "google play", "antitrust", "nfc",
    "apple pay", "apple wallet", "dma", "digital markets", "european commission",
    "cma", "doj", "ftc", "lawsuit", "court", "guideline", "sideload", "interoperab",
    "wallet", "payment", "subscription", "billing", "regulat", "commission",
    "gatekeep", "developer", "settlement", "fine",
]

FEED_RULES = {
    "ec": {
        "require": [
            "digital markets", "dma", "gatekeep", "app store", "interoperab",
            "antitrust", "google", "apple", "payment", "digital euro", "platform",
        ],
    },
    "ecb": {"require": ["digital euro", "payment", "instant", "settlement", "cipollone"]},
    "finextra": {
        "require": ["payment", "wallet", "visa", "mastercard", "wero", "scheme", "nfc", "merchant"],
        "exclude_url": ["/event-info/", "/blogposting/"],
    },
    "paymentsdive": {"require": ["visa", "mastercard", "paypal", "wallet", "interchange", "merchant", "payment"]},
    "cma": {
        "require": ["apple", "mobile", "nfc", "digital", "app", "google", "payment"],
        "exclude_url": ["merger inquiry", "energy code", "appeal"],
    },
    # 综合与苹果垂直媒体噪音大：只保留与商店规则/监管/支付相关
    "9to5mac": {"require": POLICY_HINTS},
    "appleinsider": {"require": POLICY_HINTS},
    "techcrunch": {"require": POLICY_HINTS},
    "verge": {"require": POLICY_HINTS},
}


def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            raw = r.read()
            if r.headers.get("Content-Encoding") == "gzip":
                import gzip

                raw = gzip.decompress(raw)
            return raw
    except urllib.error.URLError as e:
        # 部分政府站点证书链不完整，退化为不校验证书重试一次
        if "CERTIFICATE_VERIFY_FAILED" not in str(e):
            raise
        import ssl

        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
            return r.read()


def strip_tags(s):
    s = re.sub(r"<[^>]+>", " ", s or "")
    return html.unescape(re.sub(r"\s+", " ", s)).strip()


def parse_date(text):
    if not text:
        return None
    text = text.strip()
    try:
        dt = parsedate_to_datetime(text)
    except Exception:
        try:
            dt = datetime.fromisoformat(text.replace("Z", "+00:00"))
        except Exception:
            return None
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt


def parse_feed(raw):
    """兼容 RSS 2.0 / Atom。返回 [(title, link, date, summary)]"""
    out = []
    root = ET.fromstring(raw)
    ns = {"a": "http://www.w3.org/2005/Atom"}

    for item in root.iter():
        tag = item.tag.split("}")[-1]
        if tag not in ("item", "entry"):
            continue
        title = link = date = summary = ""
        for child in item:
            ctag = child.tag.split("}")[-1]
            if ctag == "title":
                title = strip_tags(child.text or "".join(child.itertext()))
            elif ctag == "link":
                link = child.get("href") or (child.text or "")
            elif ctag in ("pubDate", "published", "updated", "date"):
                date = date or (child.text or "")
            elif ctag in ("description", "summary", "content"):
                summary = summary or strip_tags("".join(child.itertext()))[:400]
        if title and link:
            out.append((title, link.strip(), parse_date(date), summary))
    return out


def relevant(title, summary):
    blob = (title + " " + summary).lower()
    if any(n in blob for n in NEGATIVE):
        return False
    return any(k in blob for k in KEYWORDS)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=float, default=3, help="回溯天数")
    ap.add_argument("--only", default="", help="逗号分隔的源 key")
    ap.add_argument("--json", action="store_true", help="输出 JSON")
    ap.add_argument("--all", action="store_true", help="不按关键词过滤")
    args = ap.parse_args()

    only = [s.strip() for s in args.only.split(",") if s.strip()]
    now = datetime.now(timezone.utc)
    cutoff = now - timedelta(days=args.days)

    rows, errors = [], []
    for key, (name, url, tier, modules) in FEEDS.items():
        if only and key not in only:
            continue
        try:
            items = parse_feed(fetch(url))
        except Exception as e:
            errors.append(f"{name}: {type(e).__name__} {e}")
            continue
        rules = FEED_RULES.get(key, {})
        for title, link, dt, summary in items:
            if dt and (dt < cutoff or dt > now + timedelta(days=1)):
                continue  # 过滤过期与未来（活动预告类）条目
            if any(x in link for x in rules.get("exclude_url", [])):
                continue
            blob = (title + " " + summary).lower()
            if args.all is False:
                if not relevant(title, summary):
                    continue
                if rules.get("require") and not any(k in blob for k in rules["require"]):
                    continue
            rows.append(
                {
                    "feed": name,
                    "tier": tier,
                    "modules": modules,
                    "title": title,
                    "url": link,
                    "date": dt.astimezone(timezone.utc).strftime("%Y-%m-%d %H:%M") if dt else "?",
                    "summary": summary,
                }
            )

    rows.sort(key=lambda r: r["date"], reverse=True)
    if args.json:
        print(json.dumps({"items": rows, "errors": errors}, ensure_ascii=False, indent=2))
        return

    print(f"# 候选 {len(rows)} 条（回溯 {args.days} 天，截至 {datetime.now(timezone.utc):%Y-%m-%d %H:%M} UTC）\n")
    cur = None
    for r in rows:
        d = r["date"][:10]
        if d != cur:
            print(f"\n## {d}")
            cur = d
        print(f"[{r['tier']}|{r['feed']}] {r['title']}")
        print(f"    {r['url']}")
    if errors:
        print("\n# 抓取失败:")
        for e in errors:
            print("  -", e)


if __name__ == "__main__":
    main()
