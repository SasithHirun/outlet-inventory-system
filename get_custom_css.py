import re

with open('page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Find all style tags and look for custom classes like ppfc, onsus, themesflat, elementor custom CSS
styles = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL)

with open('extracted_styles.css', 'w', encoding='utf-8') as f:
    for i, s in enumerate(styles):
        if any(term in s for term in ['ppfc', '--theme', 'header', 'nav', 'banner', 'price', 'color']):
            f.write(f"\n/* --- STYLE BLOCK {i} --- */\n")
            f.write(s)

print("Extracted custom styles to extracted_styles.css")
