import re

try:
    with open('about-us.html', 'r', encoding='utf-8', errors='ignore') as f:
        about = f.read()
except Exception as e:
    about = ""

try:
    with open('page.html', 'r', encoding='utf-8', errors='ignore') as f:
        page = f.read()
except Exception as e:
    page = ""

print('--- ABOUT US BODY CLASSES ---')
body_about = re.findall(r'<body[^>]*class=["\']([^"\']*)["\']', about)
print(body_about[0] if body_about else 'None')

print('\n--- HOME / PAGE BODY CLASSES ---')
body_page = re.findall(r'<body[^>]*class=["\']([^"\']*)["\']', page)
print(body_page[0] if body_page else 'None')

print('\n--- Elementor sections in About Us ---')
for m in re.findall(r'<section[^>]*class=["\'][^"\']*elementor-section[^"\']*["\'][^>]*>', about)[:5]:
    print(m)

print('\n--- Elementor sections in Home Page ---')
for m in re.findall(r'<section[^>]*class=["\'][^"\']*elementor-section[^"\']*["\'][^>]*>', page)[:5]:
    print(m)

print('\n--- Check elementor container max-width or custom CSS ---')
for m in re.findall(r'(\.elementor-[^{}]*\{[^{}]*max-width[^{}]*\})', page):
    print('Home:', m)

for m in re.findall(r'(\.elementor-[^{}]*\{[^{}]*max-width[^{}]*\})', about):
    print('About:', m)
