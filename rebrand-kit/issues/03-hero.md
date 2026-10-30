**Assignee:** Justin Panopio · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~2 h

**Goal:** New hero: a giant logo on the left; the name, a short description and the call to action on the right; a crystalline, iridescent background. Remove the tagline.
**Files:** `components/Hero.tsx`, plus a new `components/HeroBackground.tsx`. Delete `components/PageTitle.tsx` and `components/Subtitle.tsx` (only the hero uses them).

### Steps
1. **Remove** the old PNG logo, the all-caps "GAGAMBA" title, the tagline "No Crew. No Tether. No Compromise.", the blue glow and the cyan grid.
2. **Layout:** the section fills the screen height minus the 72px header, with content vertically centered.
   - Desktop (1024px and wider): 12 columns, max 1200px wide. Logo in columns 1–5; text in columns 7–12.
   - Smaller screens: stacked, with the logo centered on top and the text left-aligned below.
3. **Left: giant logo.** `/brand/icon-sapphire.svg`, about 30% of the screen width (between 160px and 440px). Decorative only (screen readers skip it).
4. **Right, in order:**
   - **Name:** `/brand/wordmark-sapphire.svg`, about 34% of the screen width (between 240px and 520px), inside the page's only H1. Screen readers should hear "Gagamba UAS".
   - **Description**, 24px below: "Gagamba UAS builds autonomous, tetherless drones that clean high-rise windows with no crew at height and a fraction of the water." Elms Sans 20px, Onyx, about 34 characters per line.
   - **Button**, 32px below: Primary Button "Get a Quote", linking to `/contact`.
5. **Background** (`HeroBackground`): drawn with code, no image file. Decorative. Matches brand doc p.20.
   - **Iridescent light:** 4 soft, large color clouds on the right half: pink #EFBEEF top-right, lavender #C9C3F5 center-right, periwinkle #ACA8E3 bottom-right, pale blue #D5D6F4 bottom-center, each at about 45–55% opacity.
   - **Crystal facets:** about 9 large angular glass shards (4- and 5-sided) filling the right ~45% of the hero. Fill each with a diagonal gradient (Pearl → #C9C3F5 → #EFBEEF) at 50% opacity, with thin white edges.
   - **Distorted RGB:** behind the facets, two copies of the same shapes: one orange-red (#FF4A00, 12% opacity) shifted 4px left, one cyan (#02EBEF, 16% opacity) shifted 4px right, blended so they show only as colored fringes.
   - **Keep the logo clean:** a soft white circle behind the left side so the icon sits on near-solid white. On phones, add a 60% white layer over the whole background so the text stays readable.
   - **Fade:** the bottom 120px fades to white so the hero blends into the next section.
   - **Motion:** the facets drift about 8px back and forth over 14s; no motion with "Reduce motion" on.
6. Search the project for "gagamba_logo". If nothing else uses it (Issue 2 may already be merged), delete `public/images/gagamba_logo.png`.

### Done when
- [ ] Desktop: big Sapphire diamond on the left; wordmark, description and button on the right.
- [ ] Phone: stacked, readable, no sideways scrolling.
- [ ] The background shows pastel crystal shards with faint red and cyan edges on the right, white behind the logo, and a fade to white at the bottom.
- [ ] There's no tagline, and the home page has exactly one H1.

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
