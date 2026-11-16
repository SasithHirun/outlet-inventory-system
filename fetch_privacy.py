import urllib.request
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    'https://aaghazzia.vercel.app/privacy-policy',
    'https://aaghazzia.vercel.app/privacy-policy/',
    'https://aaghazzia.vercel.app/privacy'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            print(f"Success for {url}: length {len(content)}")
            with open('vercel_privacy.html', 'w', encoding='utf-8') as f:
                f.write(content)
            break
    except Exception as e:
        print(f"Failed {url}: {e}")
