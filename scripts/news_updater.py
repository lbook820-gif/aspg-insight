#!/usr/bin/env python3
"""
新闻自动更新器
每天检索相关新闻并更新到网站
"""

import os
import sys
import re
import json
import subprocess
from datetime import datetime, timedelta
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
from news_db import get_next_id, add_news_item

def format_date(date_str):
    """格式化日期"""
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        return dt.strftime("%Y-%m-%d")
    except:
        return datetime.now().strftime("%Y-%m-%d")

def rebuild_site():
    """重新构建网站"""
    print("[INFO] 开始构建网站...")
    result = subprocess.run(
        ['npm', 'run', 'build'],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        print("[INFO] 构建成功")
        return True
    else:
        print(f"[ERROR] 构建失败: {result.stderr}")
        return False

def main():
    """主入口 - 供外部调用添加新闻"""
    if len(sys.argv) < 2:
        print("用法: python news_updater.py '<新闻JSON>'")
        sys.exit(1)
    
    try:
        news_json = sys.argv[1]
        news_data = json.loads(news_json)
        news_data['id'] = get_next_id()
        
        if add_news_item(news_data):
            print(f"[INFO] 新闻已添加，ID: {news_data['id']}")
            
            # 自动构建
            if rebuild_site():
                print("[INFO] 网站已更新")
            else:
                print("[ERROR] 网站构建失败")
        else:
            print("[ERROR] 添加新闻失败")
            
    except json.JSONDecodeError as e:
        print(f"[ERROR] JSON解析失败: {e}")
    except Exception as e:
        print(f"[ERROR] 错误: {e}")

if __name__ == '__main__':
    main()
