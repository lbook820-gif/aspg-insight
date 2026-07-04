#!/usr/bin/env python3
import os
import re
import json
from datetime import datetime
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
DATA_FILE = PROJECT_ROOT / "src" / "data" / "newsData.ts"
NEWS_DIR = PROJECT_ROOT / "src" / "data" / "news"

def escape_js_string(s):
    if not isinstance(s, str):
        return str(s)
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '')

def get_current_news_ids():
    ids = []
    if NEWS_DIR.exists():
        for f in NEWS_DIR.glob("news_*.ts"):
            content = f.read_text(encoding='utf-8')
            ids.extend(re.findall(r"id:\s*'(\d+)'", content))
    return set(ids)

def get_next_id():
    existing_ids = get_current_news_ids()
    if not existing_ids:
        return "1"
    return str(max(int(id) for id in existing_ids) + 1)

def get_existing_urls():
    urls = []
    if NEWS_DIR.exists():
        for f in NEWS_DIR.glob("news_*.ts"):
            content = f.read_text(encoding='utf-8')
            urls.extend(re.findall(r"sourceUrl:\s*'([^']+)'", content))
    return set(urls)

def sync_news_data_imports():
    if not NEWS_DIR.exists() or not DATA_FILE.exists():
        return
    
    # Find all monthly files and sort them descending (newest month first)
    files = sorted(NEWS_DIR.glob("news_*.ts"), reverse=True)
    months = []
    for f in files:
        m = re.search(r"news_(\d{4}_\d{2})\.ts", f.name)
        if m:
            months.append(m.group(1))
    
    # Generate imports and array items
    imports_lines = []
    array_lines = []
    for m in months:
        imports_lines.append(f"import {{ news_{m} }} from './news/news_{m}';")
        array_lines.append(f"  ...news_{m},")
    
    imports_text = "\n".join(imports_lines)
    array_text = "\n".join(array_lines)
    
    content = DATA_FILE.read_text(encoding='utf-8')
    
    # Replace imports
    import_pattern = r"(// \[IMPORTS_START\]\n)(.*?)(// \[IMPORTS_END\])"
    content = re.sub(import_pattern, rf"\1{imports_text}\n\3", content, flags=re.DOTALL)
    
    # Replace array
    array_pattern = r"(// \[ARRAY_START\]\n)(.*?)(// \[ARRAY_END\])"
    content = re.sub(array_pattern, rf"\1{array_text}\n\3", content, flags=re.DOTALL)
    
    DATA_FILE.write_text(content, encoding='utf-8')

def add_news_item(news_data):
    publish_date = news_data.get('publishDate', datetime.now().strftime("%Y-%m-%d"))
    match_date = re.match(r"(\d{4})-(\d{2})", publish_date)
    if match_date:
        year, month = match_date.groups()
    else:
        now = datetime.now()
        year, month = f"{now.year}", f"{now.month:02d}"
    
    NEWS_DIR.mkdir(exist_ok=True)
    news_file = NEWS_DIR / f"news_{year}_{month}.ts"
    
    # Escape strings for safe TS insertion
    title = escape_js_string(news_data['title'])
    source = escape_js_string(news_data['source'])
    summary = escape_js_string(news_data['summary'])
    
    ai_comment = news_data.get('aiComment', {})
    overall = escape_js_string(ai_comment.get('overallImpact', news_data.get('overallImpact', '')))
    huawei = escape_js_string(ai_comment.get('huaweiImpact', news_data.get('huaweiImpact', '')))
    
    tags_list = []
    for t in news_data.get('tags', []):
        tags_list.append(f"'{escape_js_string(t)}'")
    tags_str = "[" + ", ".join(tags_list) + "]"
    
    news_entry = f"""  {{
    id: '{news_data['id']}',
    title: '{title}',
    source: '{source}',
    sourceUrl: '{news_data['sourceUrl']}',
    summary: '{summary}',
    aiComment: {{
      overallImpact: '{overall}',
      huaweiImpact: '{huawei}',
    }},
    publishDate: '{publish_date}',
    score: {news_data['score']},
    category: '{news_data['category']}',
    tags: {tags_str},
  }},"""
    
    file_existed = news_file.exists()
    
    if not file_existed:
        new_content = f"""import type {{ NewsItem }} from '../newsData';

export const news_{year}_{month}: NewsItem[] = [
{news_entry}
];
"""
        news_file.write_text(new_content, encoding='utf-8')
        sync_news_data_imports()
        return True
    else:
        content = news_file.read_text(encoding='utf-8')
        pattern = r"(  \},\s*\n\];)"
        match = re.search(pattern, content)
        if match:
            new_content = content[:match.start()] + news_entry + "\n" + content[match.start():]
            news_file.write_text(new_content, encoding='utf-8')
            return True
        else:
            # Fallback if pattern not found, insert before closing ];
            r_idx = content.rfind('];')
            if r_idx != -1:
                new_content = content[:r_idx] + news_entry + "\n" + content[r_idx:]
                news_file.write_text(new_content, encoding='utf-8')
                return True
            return False
