**Assignee:** Narek (Tony) Tonoyan · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~1.5 h

**Goal:** Give the header the new logo and nav styling.
**File:** `components/Navbar.tsx`

### Steps
1. **Logo:** replace the old PNG and the separate "Gagamba" text with one image, `/brand/logo-primary-sapphire.svg` (icon + wordmark). Height 28px on phone, 32px on desktop, width automatic. Alt text "Gagamba UAS". The link goes to the home page, labeled "Gagamba UAS home".
2. **Bar:** fixed to the top, 72px tall, solid white, no blur. Center the content at max 1200px wide with 24px side padding (32px on desktop). Logo on the left, links on the right.
3. **Border:** no bottom border at the top of the page. Once the visitor scrolls more than 8px, or the phone menu is open, show a 1px Pearl bottom border.
4. **Links (desktop):** Home, About, Contact, 32px apart, Elms Sans Medium 16px, Onyx, Sapphire on hover. The current page is Sapphire with a 2px underline 6px below the text, and is marked as the current page for screen readers.
5. **Phone menu (under 768px):**
   - Menu button: 44×44px, Onyx, 24px icon with square line ends, labeled "Open menu" / "Close menu".
   - Open menu: white panel filling the screen below the header, 24px side padding. Links are 20px Elms Sans Medium with 16px top/bottom padding and a 1px Pearl line under each; the current page is Sapphire.
   - Tapping a link or pressing Esc closes it. The page behind can't scroll while it's open.
6. Search the project for "gagamba_logo". If nothing else uses it (Issue 3 may already be merged), delete `public/images/gagamba_logo.png`.

### Done when
- [ ] Only the Sapphire logo shows, with no separate "Gagamba" text.
- [ ] The header is white and 72px tall, and the border appears only after scrolling.
- [ ] The current page link is underlined on Home, About and Contact.
- [ ] The phone menu opens, closes (link tap or Esc) and locks page scrolling.

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
- Start Issue 1 first; everything else builds on it. Branch from `rebrand` as `rebrand-<first name>-<issue number>` (e.g. `rebrand-justin-3`) and open your PR into `rebrand`, not `main`.
- Attach desktop (1440px) and phone (375px) screenshots to your PR. Richies reviews every PR.
- **Done means:** build and lint pass, no sideways scrolling on a phone, everything clickable is reachable with the Tab key, and every box under "Done when" is checked.

</details>

---
