**Assignee:** Ricardo Vazquez · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~1 h

**Goal:** Replace the section header with the tagline and the text with "Our Story" from the brand deck.
**File:** `components/AboutUs.tsx`

### Steps
1. **Remove** the "Who We Are" eyebrow, the blue line, the glow, and all 4 old paragraphs.
2. Give the section the id `who-we-are` (the footer links to it) and a white background.
3. **Header (H2):** "The answer is clear." Use exactly this casing and keep the period. Heming Bold 26 → 42px, Sapphire.
4. **Text:** these 2 paragraphs, word for word. Elms Sans Regular 16px (18px on desktop), Onyx, about 62 characters per line, 24px apart.
   > Gagamba UAS, also known as Gagamba, is building a clearer, more advanced future with drone technology. We engineer solutions that go beyond the machine itself, transforming complex operations into safer, more efficient, and autonomous systems.

   > We believe technology should do more than perform tasks. It should pave a way towards confidence, new possibilities, and elevate the way the world operates for humans. By bringing greater clarity to security, technology, and strategy, Gagamba is helping build a future where progress is not only possible; it is undeniable.
5. **Layout:**
   - Desktop: header in the left 5 of 12 columns, text in the right columns 7–12. The header stays pinned in view while the text scrolls past.
   - Phone: header above the text, 24px gap.
6. Keep the existing fade-in on scroll (header first, then each paragraph 0.1s later).

### Done when
- [ ] The header reads exactly "The answer is clear." and the text matches the 2 paragraphs above.
- [ ] The section has a white background, no eyebrow and no glow.
- [ ] Linking to `/#who-we-are` lands with the header visible below the fixed header.
- [ ] No lint errors in this file (the old version had 3).

> **Gagamba website rebrand. Due Tue 11/3; pitch is Wed 11/4.** One of 10 issues; "Issue N" means the issue titled **[Rebrand #N]**. Brand source: `UnofficialGagambaUAS_Branding.pdf`.

<details>
<summary><b>Overall changes + brand quick reference (same in every issue)</b></summary>

**Site-wide changes**
1. Every page background is plain white. Delete all dark backgrounds, blue "glow" layers, dot grids and the hero grid.
2. Delete every small eyebrow label above a heading (Who We Are, The Drone, Why Gagamba, Trusted Technology, Mission Statement, The People Behind Gagamba, Company and Event Photos, Get in Touch), plus the short blue line under headings. Each issue removes the ones in its own section.
3. The header uses the new logo (Issue 2).
4. Use only the brand colors and fonts below. The old palette (Ink Black, Dark Amethyst, Violet Twilight, Periwinkle, Fresh Sky) and old fonts (Syne, DM Sans, Space Grotesk) are retired. Issue 1 sets the new ones up as theme colors and fonts; use those, never typed-in hex values.

**Colors**
- **Sapphire #4D49BE**: all page and section headings, links, buttons, stat numbers, selected states
- **Tanzanite #24125F**: button hover only
- **Onyx #101820**: body text · **Onyx 70% #585D63**: captions and secondary text · **Onyx 60% #707479**: input borders and placeholders
- **Pearl #DDE5ED**: footer, chips, inactive tabs, thin dividers
- **White #FFFFFF**: backgrounds · **Error red #B3261E**: form errors only

**Fonts and sizes** (sizes go from phone → desktop)

| Use | Font | Size |
|---|---|---|
| Page title | Heming Bold, Sapphire | 42 → 68px |
| Section heading | Heming Bold, Sapphire | 26 → 42px |
| Subheading | Heming Semi Bold | 20 → 26px |
| Big stat number | Heming Bold, Sapphire | 68 → 110px |
| Body text | Elms Sans Regular, Onyx | 16 → 18px |
| Labels, names, chips | Elms Sans Semi Bold | 14–18px |
| Captions, legal | Elms Sans Regular, Onyx 70% | 14px |

**Rules**
- Square corners on everything (images, buttons, inputs, cards, tabs).
- No shadows, glows, blur, gradient text, all-caps text or extra letter spacing.
- Buttons: use the shared Primary Button from Issue 1 (Sapphire, white text, 48px tall, square, Tanzanite on hover).
- Logos: only the files in `public/brand/`. Never stretch, recolor, shadow or filter them.
- Sections: content centered at max 1200px wide, 24px side padding (32px on desktop), 64px top/bottom padding (120px on desktop) unless the issue says otherwise.

**How to work**
- Start Issue 1 first; everything else builds on it. Branch from `rebrand` as `rebrand/` + issue number + short name (e.g. `rebrand/3-hero`) and open your PR into `rebrand`, not `main`.
- Attach desktop (1440px) and phone (375px) screenshots to your PR. Richies reviews every PR.
- **Done means:** build and lint pass, no sideways scrolling on a phone, everything clickable is reachable with the Tab key, and every box under "Done when" is checked.

</details>

---
