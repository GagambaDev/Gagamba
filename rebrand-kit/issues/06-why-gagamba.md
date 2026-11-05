**Assignee:** Henok Wondem · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~1.5 h

**Goal:** Lead with big stats, then the header as the claim they support, then one short paragraph explaining them. Remove the small text under the stats and the comparison table.
**File:** `components/ProblemVsSolution.tsx`. Delete `styles/ProblemVsSolutionStyling.css`; it also re-imported all of Tailwind, doubling the CSS size.

### Steps
1. **Confirm the numbers** with Reasey You (CFO) and Vaughn Guintu (CEO): 29x less water, $240K saved per building per year ($540K → $300K), and a $48M Las Vegas market (160 high-rises × $300K). If any number changes, update both the stats and the paragraph. If there's no reply in time, use these.
2. **Remove** the "Why Gagamba" eyebrow, the old header and paragraph, the small text under each stat, and the "Traditional methods vs Gagamba UAS" table with its data.
3. Give the section the id `why-gagamba`, a white background and centered content. Order, top to bottom: **stats → header → paragraph**.
4. **Stats:** 3 columns on desktop, divided by 1px Pearl lines; stacked on phone with 40px gaps.
   - **29x**: Less water than traditional cleaning
   - **$240K**: Saved per building, every year
   - **$48M**: Las Vegas market opportunity

   Numbers: Heming Bold 68 → 110px, Sapphire, never wrapping. Labels: 12px below, Elms Sans Semi Bold 18px, Onyx, max about 26 characters per line.
5. **Header (H2)**, 64px below the stats: "A clearer way to clean high-rises." Heming Bold 26 → 42px, Sapphire.
6. **Paragraph**, 20px below the header. Elms Sans 16 → 18px, Onyx 70%, about 62 characters per line:
   > Gagamba's Wall Interface System cleans at 0.07 gallons per minute, against an industry standard of 1.8–2.5. Replacing rope-access crews cuts a typical high-rise's cleaning bill from $540K to $300K a year. And with 160 high-rises in Las Vegas alone, that's a $48M market to start.
7. Fade in on scroll: the stats one by one (0.1s apart), then the header, then the paragraph.

### Done when
- [ ] The order is 3 big numbers → header → paragraph, with no sub-text and no table.
- [ ] "$240K" doesn't wrap on a phone.
- [ ] Reasey or Vaughn confirmed the numbers (comment here), or the fallback numbers are used.

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

Every heading (H1–H6) is Heming automatically: Bold for H1 and H2, Semi Bold for H3–H6. Don't add a font class to headings; just add the size (`text-display`, `text-h2`, `text-subheader`) and the color.

**Rules**
- Square corners on everything (images, buttons, inputs, cards, tabs).
- No shadows, glows, blur, gradient text, all-caps text or extra letter spacing.
- Buttons: use the shared Primary Button from Issue 1 (Sapphire, white text, 48px tall, square, Tanzanite on hover).
- Logos: only the files in `public/brand/`. Never stretch, recolor, shadow or filter them.
- Sections: content centered at max 1200px wide, 24px side padding (32px on desktop), 64px top/bottom padding (120px on desktop) unless the issue says otherwise.

**How to work**
- Start Issue 1 first; everything else builds on it. Branch from `rebrand` as `rebrand-<first name>-<issue number>` (e.g. `rebrand-justin-3`) and open your PR into `rebrand`, not `main`.
- Attach desktop (1440px) and phone (375px) screenshots to your PR. Richies reviews every PR.
- **Done means:** build and lint pass, no sideways scrolling on a phone, everything clickable is reachable with the Tab key, and every box under "Done when" is checked.

</details>

---
