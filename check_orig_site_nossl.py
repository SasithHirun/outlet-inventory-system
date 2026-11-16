import urllib.request
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://www.aaghazfoundation.com/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|jpeg|png))["\']', html, re.IGNORECASE)
        print('Total images on original aaghazfoundation.com:', len(imgs))
        for img in sorted(set(imgs)):
            print(img)
except Exception as e:
    print('Error:', e)
