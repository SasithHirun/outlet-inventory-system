import urllib.request
import re

url = 'https://www.facebook.com/AaghazFoundation/photos'
headers = {
    'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print('Status 200, length:', len(html))
        imgs = re.findall(r'https://scontent[^\s"\'<>]+\.jpg[^\s"\'<>]*', html)
        print('Found scontent images:', len(imgs))
        for img in set(imgs)[:10]:
            print(img)
except Exception as e:
    print('Error:', e)
