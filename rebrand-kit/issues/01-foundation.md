**Assignee:** Narek (Tony) Tonoyan · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~3 h

**Goal:** Set up the new brand once so every other issue can just use it. **Do this first; Issues 2–10 depend on it.**

**Attached:** `gagamba-rebrand-asset-pack.zip` (web fonts, logos, icons).

### Steps
1. **Create the branch.** Make a `rebrand` branch from `main`, push it, then branch `rebrand-tony-1` from it.
2. **Add the assets** from the zip:
   - The 3 font files go in `app/fonts/`.
   - The 4 logo SVGs and `og-image.png` go in `public/brand/`.
   - Replace `app/favicon.ico` with the new one. Add `apple-icon.png` to `app/`, and a copy of `icon-sapphire.svg` named `icon.svg` to `app/`.
3. **Fonts** (`app/layout.tsx`): remove Syne, DM Sans and Space Grotesk. Load Heming (weights 300–700) and Elms Sans (weights 100–900, normal and italic) from `app/fonts/` with Next's local font loader, using swap display. Name them "heading" and "body" in the theme, with body as the default site font.
4. **Colors** (`app/globals.css`): delete the 5 old color variables. Add theme colors named sapphire, tanzanite, onyx, onyx-70, onyx-60, pearl and error, using the hex values in the quick reference.
5. **Text sizes** (`app/globals.css`): add these named sizes, each with its line height, letter spacing and weight. Sizes scale smoothly from phone to desktop.

   | Name | Size | Line height | Spacing | Weight |
   |---|---|---|---|---|
   | stat | 68 → 110px | 1.0 | 0.01em | 700 |
   | display | 42 → 68px | 1.05 | 0.02em | 700 |
   | h2 | 26 → 42px | 1.1 | 0.02em | 700 |
   | subheader | 20 → 26px | 1.25 | 0.01em | 600 |
   | body-lg | 20px | 1.55 | 0 | |
   | body | 16px | 1.6 | 0 | |
   | small | 14px | 1.5 | 0 | |

6. **Global page styles** (`app/globals.css`):
   - Page background white; default text Onyx in Elms Sans, 16px.
   - Every heading (H1–H6) in Heming: Bold for H1 and H2, Semi Bold for H3–H6.
   - 72px of top padding on the page body (the new header is 72px tall and fixed).
   - Sections with an id stop 72px below the top when linked to.
   - Smooth scrolling for anchor links.
   - Every focusable element shows a 2px Sapphire outline, 3px out from the element.
   - When the visitor has "Reduce motion" on, turn off smooth scrolling and make all animations and transitions effectively instant.
   - An "iridescent" background utility: a 110° gradient through #EFBEEF, #C9C3F5, #F7F3F2, #D5D6F4, #ACA8E3 and #EDBCF1.
7. **Site info** (`app/layout.tsx`): title "Gagamba UAS"; inner pages titled "Page | Gagamba UAS"; description "Autonomous, tetherless drones for high-rise window cleaning in Las Vegas. The answer is clear." (the current one says graffiti cleaning). Share image `/brand/og-image.png` (1200×630); browser theme color white; site URL https://www.gagamba.co.
8. **Primary Button** (`components/PrimaryButton.tsx`): rebuild it. It currently nests a button inside a link, which is invalid HTML.
   - Options: label text; optional link destination (if given, it renders as a link); button type (button or submit); disabled; full width.
   - Look: 48px tall, 28px side padding, square, Sapphire background, white Elms Sans Semi Bold 16px. Tanzanite on hover or press (200ms). 60% opacity and no hover change when disabled.
9. **Secondary Button** (`components/SecondaryButton.tsx`): same size and options, but transparent with a 1.5px Sapphire border and Sapphire text; Pearl background on hover.
10. **Reduce-motion helper:** add a small hook in `hooks/` that reports whether the visitor has "Reduce motion" turned on and updates if they change it. It must return "off" during server rendering.
11. **Scroll reveal** (`hooks/useScrollReveal.ts`): change it to a 24px move over 0.6s with a soft ease-out (cubic-bezier 0.2, 0.8, 0.2, 1). If "Reduce motion" is on, show content right away with no animation.
12. **Move the home sections out of the hero.** `components/Hero.tsx` currently also renders About Us, the drone diagram, Problem vs Solution and Social Proof. Move those 4 into `app/page.tsx`, listed in that order after the Hero, so later issues don't all edit the same file. In Hero, switch "Get a Quote" to the new Primary Button with `/contact` as its link.
13. **Remove leftovers:** delete the Space Grotesk import from the two drone tour files (`TourContent.tsx`, `PartDescription.tsx`) and use the body font there. Delete the unused `components/EyebrowLabel.tsx` and `components/ui/MouseTracker.tsx`.
14. Merge into `rebrand` and tell the team "Foundation is in, branch from `rebrand`."

### Done when
- [ ] The site loads with a white background, Onyx text and the new fonts, with no requests to Google Fonts.
- [ ] The browser tab shows the Sapphire diamond icon and "Gagamba UAS".
- [ ] Syne, DM Sans and Space Grotesk appear nowhere in the code.
- [ ] Build passes on `rebrand`. Six old lint errors remain in About Us, Mission Statement and Contact; Issues 4, 9 and 10 remove them.

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
