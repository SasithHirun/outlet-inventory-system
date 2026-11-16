import re
from html.parser import HTMLParser

with open('page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

print("=== PAGE TITLE ===")
title_m = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
if title_m:
    print(title_m.group(1).strip())

print("\n=== GOOGLE FONTS / FONT LINKS ===")
for m in re.finditer(r'<link[^>]+href=["\']([^"\']+)["\'][^>]*>', html, re.IGNORECASE):
    href = m.group(1)
    if 'fonts.googleapis.com' in href or 'font' in href.lower() or 'type' in href.lower():
        print(href)

print("\n=== THEME & MAIN STYLESHEETS ===")
for m in re.finditer(r'<link[^>]+rel=["\']stylesheet["\'][^>]+href=["\']([^"\']+)["\'][^>]*>', html, re.IGNORECASE):
    href = m.group(1)
    if any(k in href.lower() for k in ['theme', 'style', 'onsus', 'elementor', 'color']):
        print(href)

print("\n=== INLINE STYLES / CSS VARIABLES ===")
for m in re.finditer(r'<style[^>]*>(.*?)</style>', html, re.IGNORECASE | re.DOTALL):
    style_content = m.group(1)
    # Search for root vars or color/font variables
    var_matches = re.findall(r'(--[a-zA-Z0-9_-]*(?:color|theme|primary|secondary|font|bg)[a-zA-Z0-9_-]*\s*:\s*[^;]+;)', style_content, re.IGNORECASE)
    for v in set(var_matches):
        print("Var:", v.strip())
    font_matches = re.findall(r'font-family\s*:\s*([^;]+);', style_content, re.IGNORECASE)
    for f in set(font_matches):
        print("Font-family:", f.strip())

print("\n=== HEADINGS FOUND ===")
headings = re.findall(r'<(h[1-4])[^>]*>(.*?)</\1>', html, re.IGNORECASE | re.DOTALL)
for tag, text in headings[:30]:
    clean_text = re.sub(r'<[^>]+>', '', text).strip()
    clean_text = ' '.join(clean_text.split())
    if clean_text:
        print(f"<{tag}> {clean_text}")

print("\n=== MENU / NAVIGATION ITEMS ===")
nav_matches = re.findall(r'<nav[^>]*>(.*?)</nav>', html, re.IGNORECASE | re.DOTALL)
for nav in nav_matches:
    menu_items = re.findall(r'<a[^>]+href=["\']([^"\']*)["\'][^>]*>(.*?)</a>', nav, re.IGNORECASE | re.DOTALL)
    for href, text in menu_items:
        clean = re.sub(r'<[^>]+>', '', text).strip()
        if clean and len(clean) < 40:
            print("Menu:", clean, "->", href)
