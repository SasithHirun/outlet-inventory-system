import re

with open('home.html', encoding='utf-8', errors='ignore') as f:
    c = f.read()

m = re.search(r'<li class="product [^>]*>([\s\S]*?)</li>', c)
if m:
    print("FULL LI:")
    print(m.group(0))
