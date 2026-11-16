import re

with open('page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

output = []

def p(s):
    output.append(s)

p("=== 1. WEBSITE GENERAL INFO ===")
title_m = re.search(r'<title>(.*?)</title>', html, re.I)
p(f"Page Title: {title_m.group(1).strip() if title_m else 'N/A'}")

theme_m = re.findall(r'/themes/([^/]+)/', html)
p(f"WordPress Theme Detected: {set(theme_m)}")

plugins = set(re.findall(r'/plugins/([^/]+)/', html))
p(f"WordPress Plugins Detected: {sorted(list(plugins))}")

p("\n=== 2. FONTS & TYPOGRAPHY ===")
fonts_m = re.findall(r'family=([^"\'&]+)', html)
p("Google Fonts requested:")
for font in set(fonts_m):
    p(f" - {font.replace('+', ' ').replace('%20', ' ')}")

p("\nInline Font Families:")
font_families = set(re.findall(r'font-family\s*:\s*([^;!}\n]+)', html, re.I))
for ff in sorted(font_families):
    p(f" - {ff.strip()}")

p("\nFont weights / sizes in inline CSS:")
weights = set(re.findall(r'font-weight\s*:\s*([^;!}\n]+)', html, re.I))
p(f"Font weights: {sorted([w.strip() for w in weights])}")

p("\n=== 3. COLOR PALETTE EXTRACTED ===")
# Hex colors
hex_colors = set(re.findall(r'#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b', html))
p(f"Found {len(hex_colors)} hex colors.")

# Specifically look at CSS variables and theme colors in style tags
css_vars = set(re.findall(r'(--[a-zA-Z0-9_-]*(?:color|theme|primary|secondary|accent|dark|light|blue|red|gray|bg)[a-zA-Z0-9_-]*\s*:\s*[^;]+;)', html, re.I))
p("\nKey CSS Variables for Colors:")
for var in sorted(css_vars):
    p(f" - {var.strip()}")

p("\nElementor Color Palette & Global Settings:")
for m in re.finditer(r'\{"key":"(custom_colors|system_colors)"[^\}]+\}', html):
    p(m.group(0)[:500])

# Look for primary button styling, headers, etc.
btn_styles = re.findall(r'(\.[\w-]+(?:btn|button|header|nav|footer|hero|banner|price)[\w-]*\s*\{[^}]+\})', html, re.I)
p(f"\nFound {len(btn_styles)} targeted class style rules.")
for b in btn_styles[:15]:
    p(b.strip())

p("\n=== 4. STRUCTURAL SECTIONS & WIREFRAME ===")
# Find major structural blocks
sections = re.findall(r'<(header|nav|main|footer|section|div)\s+([^>]*class=["\']([^"\']+)["\'][^>]*)>', html, re.I)
filtered_secs = []
for tag, attrs, cls in sections:
    if any(k in cls.lower() for k in ['header', 'topbar', 'top-bar', 'nav', 'menu', 'hero', 'slider', 'banner', 'category', 'department', 'service', 'feature', 'product', 'deal', 'offer', 'brand', 'testimonial', 'footer', 'copyright']):
        # avoid tiny duplicates
        first_class = cls.split()[0]
        if first_class not in [x[1].split()[0] for x in filtered_secs]:
            filtered_secs.append((tag, cls))

p(f"Key structural layout blocks ({len(filtered_secs)} detected):")
for tag, cls in filtered_secs[:40]:
    p(f" - <{tag} class='{cls[:90]}'>")

p("\n=== 5. HEADINGS AND TEXT CONTENT SAMPLE ===")
headings = re.findall(r'<(h[1-5])[^>]*>(.*?)</\1>', html, re.I | re.DOTALL)
for tag, text in headings:
    cleaned = re.sub(r'<[^>]+>', '', text).strip()
    cleaned = ' '.join(cleaned.split())
    if cleaned and len(cleaned) < 120:
        p(f"<{tag}> {cleaned}")

with open('site_analysis_data.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output))

print("Analysis data written to site_analysis_data.txt")
