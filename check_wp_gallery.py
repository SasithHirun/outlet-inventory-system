import urllib.request
import re

url = 'https://infobahndubai.com/demo/agaaz/gallery/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'https://infobahndubai\.com/demo/agaaz/wp-content/uploads/[^"\'\s<>]+\.(?:jpg|jpeg|png)', html, re.IGNORECASE)
        print('Total WordPress uploads on gallery page:', len(imgs))
        for img in sorted(set(imgs)):
            print(img)
except Exception as e:
    print('Error:', e)
