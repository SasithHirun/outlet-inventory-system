import re

with open('page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's see the section containers in page.html
sections = re.findall(r'<section[^>]*class=["\']([^"\']+)["\'][^>]*data-id=["\']([^"\']+)["\'][^>]*>', text)
print(f"Total sections in page.html: {len(sections)}")
for s, did in sections[:15]:
    print(f"data-id: {did} | classes: {s}")
