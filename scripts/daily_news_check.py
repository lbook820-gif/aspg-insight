#!/usr/bin/env python3
"""
每日新闻检查脚本
每天自动检索最近2天的相关新闻并更新网站
"""

import os
import sys
import json
import re
import subprocess
from datetime import datetime, timedelta
from pathlib import Path

# 项目路径
PROJECT_ROOT = Path(__file__).parent.parent
DATA_FILE = PROJECT_ROOT / "src" / "data" / "newsData.ts"
LOG_FILE = PROJECT_ROOT / "logs" / "news_update.log"

def log(message):
    """记录日志"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_msg = f"[{timestamp}] {message}"
    print(log_msg)
    
    # 确保日志目录存在
    LOG_FILE.parent.mkdir(exist_ok=True)
    with open(LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(log_msg + '\n')

from news_db import get_next_id, get_existing_urls, add_news_item

def rebuild_site():
    """重新构建网站"""
    log("开始构建网站...")
    result = subprocess.run(
        ['npm', 'run', 'build'],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        log("构建成功")
        return True
    else:
        log(f"构建失败: {result.stderr}")
        return False

def check_news_manually():
    """
    手动检查新闻入口
    由于无法直接调用搜索API，这里提供手动添加的接口
    """
    log("="*60)
    log("每日新闻检查任务开始")
    log("="*60)
    
    # 检查是否有待处理的新闻文件
    pending_file = PROJECT_ROOT / "scripts" / "pending_news.json"
    
    if not pending_file.exists():
        log("没有找到待处理的新闻文件")
        log("请手动搜索新闻并创建 pending_news.json 文件")
        log("任务完成，无更新")
        return
    
    try:
        with open(pending_file, 'r', encoding='utf-8') as f:
            pending_news = json.load(f)
        
        existing_urls = get_existing_urls()
        added_count = 0
        
        for news in pending_news:
            if news['sourceUrl'] in existing_urls:
                log(f"跳过已存在的新闻: {news['title'][:40]}...")
                continue
            
            news['id'] = get_next_id()
            
            if add_news_item(news):
                log(f"添加新闻: {news['title'][:50]}...")
                added_count += 1
            else:
                log(f"添加失败: {news['title'][:50]}...")
        
        if added_count > 0:
            log(f"成功添加 {added_count} 条新闻，开始构建...")
            if rebuild_site():
                log("网站更新完成")
            else:
                log("网站构建失败")
        else:
            log("没有新新闻需要添加")
        
        # 清空待处理文件
        pending_file.unlink()
        
    except json.JSONDecodeError as e:
        log(f"JSON解析错误: {e}")
    except Exception as e:
        log(f"错误: {e}")
    
    log("="*60)
    log("任务完成")
    log("="*60)

def main():
    """主函数"""
    check_news_manually()

if __name__ == '__main__':
    main()
