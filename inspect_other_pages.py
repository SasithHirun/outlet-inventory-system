import re

for filename in ['services.html', 'annual-maintenance.html', 'emergency-lighting.html', 'fire-extinguishers.html']:
    try:
        with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
            text = f.read()
        print(f"=== {filename} ===")
        body = re.findall(r'<body[^>]*class=["\']([^"\']*)["\']', text)
        if body:
            print("Body class:", body[0][:150])
        sections = re.findall(r'<section[^>]*class=["\']([^"\']+)["\']', text)
        for s in sections[:4]:
            print("Section:", s)
        containers = re.findall(r'<div[^>]*class=["\']([^"\']*(?:container|elementor-container)[^"\']*)["\']', text)
        for c in containers[:4]:
            print("Container:", c)
    except Exception as e:
        print(f"Error {filename}: {e}")
