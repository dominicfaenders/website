#!/usr/bin/env python3
"""Intranet-Brief als Word mit festem Briefpapier-Wasserzeichen (verschiebt sich nicht)."""

from __future__ import annotations

from pathlib import Path

import fitz
from docx import Document
from docx.enum.section import WD_ORIENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls, qn
from docx.shared import Emu, Mm, Pt, RGBColor

DIR = Path(__file__).resolve().parent
WM_PDF = DIR / "treuhans-epost-intranet-wasserzeichen.pdf"
WM_P1 = DIR / "_wm-intranet-seite1.png"
WM_P2 = DIR / "_wm-intranet-seite2.png"
OUT = DIR / "treuhans-epost-intranet.docx"

INK = RGBColor(0x1D, 0x1D, 0x1F)
PLACEHOLDER = RGBColor(0x8E, 0x8E, 0x93)

# A4 in EMU (English Metric Units)
A4_W_EMU = int(210 / 25.4 * 914400)
A4_H_EMU = int(297 / 25.4 * 914400)


def _render_watermarks():
    if not WM_PDF.exists():
        raise SystemExit(f"Wasserzeichen-PDF fehlt: {WM_PDF}")
    doc = fitz.open(WM_PDF)
    for i, path in enumerate((WM_P1, WM_P2)):
        pix = doc[i].get_pixmap(matrix=fitz.Matrix(2.5, 2.5), alpha=False)
        pix.save(path)
    doc.close()


def _set_run_font(run, *, size_pt: float, bold: bool = False, color: RGBColor = INK):
    run.font.name = "Helvetica"
    run._element.rPr.rFonts.set(qn("w:eastAsia"), "Helvetica")
    run.font.size = Pt(size_pt)
    run.font.bold = bold
    run.font.color.rgb = color


def _set_spacing(p, *, before=0, after=0, line_pt=14):
    pf = p.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.line_spacing_rule = WD_LINE_SPACING.EXACTLY
    pf.line_spacing = Pt(line_pt)


def _add_behind_page_picture(paragraph, image_path: Path):
    """Vollseitiges Bild hinter dem Text, an Seitenecke verankert."""
    run = paragraph.add_run()
    inline_shape = run.add_picture(str(image_path), width=Mm(210), height=Mm(297))
    inline = inline_shape._inline
    graphic = inline.xpath("./a:graphic")[0]

    anchor_xml = (
        f'<wp:anchor {nsdecls("wp", "a", "pic", "r")} '
        'simplePos="0" relativeHeight="0" behindDoc="1" locked="1" '
        'layoutInCell="1" allowOverlap="1" distT="0" distB="0" distL="0" distR="0">'
        "<wp:simplePos x=\"0\" y=\"0\"/>"
        '<wp:positionH relativeFrom="page"><wp:posOffset>0</wp:posOffset></wp:positionH>'
        '<wp:positionV relativeFrom="page"><wp:posOffset>0</wp:posOffset></wp:positionV>'
        f'<wp:extent cx="{A4_W_EMU}" cy="{A4_H_EMU}"/>'
        '<wp:effectExtent l="0" t="0" r="0" b="0"/>'
        "<wp:wrapNone/>"
        '<wp:docPr id="1" name="Briefpapier" descr="treuhans Briefpapier Wasserzeichen"/>'
        "<wp:cNvGraphicFramePr/>"
        "</wp:anchor>"
    )
    anchor = parse_xml(anchor_xml)
    anchor.append(graphic)
    inline.getparent().replace(inline, anchor)


def _clear_header(header):
    for p in list(header.paragraphs):
        p._element.getparent().remove(p._element)
    for t in list(header.tables):
        t._element.getparent().remove(t._element)
    return header.add_paragraph()


def build() -> Path:
    _render_watermarks()

    doc = Document()
    section = doc.sections[0]
    section.orientation = WD_ORIENT.PORTRAIT
    section.page_width = Mm(210)
    section.page_height = Mm(297)
    section.left_margin = Mm(20)
    section.right_margin = Mm(20)
    # Text beginnt im Adressfenster-Bereich; Branding kommt aus dem Wasserzeichen
    section.top_margin = Mm(45)
    section.bottom_margin = Mm(32)
    section.header_distance = Mm(0)
    section.footer_distance = Mm(0)
    section.different_first_page_header_footer = True

    # Erste Seite: Wasserzeichen Seite 1
    first_header = section.first_page_header
    hp = _clear_header(first_header)
    _add_behind_page_picture(hp, WM_P1)
    # leerer First-Page-Footer (Footer steckt im Wasserzeichen)
    section.first_page_footer.is_linked_to_previous = False
    for p in list(section.first_page_footer.paragraphs):
        p.clear()

    # Folgeseiten: Wasserzeichen Seite 2
    header = section.header
    header.is_linked_to_previous = False
    hp2 = _clear_header(header)
    _add_behind_page_picture(hp2, WM_P2)
    section.footer.is_linked_to_previous = False
    for p in list(section.footer.paragraphs):
        p.clear()

    # —— Schreibfläche (verschiebt Briefpapier nicht) ——
    # Absenderzeile sitzt im Wasserzeichen; hier nur Empfänger
    for i, line in enumerate(["Firma / Name", "z. Hd. …", "Straße und Hausnummer", "PLZ Ort"]):
        p = doc.add_paragraph()
        _set_spacing(p, before=2 if i == 0 else 0, after=0, line_pt=14)
        r = p.add_run(line)
        _set_run_font(r, size_pt=10, color=INK)

    # Sprung zum Brieftext (~105 mm vom oberen Rand: 45 mm margin + ~42 mm Inhalt)
    gap = doc.add_paragraph()
    _set_spacing(gap, before=36, after=0, line_pt=14)

    date_p = doc.add_paragraph()
    _set_spacing(date_p, before=0, after=10, line_pt=14)
    r = date_p.add_run("Leipzig, ")
    _set_run_font(r, size_pt=10.5, color=INK)
    r = date_p.add_run("TT. Monat JJJJ")
    _set_run_font(r, size_pt=10.5, color=PLACEHOLDER)

    subj = doc.add_paragraph()
    _set_spacing(subj, before=0, after=10, line_pt=14)
    r = subj.add_run("Betreff")
    _set_run_font(r, size_pt=10.5, bold=True, color=INK)

    greet = doc.add_paragraph()
    _set_spacing(greet, before=0, after=8, line_pt=14)
    r = greet.add_run("Sehr geehrte Damen und Herren,")
    _set_run_font(r, size_pt=10.5, color=INK)

    body = doc.add_paragraph()
    _set_spacing(body, before=0, after=8, line_pt=16)
    r = body.add_run("Hier Ihren Schreibenstext einfügen …")
    _set_run_font(r, size_pt=10.5, color=PLACEHOLDER)

    for _ in range(5):
        blank = doc.add_paragraph()
        _set_spacing(blank, before=0, after=0, line_pt=16)

    close = doc.add_paragraph()
    _set_spacing(close, before=6, after=0, line_pt=14)
    r = close.add_run("Mit freundlichen Grüßen")
    _set_run_font(r, size_pt=10.5, color=INK)

    for _ in range(3):
        p = doc.add_paragraph()
        _set_spacing(p, before=0, after=0, line_pt=14)

    name = doc.add_paragraph()
    _set_spacing(name, before=0, after=0, line_pt=14)
    r = name.add_run("Name · Funktion")
    _set_run_font(r, size_pt=10.5, color=PLACEHOLDER)

    doc.save(OUT)
    print(f"DOCX created: {OUT} ({OUT.stat().st_size} bytes)")
    return OUT


if __name__ == "__main__":
    build()
