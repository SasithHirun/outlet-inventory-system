import os
import urllib.request

desktop = os.path.join(os.path.expanduser("~"), "Desktop")
target_dir = os.path.join(desktop, "Aaghaz_Foundation_Images")
os.makedirs(target_dir, exist_ok=True)

images = [
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-classroom-teacher.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-two-girls-studying.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-volunteers-with-children.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-children-lined-up.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-field-meeting.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-visitors-with-schoolgirls.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-writing.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-reading-garden.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-studying-desk.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-walking-to-school.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-boy-studying.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-schoolgirl-portrait.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-young-woman-student.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-donors-group.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-family-portrait.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-boy-portrait.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-children-by-field.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-hijab-portrait.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-looking-up.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-portrait.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-school-bag-shop.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-studying-bed.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-girl-with-peacock.jpg",
    "https://infobahndubai.com/demo/agaaz/wp-content/uploads/2026/10/gallery-book-distribution.jpg"
]

print(f"Downloading to: {target_dir}")
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

downloaded = 0
for url in images:
    filename = url.split("/")[-1]
    filepath = os.path.join(target_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp, open(filepath, "wb") as f:
            f.write(resp.read())
        downloaded += 1
        print(f"Saved: {filename}")
    except Exception as e:
        print(f"Failed {filename}: {e}")

print(f"\nCompleted! Total downloaded: {downloaded}/{len(images)}")
