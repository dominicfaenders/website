#!/usr/bin/env python3
"""Generate treuhans E-POST letterheads: Intranet + Impower watermark."""

from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.graphics import renderPDF
from svglib.svglib import svg2rlg

ROOT = Path(__file__).resolve().parents[2]
LOGO = ROOT / "public" / "treuhans.svg"
DIR = Path(__file__).resolve().parent

OUT_INTRANET = DIR / "treuhans-epost-intranet.pdf"
OUT_INTRANET_WM = DIR / "treuhans-epost-intranet-wasserzeichen.pdf"
OUT_IMPOWER = DIR / "treuhans-epost-impower.pdf"
OUT_IMPOWER_P1 = DIR / "treuhans-epost-impower-seite1.pdf"
OUT_IMPOWER_P2 = DIR / "treuhans-epost-impower-seite2.pdf"
# Alias: bisheriger Dateiname = Intranet
OUT_LEGACY = DIR / "treuhans-epost-briefpapier.pdf"

INK = colors.HexColor("#1d1d1f")
MUTED = colors.HexColor("#6e6e73")
LINE = colors.HexColor("#d2d2d7")
PLACEHOLDER = colors.HexColor("#8e8e93")
FOLD = colors.HexColor("#c7c7cc")

CLAIM = "Werte schaffen mit Immobilien"
SENDER = "treuhans GmbH · Burgplatz 2 · 04109 Leipzig"

FOOTER_COLS = [
    ("SITZ", ["treuhans GmbH", "Burgplatz 2", "04109 Leipzig"]),
    ("KONTAKT", ["0341 56 63 87 00", "hallo@treuhans.de", "www.treuhans.de"]),
    (
        "REGISTER",
        [
            "AG Leipzig · HRB 44074",
            "GF: Moritz Ertl, Dominic Fänders, Ferdinand Löbel",
            "USt-IdNr. DE455593227",
        ],
    ),
]


def _logo_drawing(logo_w: float):
    drawing = svg2rlg(str(LOGO))
    scale = logo_w / drawing.width
    drawing.width = logo_w
    drawing.height *= scale
    drawing.scale(scale, scale)
    return drawing


def _draw_brand(c: canvas.Canvas, *, margin_l: float, margin_r: float, w: float, h: float):
    logo_w = 42 * mm
    drawing = _logo_drawing(logo_w)
    logo_top = h - 12 * mm
    logo_x = margin_l
    renderPDF.draw(drawing, c, logo_x, logo_top - drawing.height)

    claim_target = logo_w * 0.98
    claim_size = 8.0
    claim_font = "Helvetica-Bold"
    claim_w = c.stringWidth(CLAIM, claim_font, claim_size)
    if claim_w > 0:
        claim_size = claim_size * (claim_target / claim_w)
    c.setFont(claim_font, claim_size)
    c.setFillColor(MUTED)
    claim_y = logo_top - drawing.height - 4 * mm
    c.drawString(logo_x + 2, claim_y, CLAIM)
    return claim_y


def _draw_footer(
    c: canvas.Canvas,
    *,
    w: float,
    margin_l: float,
    margin_r: float,
    footer_bottom: float,
    rule_max_from_bottom: float | None = None,
):
    """footer_bottom = y der untersten Textzeile (Abstand vom Seitenfuß).
    Spalten links bündig zusammengerückt (nicht über volle Breite gestreckt).
    rule_max_from_bottom: wenn gesetzt, liegt die Linie genau dort (Footer darunter).
    """
    max_lines = max(len(lines) for _, lines in FOOTER_COLS)
    if rule_max_from_bottom is not None:
        rule_y = rule_max_from_bottom
        title_y = rule_y - 3.2 * mm
        line_h = (title_y - footer_bottom) / max_lines
    else:
        line_h = 3.2 * mm
        title_y = footer_bottom + max_lines * line_h
        rule_y = title_y + 3.5 * mm

    c.setStrokeColor(LINE)
    c.setLineWidth(0.25 * mm)
    c.line(margin_l, rule_y, w - margin_r, rule_y)

    gap = 12 * mm
    x = margin_l
    for title, lines in FOOTER_COLS:
        c.setFont("Helvetica-Bold", 6.5)
        c.setFillColor(INK)
        c.drawString(x, title_y, title)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        col_max = c.stringWidth(title, "Helvetica-Bold", 6.5)
        for j, line in enumerate(lines):
            c.drawString(x, title_y - (j + 1) * line_h, line)
            col_max = max(col_max, c.stringWidth(line, "Helvetica", 6.5))
        x += col_max + gap




def draw_intranet(c: canvas.Canvas, blank: bool = False):
    """Intranet: volles Briefpapier mit Platzhaltern + Footer unten."""
    draw_intranet_chrome(c, blank=blank, placeholders=True)


