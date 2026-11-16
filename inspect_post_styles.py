import re

with open('page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's search inside page.html for post-8 or post-4230 styles
post_styles = re.findall(r'<style[^>]*id=["\'](?:elementor-post-8|elementor-frontend|elementor-post-4230)[^"\']*["\'][^>]*>(.*?)</style>', text, re.DOTALL)
print("Found post styles:", len(post_styles))
for s in post_styles:
    for m in re.findall(r'(\.elementor-[^{]*\{[^}]*\})', s):
        if 'width' in m or 'max-width' in m:
            print(m[:120])

# Also check any style tag with container
for s in re.findall(r'<style[^>]*>(.*?)</style>', text, re.DOTALL):
    for m in re.findall(r'(\.elementor-section\.elementor-section-boxed\s*>\s*\.elementor-container[^{]*\{[^}]*\})', s):
        print("Boxed container rule:", m)
    for m in re.findall(r'(--content-width[^{};]*:[^;]+;)', s):
        print("CSS var:", m)
