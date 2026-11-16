import os
from PIL import Image, ImageEnhance, ImageOps, ImageFilter
import cv2
import numpy as np

src_dir = r"C:\Users\HP\Desktop\Aaghaz_Foundation_Images\New folder"
out_dir = os.path.join(src_dir, "Enhanced_800x800")
os.makedirs(out_dir, exist_ok=True)

files = [f for f in os.listdir(src_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]

print(f"Processing {len(files)} images from: {src_dir}")
print(f"Output directory: {out_dir}\n")

target_size = (800, 800)

for idx, filename in enumerate(files, 1):
    in_path = os.path.join(src_dir, filename)
    out_path = os.path.join(out_dir, filename)
    
    # 1. Open with PIL and handle EXIF rotation
    img = Image.open(in_path)
    img = ImageOps.exif_transpose(img)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # 2. Resize & crop to square 800x800 using high-quality Lanczos resampling (center-weighted crop)
    img_sq = ImageOps.fit(img, target_size, method=Image.Resampling.LANCZOS, centering=(0.5, 0.45))
    
    # 3. Convert to OpenCV for gentle denoising and unsharp masking
    cv_img = cv2.cvtColor(np.array(img_sq), cv2.COLOR_RGB2BGR)
    
    # Non-local means denoising for color images (subtle, preserves edges)
    denoised = cv2.fastNlMeansDenoisingColored(cv_img, None, h=3, hColor=3, templateWindowSize=7, searchWindowSize=21)
    
    # Unsharp Mask to crispen details
    gaussian = cv2.GaussianBlur(denoised, (0, 0), sigmaX=1.2)
    sharpened = cv2.addWeighted(denoised, 1.35, gaussian, -0.35, 0)
    
    # Convert back to PIL for color/contrast tuning
    enhanced_pil = Image.fromarray(cv2.cvtColor(sharpened, cv2.COLOR_BGR2RGB))
    
    # 4. Enhance contrast, color saturation, and brightness slightly
    enhancer_contrast = ImageEnhance.Contrast(enhanced_pil)
    enhanced_pil = enhancer_contrast.enhance(1.08)
    
    enhancer_color = ImageEnhance.Color(enhanced_pil)
    enhanced_pil = enhancer_color.enhance(1.06)
    
    enhancer_sharp = ImageEnhance.Sharpness(enhanced_pil)
    enhanced_pil = enhancer_sharp.enhance(1.15)
    
    # 5. Save at high JPEG quality
    enhanced_pil.save(out_path, format="JPEG", quality=95, subsampling=0)
    print(f"[{idx}/{len(files)}] Enhanced & Saved: {filename} -> 800x800")

print("\nAll images successfully enhanced and saved to:")
print(out_dir)
