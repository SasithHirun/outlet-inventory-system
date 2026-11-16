import re

with open('page.html', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Check logo
logo_m = re.findall(r'<img[^>]+(?:logo|brand)[^>]*>', text, re.I)
print("Logo matches:", logo_m[:5])

# Find phone numbers and emails
contacts = re.findall(r'(\+971[\d\s-]+|[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)', text)
print("Contacts found:", set(contacts))

# Check navigation links
nav_links = re.findall(r'<li[^>]*><a[^>]+href=["\']([^"\']*)["\'][^>]*>(.*?)</a>', text)
for href, label in nav_links[:20]:
    clean_l = re.sub(r'<[^>]+>', '', label).strip()
    if clean_l:
        print(f"Nav: {clean_l} -> {href}")
