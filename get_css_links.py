import re

with open('page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

links = re.findall(r'<link[^>]+href=["\']([^"\']+\.css[^"\']*)["\']', text)
for l in links:
    if any(k in l for k in ['elementor', 'post-', 'global', 'style', 'onsus']):
        print(l)
