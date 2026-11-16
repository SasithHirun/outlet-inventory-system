import urllib.request
import re

url = 'https://aaghazzia.vercel.app/gallery'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|jpeg|png|webp))["\']', html, re.IGNORECASE)
        print('Total images on Vercel gallery:', len(imgs))
        for img in sorted(set(imgs)):
            print(img)
except Exception as e:
    print('Error:', e)
