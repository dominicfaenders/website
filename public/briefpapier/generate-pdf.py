#!/usr/bin/env python3
"""Generate treuhans letterhead preview PDF (DIN A4)."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer
from reportlab.pdfgen import canvas
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPDF

ROOT = Path(__file__).resolve().parents[2]
LOGO = ROOT / "public" / "treuhans.svg"
OUT = Path(__file__).resolve().parent / "treuhans-briefpapier.pdf"

INK = colors.HexColor("#0a0e0d")
FOREST = colors.HexColor("#121816")
GOLD = colors.HexColor("#b8a078")
GOLD_LIGHT = colors.HexColor("#d4c4a8")
MUTED = colors.HexColor("#515154")
PLACEHOLDER = colors.HexColor("#6e6e73")
LINE = colors.HexColor("#e8e4dc")


def draw_header_footer(c: canvas.Canvas, doc):
    w, h = A4
    margin_x = 25 * mm
    top = h - 18 * mm

    # Logo
    drawing = svg2rlg(str(LOGO))
    logo_w = 46 * mm
    scale = logo_w / drawing.width
    drawing.width = logo_w
    drawing.height = drawing.height * scale
    drawing.scale(scale, scale)
    renderPDF.draw(drawing, c, margin_x, top - drawing.height)

    # Claim — match logo width (a hair narrower)
    claim = "Werte schaffen mit Immobilien"
    claim_target = logo_w * 0.98
    claim_size = 8.5
    claim_font = "Helvetica-Bold"
    claim_w = c.stringWidth(claim, claim_font, claim_size)
    if claim_w > 0:
        claim_size = claim_size * (claim_target / claim_w)
    c.setFont(claim_font, claim_size)
    c.setFillColor(MUTED)
    claim_y = top - drawing.height - 4 * mm
    c.drawString(margin_x, claim_y, claim)

    # Gold rule
    y_rule = claim_y - 6 * mm
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.45 * mm)
    c.line(margin_x, y_rule, w - margin_x, y_rule)

    # Sender line
    c.setFont("Helvetica", 6.5)
    c.setFillColor(MUTED)
    sender = "treuhans GmbH · Burgplatz 2 · 04109 Leipzig"
    c.drawString(margin_x, y_rule - 6 * mm, sender)

    # Footer
    footer_top = 28 * mm
    c.setStrokeColor(LINE)
    c.setLineWidth(0.25 * mm)
    c.line(margin_x, footer_top + 14 * mm, w - margin_x, footer_top + 14 * mm)

    col_w = (w - 2 * margin_x) / 3
    cols = [
        (
            "KONTAKT",
            [
                "treuhans GmbH",
                "Burgplatz 2",
                "04109 Leipzig",
                "hallo@treuhans.de",
            ],
        ),
        (
            "TELEFON",
            [
                "0341 56 63 87 00",
                "www.treuhans.de",
            ],
        ),
        (
            "REGISTER",
            [
                "Amtsgericht Leipzig",
                "HRB 44074",
                "Geschäftsführung: Moritz Ertl, Dominic Fänders, Ferdinand Löbel",
            ],
        ),
    ]

    y = footer_top + 9 * mm
    for i, (title, lines) in enumerate(cols):
        x = margin_x + i * col_w
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(FOREST)
        c.drawString(x, y, title)
        c.setFont("Helvetica", 7)
        c.setFillColor(MUTED)
        for j, line in enumerate(lines):
            c.drawString(x, y - (j + 1) * 3.5 * mm, line)


def build_pdf():
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=25 * mm,
        rightMargin=25 * mm,
        topMargin=52 * mm,
        bottomMargin=38 * mm,
    )

    body = ParagraphStyle(
        "Body",
        fontName="Helvetica",
        fontSize=10.5,
        leading=16,
        textColor=INK,
    )
    placeholder = ParagraphStyle(
        "Placeholder",
        parent=body,
        textColor=PLACEHOLDER,
    )
    subject = ParagraphStyle(
        "Subject",
        parent=body,
        fontName="Helvetica-Bold",
        fontSize=11,
        spaceAfter=8 * mm,
    )

    story = [
        Paragraph(
            '<font color="#b8b2a8">Firma / Name<br/>Straße und Hausnummer<br/>PLZ Ort</font>',
            body,
        ),
        Spacer(1, 10 * mm),
        Paragraph(
            'Leipzig, <font color="#b8b2a8">Datum</font>',
            body,
        ),
        Spacer(1, 8 * mm),
        Paragraph('<font color="#b8b2a8">Betreffzeile</font>', subject),
        Paragraph('<font color="#b8b2a8">Sehr geehrte Damen und Herren,</font>', body),
        Spacer(1, 4.5 * mm),
        Paragraph(
            '<font color="#b8b2a8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            "Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, "
            "ultricies sed, dolor.</font>",
            body,
        ),
        Spacer(1, 4.5 * mm),
        Paragraph(
            '<font color="#b8b2a8">Cras elementum ultrices diam. Maecenas ligula massa, varius a, '
            "semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est "
            "eleifend mi, non fermentum diam nisl sit amet erat.</font>",
            body,
        ),
        Spacer(1, 14 * mm),
        Paragraph('<font color="#b8b2a8">Mit freundlichen Grüßen</font>', body),
        Spacer(1, 16 * mm),
        Paragraph('<font color="#b8b2a8">Name · Funktion</font>', body),
    ]

    doc.build(story, onFirstPage=draw_header_footer, onLaterPages=draw_header_footer)
    print(f"PDF created: {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    build_pdf()
