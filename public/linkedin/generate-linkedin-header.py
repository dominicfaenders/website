#!/usr/bin/env python3
"""Generate LinkedIn profile banner alternatives for treuhans (1584×396)."""

from __future__ import annotations

import subprocess
from pathlib import Path
from typing import Optional, Tuple

from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance, ImageChops, ImageOps

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = Path(__file__).resolve().parent

W, H = 1584, 396
SAFE_LEFT = 420  # profile photo overlap zone
CLAIM = "Werte schaffen mit Immobilien"
URL = "www.treuhans.de"

INK = (29, 29, 31)
MUTED = (110, 110, 115)
WHITE = (255, 255, 255)
SUBTLE = (245, 245, 247)


def render_logo(width_px: int, invert: bool = False) -> Image.Image:
    svg = ROOT / "public" / "treuhans.svg"
    subprocess.check_call(
        ["qlmanage", "-t", "-s", str(max(800, width_px * 3)), "-o", "/tmp", str(svg)],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    src = list(Path("/tmp").glob("treuhans.svg.png"))[0]
    img = Image.open(src).convert("RGBA")
    gray = img.convert("L")
    mask = gray.point(lambda p: 255 if p < 245 else 0)
    bbox = mask.getbbox()
    if bbox:
        img = img.crop(bbox)
    ratio = width_px / img.width
    img = img.resize((width_px, max(1, int(img.height * ratio))), Image.Resampling.LANCZOS)
    # Punch near-white background to transparent (qlmanage renders on white)
    pixels = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            if r > 245 and g > 245 and b > 245:
                pixels[x, y] = (255, 255, 255, 0)
    if invert:
        # Black ink → white ink; preserve letterform alpha from darkness
        _r, _g, _b, a = img.split()
        luminance = img.convert("L")
        ink = luminance.point(lambda p: 255 - p)
        new_a = ImageChops.multiply(ink, a)
        white = Image.new("L", img.size, 255)
        img = Image.merge("RGBA", (white, white, white, new_a))
    return img


def load_skyline() -> Optional[Image.Image]:
    path = ROOT / "public" / "images" / "leipzig-skyline.jpg"
    if not path.exists():
        return None
    return Image.open(path).convert("RGB")


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
        if bold
        else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for p in candidates:
        if Path(p).exists():
            try:
                return ImageFont.truetype(p, size)
            except OSError:
                continue
    return ImageFont.load_default()


def cover_crop(src: Image.Image, w: int, h: int) -> Image.Image:
    ratio = max(w / src.width, h / src.height)
    nw, nh = int(src.width * ratio), int(src.height * ratio)
    resized = src.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = int((nh - h) * 0.35)  # bias slightly upward for skyline
    return resized.crop((left, top, left + w, top + h))


def extract_skyline_ridge(src: Image.Image, width: int) -> list:
    """Return normalized heights 0..1 (0=bottom/low, 1=tall) for each x column."""
    # Work on a manageable grayscale crop focused on buildings vs sky
    sample_h = 320
    ratio = sample_h / src.height
    sample_w = max(64, int(src.width * ratio))
    g = src.resize((sample_w, sample_h), Image.Resampling.LANCZOS).convert("L")
    g = g.filter(ImageFilter.GaussianBlur(radius=1.2))
    pix = g.load()

    # Sky is typically brighter at top — find first dark-ish building edge per column
    ridge = []
    for x in range(sample_w):
        # look from top down for transition into buildings
        edge_y = sample_h - 1
        for y in range(8, sample_h - 4):
            # local contrast: darker than neighbors above
            above = pix[x, max(0, y - 3)]
            here = pix[x, y]
            if here < 170 and (above - here) > 12:
                edge_y = y
                break
            if here < 130:
                edge_y = y
                break
        # height from bottom
        height = 1.0 - (edge_y / (sample_h - 1))
        ridge.append(max(0.05, min(1.0, height)))

    # Smooth
    smoothed = ridge[:]
    for _ in range(4):
        nxt = smoothed[:]
        for i in range(1, len(smoothed) - 1):
            nxt[i] = 0.25 * smoothed[i - 1] + 0.5 * smoothed[i] + 0.25 * smoothed[i + 1]
        smoothed = nxt

    # Resample to target width
    out = []
    for x in range(width):
        t = x / max(1, width - 1)
        src_x = t * (len(smoothed) - 1)
        i = int(src_x)
        f = src_x - i
        if i >= len(smoothed) - 1:
            out.append(smoothed[-1])
        else:
            out.append(smoothed[i] * (1 - f) + smoothed[i + 1] * f)
    return out


def hand_drawn_city_ridge(width: int) -> list:
    """Intentional Leipzig-like pen silhouette (towers, roofs, steps)."""
    keys = [
        (0.00, 0.22),
        (0.04, 0.28),
        (0.08, 0.35),
        (0.11, 0.32),
        (0.14, 0.48),
        (0.16, 0.30),
        (0.20, 0.38),
        (0.24, 0.34),
        (0.28, 0.55),
        (0.31, 0.42),
        (0.35, 0.36),
        (0.39, 0.62),
        (0.41, 0.88),
        (0.43, 0.58),
        (0.46, 0.40),
        (0.50, 0.45),
        (0.54, 0.33),
        (0.58, 0.50),
        (0.61, 0.36),
        (0.65, 0.42),
        (0.69, 0.70),
        (0.71, 0.38),
        (0.76, 0.34),
        (0.80, 0.48),
        (0.84, 0.30),
        (0.88, 0.40),
        (0.92, 0.28),
        (0.96, 0.34),
        (1.00, 0.24),
    ]
    out = []
    for x in range(width):
        t = x / max(1, width - 1)
        for i in range(len(keys) - 1):
            x0, y0 = keys[i]
            x1, y1 = keys[i + 1]
            if x0 <= t <= x1 or i == len(keys) - 2:
                u = 0 if x1 == x0 else (t - x0) / (x1 - x0)
                u = max(0.0, min(1.0, u))
                u = u * u * (3 - 2 * u)
                out.append(y0 * (1 - u) + y1 * u)
                break
    for i in range(len(out)):
        wobble = ((i * 37) % 7 - 3) * 0.004
        out[i] = max(0.12, min(0.95, out[i] + wobble))
    return out


def draw_pen_skyline(
    base: Image.Image,
    *,
    x0: int,
    x1: int,
    bottom: int,
    max_height: int,
    ridge: list,
    scale: int = 1,
    color: Tuple[int, int, int] = INK,
) -> None:
    """Draw a black-pen city contour along the bottom edge."""
    width = x1 - x0
    if width <= 1 or not ridge:
        return

    pts = []
    for i, h_norm in enumerate(ridge):
        x = x0 + int(i * (width - 1) / max(1, len(ridge) - 1))
        y = bottom - int(h_norm * max_height)
        pts.append((x, y))

    # Soft filled silhouette under the contour
    fill_pts = [(x0, bottom)] + pts + [(x1 - 1, bottom)]
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.polygon(fill_pts, fill=(29, 29, 31, 32))
    composed = Image.alpha_composite(base.convert("RGBA"), overlay).convert("RGB")
    base.paste(composed)

    d = ImageDraw.Draw(base)
    stroke = max(2, int(2.4 * scale))
    d.line(pts, fill=color, width=stroke, joint="curve")
    if len(pts) > 2:
        pts2 = [(x, min(bottom - 1, y + max(1, scale))) for x, y in pts]
        d.line(pts2, fill=color, width=max(1, stroke - 1), joint="curve")
    d.line([(x0, bottom), (x1 - 1, bottom)], fill=color, width=max(1, scale))


def variant_g_silhouette(scale: int = 1) -> Image.Image:
    """50/50 — links Stadt-Kontur (Stift), rechts Logo auf leichtem Grau."""
    w, h = W * scale, H * scale
    half = w // 2
    img = Image.new("RGB", (w, h), WHITE)

    draw = ImageDraw.Draw(img)
    draw.rectangle([half, 0, w, h], fill=SUBTLE)

    # Expressive pen silhouette along the bottom edge
    ridge = hand_drawn_city_ridge(half)
    bottom = h - int(14 * scale)
    max_height = int(h * 0.48)
    draw_pen_skyline(
        img,
        x0=0,
        x1=half,
        bottom=bottom,
        max_height=max_height,
        ridge=ridge,
        scale=scale,
        color=INK,
    )

    logo = render_logo(240 * scale)
    pad = 36 * scale
    content_x = min(half + pad, w - logo.width - pad)
    content_y = int(h * 0.18)

    return paste_brand(
        img,
        logo=logo,
        content_x=content_x,
        content_y=content_y,
        claim_color=MUTED,
        url_color=INK,
        rule_color=INK,
        scale=scale,
    )

def paste_brand(
    base: Image.Image,
    *,
    logo: Image.Image,
    content_x: int,
    content_y: int,
    claim_color: Tuple[int, int, int],
    url_color: Tuple[int, int, int],
    rule_color: Optional[Tuple[int, int, int]],
    scale: int,
    show_url: bool = True,
) -> Image.Image:
    img = base.convert("RGBA")
    img.paste(logo, (content_x, content_y), logo)
    draw = ImageDraw.Draw(img)

    # Full logo-width rule + airy vertical rhythm
    rule_gap = 20 * scale
    rule_h = max(2, scale)
    after_rule = 28 * scale

    rule_y = content_y + logo.height + rule_gap
    if rule_color:
        draw.rectangle(
            [content_x, rule_y, content_x + logo.width, rule_y + rule_h],
            fill=rule_color,
        )

    claim_y = rule_y + rule_h + after_rule
    draw.text((content_x, claim_y), CLAIM, font=font(24 * scale), fill=claim_color)
    if show_url:
        url_y = claim_y + 48 * scale
        draw.text((content_x, url_y), URL, font=font(18 * scale, bold=True), fill=url_color)

    return img.convert("RGB")


def brand_block_xy(w: int, h: int, scale: int, panel_right: Optional[int] = None):
    """Vertically centered brand block, clear of avatar zone."""
    safe_left = SAFE_LEFT * scale
    content_x = safe_left + 28 * scale
    if panel_right is not None:
        # keep text inside white panel with side padding
        content_x = min(content_x, panel_right - 320 * scale)
        content_x = max(safe_left + 16 * scale, content_x)
    content_y = int(h * 0.18)
    return content_x, content_y


def make_split(
    scale: int,
    *,
    split_ratio: float,
    photo_mode: str = "color",  # color | muted | mono | bright
    divider: str = "line",  # line | soft | none | thick
    panel_color: Tuple[int, int, int] = WHITE,
    logo_w: int = 260,
    brand_on: str = "left",  # left | right
) -> Image.Image:
    """Shared builder for split layouts."""
    w, h = W * scale, H * scale
    brand_w = int(w * split_ratio)
    photo_w = w - brand_w
    img = Image.new("RGB", (w, h), panel_color)

    sky = load_skyline()
    photo = None
    if sky:
        photo = cover_crop(sky, photo_w, h)
        if photo_mode == "muted":
            photo = ImageEnhance.Color(photo).enhance(0.35)
            photo = ImageEnhance.Brightness(photo).enhance(1.12)
            photo = ImageEnhance.Contrast(photo).enhance(0.9)
        elif photo_mode == "mono":
            photo = ImageOps.grayscale(photo).convert("RGB")
            photo = ImageEnhance.Contrast(photo).enhance(1.05)
            photo = ImageEnhance.Brightness(photo).enhance(1.08)
        elif photo_mode == "bright":
            photo = ImageEnhance.Color(photo).enhance(0.75)
            photo = ImageEnhance.Brightness(photo).enhance(1.2)
            photo = ImageEnhance.Contrast(photo).enhance(0.95)
        else:
            photo = ImageEnhance.Color(photo).enhance(0.9)
            photo = ImageEnhance.Contrast(photo).enhance(1.05)

    if brand_on == "right":
        # Photo left, brand panel right
        if photo is not None:
            img.paste(photo, (0, 0))
        # paint brand panel
        draw = ImageDraw.Draw(img)
        draw.rectangle([photo_w, 0, w, h], fill=panel_color)
        seam_x = photo_w
        panel_left, panel_right = photo_w, w
    else:
        # Brand left, photo right (default)
        if photo is not None:
            img.paste(photo, (brand_w, 0))
        seam_x = brand_w
        panel_left, panel_right = 0, brand_w

    draw = ImageDraw.Draw(img)
    if divider == "line":
        draw.rectangle([seam_x - max(1, scale), 0, seam_x + max(1, scale), h], fill=INK)
    elif divider == "thick":
        draw.rectangle([seam_x - 2 * scale, 0, seam_x + 2 * scale, h], fill=INK)
    elif divider == "soft":
        seam = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        sd = ImageDraw.Draw(seam)
        span = 70 * scale
        for i in range(span):
            t = i / max(1, span)
            a = int(255 * (1 - t))
            if brand_on == "right":
                # fade from photo into white panel
                x = seam_x + i
                sd.line([(x, 0), (x, h)], fill=(*panel_color, a))
            else:
                x = seam_x - span + i
                sd.line([(x, 0), (x, h)], fill=(*panel_color, a))
        img = Image.alpha_composite(img.convert("RGBA"), seam).convert("RGB")

    logo = render_logo(logo_w * scale)
    pad = 36 * scale
    if brand_on == "right":
        content_x = panel_left + pad
        # keep logo inside panel
        content_x = min(content_x, panel_right - logo.width - pad)
    else:
        content_x = max(SAFE_LEFT * scale + 16 * scale, panel_left + pad)
        content_x = min(content_x, panel_right - logo.width - 24 * scale)
    content_y = int(h * 0.18)

    return paste_brand(
        img,
        logo=logo,
        content_x=content_x,
        content_y=content_y,
        claim_color=MUTED,
        url_color=INK,
        rule_color=INK,
        scale=scale,
    )


def variant_a_light_skyline(scale: int = 1) -> Image.Image:
    """Hell mit dezentem Skyline-Verlauf rechts (Originalrichtung)."""
    w, h = W * scale, H * scale
    safe_left = SAFE_LEFT * scale
    img = Image.new("RGB", (w, h), WHITE)
    draw = ImageDraw.Draw(img)
    for x in range(w):
        g = int(255 - 8 * (x / w))
        draw.line([(x, 0), (x, h)], fill=(g, g, g))

    sky = load_skyline()
    if sky:
        ratio = h / sky.height
        sw = int(sky.width * ratio)
        sky = sky.resize((sw, h), Image.Resampling.LANCZOS)
        sky = ImageEnhance.Color(sky).enhance(0.15)
        sky = ImageEnhance.Brightness(sky).enhance(1.35)
        sky = ImageEnhance.Contrast(sky).enhance(0.75)
        sky = sky.filter(ImageFilter.GaussianBlur(radius=1.2 * scale))
        overlay = Image.new("RGBA", (w, h), (255, 255, 255, 0))
        overlay.paste(sky.convert("RGBA"), (w - int(sw * 0.92), 0))
        fade = Image.new("L", (w, h), 0)
        fd = ImageDraw.Draw(fade)
        start = int(w * 0.42)
        for x in range(start, w):
            a = int(55 * ((x - start) / max(1, w - start)))
            fd.line([(x, 0), (x, h)], fill=min(70, a))
        faded = Image.composite(overlay, Image.new("RGBA", (w, h), (*WHITE, 255)), fade)
        img = Image.alpha_composite(img.convert("RGBA"), faded).convert("RGB")

    veil = Image.new("RGBA", (w, h), (255, 255, 255, 0))
    vd = ImageDraw.Draw(veil)
    for x in range(safe_left, int(w * 0.78)):
        a = 160 if x < int(w * 0.55) else int(160 * (1 - (x - w * 0.55) / (w * 0.23)))
        vd.line([(x, 0), (x, h)], fill=(255, 255, 255, max(0, min(180, a))))
    img = Image.alpha_composite(img.convert("RGBA"), veil).convert("RGB")

    return paste_brand(
        img,
        logo=render_logo(280 * scale),
        content_x=safe_left + 24 * scale,
        content_y=int(h * 0.28),
        claim_color=MUTED,
        url_color=INK,
        rule_color=INK,
        scale=scale,
    )


def variant_b_fullbleed_dark(scale: int = 1) -> Image.Image:
    """Volle Skyline, dunkler Overlay, weißes Logo."""
    w, h = W * scale, H * scale
    safe_left = SAFE_LEFT * scale
    sky = load_skyline()
    if sky:
        img = cover_crop(sky, w, h)
        img = ImageEnhance.Color(img).enhance(0.55)
        img = ImageEnhance.Contrast(img).enhance(1.05)
    else:
        img = Image.new("RGB", (w, h), (20, 24, 22))

    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    # Stronger left dark panel for readability, softer right
    for x in range(w):
        if x < safe_left + 80 * scale:
            a = 150
        elif x < int(w * 0.7):
            t = (x - safe_left - 80 * scale) / max(1, int(w * 0.7) - safe_left - 80 * scale)
            a = int(150 - 70 * t)
        else:
            a = 80
        od.line([(x, 0), (x, h)], fill=(10, 14, 13, a))
    # Bottom vignette
    for y in range(int(h * 0.55), h):
        a = int(50 * ((y - h * 0.55) / (h * 0.45)))
        od.line([(0, y), (w, y)], fill=(10, 14, 13, a))

    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    return paste_brand(
        img,
        logo=render_logo(280 * scale, invert=True),
        content_x=safe_left + 24 * scale,
        content_y=int(h * 0.28),
        claim_color=(210, 210, 212),
        url_color=WHITE,
        rule_color=WHITE,
        scale=scale,
    )


def variant_c_minimal_white(scale: int = 1) -> Image.Image:
    """Nur Weiß, Logo + Claim — maximal ruhig."""
    w, h = W * scale, H * scale
    safe_left = SAFE_LEFT * scale
    img = Image.new("RGB", (w, h), WHITE)
    draw = ImageDraw.Draw(img)
    # subtle top hairline
    draw.rectangle([0, 0, w, max(2, scale)], fill=(232, 232, 237))
    return paste_brand(
        img,
        logo=render_logo(300 * scale),
        content_x=safe_left + 24 * scale,
        content_y=int(h * 0.30),
        claim_color=MUTED,
        url_color=INK,
        rule_color=INK,
        scale=scale,
    )


def variant_d_ink_panel(scale: int = 1) -> Image.Image:
    """Dunkle Markenfläche links, helles Feld rechts mit Skyline-Ausschnitt."""
    w, h = W * scale, H * scale
    safe_left = SAFE_LEFT * scale
    img = Image.new("RGB", (w, h), SUBTLE)

    sky = load_skyline()
    if sky:
        panel_x = int(w * 0.48)
        right = cover_crop(sky, w - panel_x, h)
        right = ImageEnhance.Color(right).enhance(0.7)
        right = ImageEnhance.Brightness(right).enhance(1.05)
        img.paste(right, (panel_x, 0))
        # soft seam
        seam = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        sd = ImageDraw.Draw(seam)
        for i in range(60 * scale):
            a = int(40 * (1 - i / (60 * scale)))
            sd.line([(panel_x + i, 0), (panel_x + i, h)], fill=(245, 245, 247, a))
        img = Image.alpha_composite(img.convert("RGBA"), seam).convert("RGB")

    # Dark brand strip behind content (but leave avatar area lighter)
    brand = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    bd = ImageDraw.Draw(brand)
    bd.rectangle([0, 0, int(w * 0.52), h], fill=(10, 14, 13, 255))
    # fade brand into photo
    for i in range(80 * scale):
        a = int(255 * (1 - i / (80 * scale)))
        bd.line(
            [(int(w * 0.52) - 80 * scale + i, 0), (int(w * 0.52) - 80 * scale + i, h)],
            fill=(10, 14, 13, a),
        )
    img = Image.alpha_composite(img.convert("RGBA"), brand).convert("RGB")

    return paste_brand(
        img,
        logo=render_logo(280 * scale, invert=True),
        content_x=safe_left + 24 * scale,
        content_y=int(h * 0.28),
        claim_color=(180, 180, 184),
        url_color=WHITE,
        rule_color=WHITE,
        scale=scale,
    )


def variant_e_subtle_gray(scale: int = 1) -> Image.Image:
    """Apple-like Grau (#f5f5f7), ohne Foto — Claim großzügig."""
    w, h = W * scale, H * scale
    safe_left = SAFE_LEFT * scale
    img = Image.new("RGB", (w, h), SUBTLE)
    draw = ImageDraw.Draw(img)
    # soft bottom edge accent
    draw.rectangle([0, h - max(3, 2 * scale), w, h], fill=INK)
    return paste_brand(
        img,
        logo=render_logo(300 * scale),
        content_x=safe_left + 24 * scale,
        content_y=int(h * 0.30),
        claim_color=MUTED,
        url_color=INK,
        rule_color=None,
        scale=scale,
        show_url=True,
    )


def variant_f_split_58(scale: int = 1) -> Image.Image:
    """Split 58/42 — Weiß / Farbe, feine Linie."""
    return make_split(scale, split_ratio=0.58, photo_mode="color", divider="line")


def variant_g_split_50(scale: int = 1) -> Image.Image:
    """50/50 — links Stadt-Kontur (Stift), rechts Logo auf leichtem Grau."""
    return variant_g_silhouette(scale)


def variant_h_split_62(scale: int = 1) -> Image.Image:
    """Split 62/38 — mehr Markenfläche."""
    return make_split(scale, split_ratio=0.62, photo_mode="color", divider="line")


def variant_i_split_soft(scale: int = 1) -> Image.Image:
    """Split weich — Weiß läuft ins Foto."""
    return make_split(scale, split_ratio=0.55, photo_mode="color", divider="soft")


def variant_j_split_mono(scale: int = 1) -> Image.Image:
    """Split Weiß / Schwarzweiß-Foto."""
    return make_split(scale, split_ratio=0.56, photo_mode="mono", divider="line")


def variant_k_split_muted(scale: int = 1) -> Image.Image:
    """Split Weiß / entsättigtes Foto."""
    return make_split(scale, split_ratio=0.58, photo_mode="muted", divider="line")


def variant_l_split_grau(scale: int = 1) -> Image.Image:
    """Split Grau-Panel / Farbfoto."""
    return make_split(
        scale,
        split_ratio=0.56,
        photo_mode="color",
        divider="line",
        panel_color=SUBTLE,
    )


def variant_m_split_thick(scale: int = 1) -> Image.Image:
    """Split mit kräftiger Trennlinie."""
    return make_split(scale, split_ratio=0.55, photo_mode="bright", divider="thick")


def variant_n_split_wide_brand(scale: int = 1) -> Image.Image:
    """Breites Markenfeld (66%), schmales Foto."""
    return make_split(scale, split_ratio=0.66, photo_mode="color", divider="none", logo_w=270)


VARIANTS = {
    "a-hell-skyline": ("Hell + dezente Skyline", variant_a_light_skyline),
    "b-skyline-dunkel": ("Volle Skyline, dunkel", variant_b_fullbleed_dark),
    "c-minimal-weiss": ("Minimal nur Weiß", variant_c_minimal_white),
    "d-ink-panel": ("Dunkles Panel + Foto", variant_d_ink_panel),
    "e-grau": ("Dezentes Grau, ohne Foto", variant_e_subtle_gray),
    "f-split-58": ("Split 58/42 Farbe", variant_f_split_58),
    "g-split-50": ("Split 50/50", variant_g_split_50),
    "h-split-62": ("Split 62/38 mehr Brand", variant_h_split_62),
    "i-split-weich": ("Split weicher Übergang", variant_i_split_soft),
    "j-split-sw": ("Split Weiß / S/W-Foto", variant_j_split_mono),
    "k-split-muted": ("Split Weiß / muted Foto", variant_k_split_muted),
    "l-split-grau": ("Split Grau / Farbe", variant_l_split_grau),
    "m-split-linie": ("Split mit dicker Linie", variant_m_split_thick),
    "n-split-breit": ("Split 66% Brandfläche", variant_n_split_wide_brand),
}


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    # Remove obsolete f-split-scharf filename if present
    old = OUT_DIR / "treuhans-linkedin-header-f-split-scharf.png"
    if old.exists():
        old.unlink()

    for key, (label, fn) in VARIANTS.items():
        path = OUT_DIR / f"treuhans-linkedin-header-{key}.png"
        img = fn(scale=1)
        img.save(path, format="PNG", optimize=True)
        print(f"{key}: {label} → {path.name} ({path.stat().st_size} bytes)")

    primary = OUT_DIR / "treuhans-linkedin-header.png"
    variant_f_split_58(1).save(primary, format="PNG", optimize=True)
    print(f"primary → {primary.name} (split 58)")


if __name__ == "__main__":
    main()
