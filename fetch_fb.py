import urllib.request
import re
import os

url = "https://mbasic.facebook.com/AaghazFoundation/photos/"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
        print("Status 200, length:", len(html))
        # Look for login redirect or content
        if "login" in resp.geturl().lower() or "login_form" in html:
            print("Redirected to Facebook login page.")
        else:
            print("Page fetched successfully!")
except Exception as e:
    print("Fetch error:", e)
