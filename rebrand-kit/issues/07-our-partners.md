**Assignee:** Justin Panopio · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~2 h

**Goal:** Rename the section to "Our Partners" and switch it to the new colors. Partner logos stay black (legal requirement).
**Files:** `components/SocialProof.tsx` and `components/ui/InfiniteScroll.tsx`. Delete `components/ui/HoverGlow.tsx`, `components/ui/ShinyButton.tsx` and `components/ui/shiny-button.css` (only this section uses them).

### Steps
1. **Remove** the "Trusted Technology" eyebrow, blue line, dot grid and hover glow.
2. Give the section the id `partners`, a white background and centered content.
3. **Header (H2):** "Our Partners", Heming Bold 26 → 42px, Sapphire.
4. **Logos:** remove the effect that turns them white, so they show in grayscale only (black and dark gray). Full opacity, with no fade or color change on hover. Don't use a pure-black filter; we tested it and it ruins the BlackFire, SBDC and RebelForge logos.
5. **Logo sizes:** 48px tall on phone, 64px on desktop, with these widths so they look balanced: UNLV 160px · BlackFire Innovation 200px · Nevada SBDC 120px · RebelForge 72px · Zero Labs 150px. Gaps: 48px on phone, 72px on desktop. Alt text: "[full name] logo".
6. **Scrolling ticker:** 40 seconds per loop, 48px below the header (64px on desktop). It pauses while hovered or while something inside it has keyboard focus. With "Reduce motion" on, it doesn't move and shows each logo once in a centered row.
7. **Button**, 56px below the logos: Primary Button "Contact Us", linking to `/contact`.
8. **Ask Khristian Ordonio** whether we have permission to show all 5 logos. Remove any he says no to, and post his answer here.

### Done when
- [ ] The heading reads "Our Partners" in Sapphire.
- [ ] Logos are dark gray or black, fully opaque, and not white or purple.
- [ ] The ticker pauses on hover and stays still with reduce motion on.
- [ ] "Contact Us" is the square Sapphire button.
- [ ] Khristian's answer is posted here.

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
