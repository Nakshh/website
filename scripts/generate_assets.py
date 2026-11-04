#!/usr/bin/env python3
"""Generate production portrait variants and the 1200×630 Open Graph card.

Run with: python -m pip install Pillow && python scripts/generate_assets.py
Generated assets are committed so Netlify needs only npm run build.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src/assets/me.jpeg"
OUTPUT = ROOT / "public/portraits"
OUTPUT.mkdir(parents=True, exist_ok=True)

with Image.open(SOURCE) as original:
    original = ImageOps.exif_transpose(original).convert("RGB")
    w, h = original.size
    for target in (480, 960, 1122):
        if target > w:
            continue
        height = round(h * target / w)
        resized = original.resize((target, height), Image.Resampling.LANCZOS)
        resized.save(OUTPUT / f"portrait-{target}.webp", format="WEBP", quality=88, method=6)

    # Editorial link card: actual portrait, linen ground, restrained typography.
    canvas = Image.new("RGB", (1200, 630), "#F3EEE6")
    portrait = ImageOps.fit(original, (508, 630), method=Image.Resampling.LANCZOS, centering=(0.5, 0.42))
    canvas.paste(portrait, (0, 0))
    draw = ImageDraw.Draw(canvas)
    serif_path = ROOT / "public/fonts/InstrumentSerif-Regular.ttf"
    serif = ImageFont.truetype(str(serif_path), 86)
    sans = ImageFont.truetype("DejaVuSans.ttf", 21)
    small = ImageFont.truetype("DejaVuSans.ttf", 18)
    ink = "#1A1714"
    taupe = "#665B50"
    draw.text((576, 200), "Nakshh Kohli", font=serif, fill=ink)
    draw.text((579, 352), "SOFTWARE ENGINEER", font=sans, fill=ink, stroke_width=0)
    draw.text((579, 389), "Hang Ten Systems · Menlo Park", font=small, fill=taupe)
    canvas.save(ROOT / "public/og-image.jpg", format="JPEG", quality=90, subsampling=0, optimize=True)
    print(f"Generated OG image and portraits from {w}x{h} source")