def draw_intranet_chrome(
    c: canvas.Canvas,
    blank: bool = False,
    *,
    placeholders: bool = False,
):
    """Intranet-Briefkopf/Fuß — ohne Platzhalter als Word-/Druck-Wasserzeichen."""
    w, h = A4
    margin_l = 20 * mm
    margin_r = 20 * mm

    claim_y = _draw_brand(c, margin_l=margin_l, margin_r=margin_r, w=w, h=h)

    if blank:
        y_rule = claim_y - 5 * mm
        c.setStrokeColor(LINE)
        c.setLineWidth(0.25 * mm)
        c.line(margin_l, y_rule, w - margin_r, y_rule)
    else:
        c.setStrokeColor(FOLD)
        c.setLineWidth(0.15 * mm)
        for y in (h - 105 * mm, h - 210 * mm):
            c.line(0, y, 4 * mm, y)

        addr_x = margin_l
        addr_y_top = h - 45 * mm
        addr_w = 85 * mm

        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        c.drawString(addr_x, addr_y_top - 4 * mm, SENDER)
        c.setStrokeColor(INK)
        c.setLineWidth(0.2 * mm)
        c.line(
            addr_x,
            addr_y_top - 5.2 * mm,
            addr_x + min(addr_w, c.stringWidth(SENDER, "Helvetica", 6.5) + 2 * mm),
            addr_y_top - 5.2 * mm,
        )

        if placeholders:
            c.setFont("Helvetica", 10)
            c.setFillColor(INK)
            y = addr_y_top - 10 * mm
            for line in ["Firma / Name", "z. Hd. …", "Straße und Hausnummer", "PLZ Ort"]:
                c.drawString(addr_x, y, line)
                y -= 4.2 * mm

            y = h - 105 * mm
            c.setFillColor(PLACEHOLDER)
            c.setFont("Helvetica", 10.5)
            c.drawString(margin_l, y, "Leipzig, TT. Monat JJJJ")
            y -= 10 * mm
            c.setFillColor(INK)
            c.setFont("Helvetica-Bold", 10.5)
            c.drawString(margin_l, y, "Betreff")
            y -= 10 * mm
            c.setFillColor(PLACEHOLDER)
            c.setFont("Helvetica", 10.5)
            c.drawString(margin_l, y, "Sehr geehrte Damen und Herren,")
            y -= 8 * mm
            c.drawString(margin_l, y, "Ihr Schreibenstext …")
            y -= 14 * mm
            c.drawString(margin_l, y, "Mit freundlichen Grüßen")
            y -= 20 * mm
            c.drawString(margin_l, y, "Name · Funktion")

    _draw_footer(c, w=w, margin_l=margin_l, margin_r=margin_r, footer_bottom=8 * mm)


def draw_impower(c: canvas.Canvas, blank: bool = False):
    """Impower-Watermark: freie Zonen für Adresse, Datum, Seitenzahl."""
    w, h = A4
    margin_l = 20 * mm
    margin_r = 20 * mm

    claim_y = _draw_brand(c, margin_l=margin_l, margin_r=margin_r, w=w, h=h)

    if blank:
        # Fortsetzungsseite: Kopfzeile innerhalb der ~29-mm-Brand-Zone
        y_rule = min(claim_y - 4 * mm, h - 28 * mm)
        c.setStrokeColor(LINE)
        c.setLineWidth(0.25 * mm)
        c.line(margin_l, y_rule, w - margin_r, y_rule)
    else:
        c.setStrokeColor(FOLD)
        c.setLineWidth(0.15 * mm)
        for y in (h - 105 * mm, h - 210 * mm):
            c.line(0, y, 4 * mm, y)

        # Nur Absenderzeile im Fenster — Empfänger kommt von Impower
        addr_x = margin_l
        addr_y_top = h - 45 * mm
        addr_w = 85 * mm
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        c.drawString(addr_x, addr_y_top - 4 * mm, SENDER)
        c.setStrokeColor(INK)
        c.setLineWidth(0.2 * mm)
        c.line(
            addr_x,
            addr_y_top - 5.2 * mm,
            addr_x + min(addr_w, c.stringWidth(SENDER, "Helvetica", 6.5) + 2 * mm),
            addr_y_top - 5.2 * mm,
        )

    # Linie bei 29 mm, Text darunter bis ~15 mm (Platz für Datum/Seitenzahl)
    _draw_footer(
        c,
        w=w,
        margin_l=margin_l,
        margin_r=margin_r,
        footer_bottom=15 * mm,
        rule_max_from_bottom=29 * mm,
    )


def build(variant: str, out: Path, *, blank: bool | None = None):
    """blank=None → beide Seiten; True/False → nur Fortsetzung bzw. Seite 1."""
    c = canvas.Canvas(str(out), pagesize=A4)
    if variant == "intranet":
        c.setTitle("treuhans GmbH — E-POST Briefpapier (Intranet)")
        c.setSubject("DIN A4 letterhead with placeholders for intranet use")
        draw = draw_intranet
    elif variant == "intranet-watermark":
        c.setTitle("treuhans GmbH — E-POST Wasserzeichen (Intranet)")
        c.setSubject("DIN A4 letterhead chrome only — Word watermark")
        draw = lambda canvas_obj, blank=False: draw_intranet_chrome(
            canvas_obj, blank=blank, placeholders=False
        )
    elif variant == "impower":
        suffix = ""
        if blank is False:
            suffix = " — Seite 1"
        elif blank is True:
            suffix = " — Seite 2"
        c.setTitle(f"treuhans GmbH — E-POST Watermark (Impower){suffix}")
        c.setSubject("DIN A4 Impower watermark — free zones for address, date, page no.")
        draw = draw_impower
    else:
        raise ValueError(variant)

    c.setAuthor("treuhans GmbH")
    if blank is None:
        draw(c, blank=False)
        c.showPage()
        draw(c, blank=True)
        c.showPage()
    else:
        draw(c, blank=blank)
        c.showPage()
    c.save()
    print(f"PDF created: {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    build("intranet", OUT_INTRANET)
    build("intranet", OUT_LEGACY)
    build("intranet-watermark", OUT_INTRANET_WM)
    build("impower", OUT_IMPOWER)
    build("impower", OUT_IMPOWER_P1, blank=False)
    build("impower", OUT_IMPOWER_P2, blank=True)
