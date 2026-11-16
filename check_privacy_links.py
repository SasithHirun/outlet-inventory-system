import urllib.request
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    'https://aaghazzia.vercel.app/',
    'https://infobahndubai.com/demo/agaaz/privacy-policy/',
    'https://infobahndubai.com/demo/agaaz/'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            links = re.findall(r'href=["\']([^"\']*(?:privacy|terms|policy)[^"\']*)["\']', content, re.I)
            print(f"Links on {url}:", set(links))
    except Exception as e:
        print(f"Failed {url}: {e}")
