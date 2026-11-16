import re

with open('page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

for m in re.finditer(r'MARINE PRODUCTS', text, re.I):
    start = max(0, m.start() - 300)
    end = min(len(text), m.end() + 300)
    print(text[start:end])
    print('-'*50)
