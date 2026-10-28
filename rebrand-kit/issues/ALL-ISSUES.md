# Gagamba website rebrand: GitHub issues (all due Tue 11/3)

| # | Issue | Assignee(s) | Effort |
|---|---|---|---|
| 1 | Foundation: brand colors, fonts, white background, shared buttons | Narek (Tony) Tonoyan | ~3 h |
| 2 | Header: new logo and nav text | Narek (Tony) Tonoyan | ~1.5 h |
| 3 | Home: Hero, with giant logo left, name and CTA right, crystalline background | Justin Panopio | ~2 h |
| 4 | Home: Who We Are, with the tagline as header and "Our Story" text | Ricardo Vazquez | ~1 h |
| 5 | Home: Meet Gagamba, a full-section scroll-driven (parallax) drone showcase | Nicholas Martinez | ~4.5 h |
| 6 | Home: Why Gagamba, with big stats first and the comparison table removed | Henok Wondem | ~1.5 h |
| 7 | Home: rename to "Our Partners", new colors, logos stay black | Justin Panopio | ~2 h |
| 8 | Footer: enlarged sitemap footer + Privacy Policy and Terms of Use pages | Adrian Ortega | ~3 h |
| 9 | About page: new motto and copy, Founders team tabs, tighter spacing, square images | Ricardo Vazquez, Adrian Ortega | Ricardo ~3.5 h (code) · Adrian ~1 h (headshots) |
| 10 | Contact page: one-color header, new colors and fonts for page and form | Henok Wondem | ~2.5 h |

Richies Huynh reviews every PR and has no issues of his own. Each issue body in `bodies/` ends with the same collapsible quick-reference block, shown once here:

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


---

# [Rebrand #1] Foundation: brand colors, fonts, white background, shared buttons

**Assignee:** Narek (Tony) Tonoyan · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~3 h

**Goal:** Set up the new brand once so every other issue can just use it. **Do this first; Issues 2–10 depend on it.**

**Attached:** `gagamba-rebrand-asset-pack.zip` (web fonts, logos, icons).

### Steps
1. **Create the branch.** Make a `rebrand` branch from `main`, push it, then branch `rebrand/1-foundation` from it.
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


---

# [Rebrand #2] Header: new logo and nav text

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


---

# [Rebrand #3] Home: Hero, with giant logo left, name and CTA right, crystalline background

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


---

# [Rebrand #4] Home: Who We Are, with the tagline as header and "Our Story" text

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


---

# [Rebrand #5] Home: Meet Gagamba, a full-section scroll-driven (parallax) drone showcase

**Assignee:** Nicholas Martinez · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~4.5 h

**Goal:** Replace the boxed "Start tour" drone viewer with a full-section scroll animation. As the visitor scrolls, the render zooms into each part of the drone while that part's title and description appear. Inspiration: tensorwave.com and alche.studio.
**Files:** a new `components/drone/MeetGagamba.tsx` and a new `lib/droneParts.ts` (all text and zoom positions live here). In `app/page.tsx`, swap the drone diagram for MeetGagamba. Delete the 6 old files in `components/drone/` and `lib/types.ts`.

### Steps
1. **Updated render** (optional, but better for the pitch): ask Kayra H. (Drone Design lead) for the latest CAD revision; Tony has the original render setup if you need it. Export a PNG with a transparent background, at least 3600×2200px, the same 3/4 top-down angle as the current render, neutral gray, no floor shadow, under 1.5MB. Save it over `public/images/dronerender.png`. If it isn't ready in time, use the current render; the zoom points below are set for it.
2. **Confirm the specs** below with the Drone Design team, then comment "Specs confirmed" (or your corrections) here.
3. **Content** (`lib/droneParts.ts`): 6 steps, each with a title, body, spec chips and a zoom point. The zoom point is the spot on the image to center, as % of its width and height, plus a zoom level.

   | Step | Title | Body | Chips | Zoom (x%, y%, level) |
   |---|---|---|---|---|
   | 0 | Meet Gagamba | Scroll to explore every part of the drone. | none | 50, 50, 1 |
   | 1 | Propellers | Eight coaxial propellers generate the lift and redundancy needed to carry the full 66 lb system and remain airborne even with a single motor failure. | 8 coaxial propellers · 66 lb system · Single-motor-failure tolerant | 20, 50, 2.2 |
   | 2 | Battery | High-capacity LiPo batteries power the motors, pump, and onboard compute, delivering roughly 24 minutes of flight time per mission cycle. | LiPo · ~24 min flight time | 50, 45, 2.8 |
   | 3 | Water Tank | A 12-liter onboard reservoir eliminates the tether entirely, freeing Gagamba from the ~200 ft altitude ceiling that limits hose-fed competitors. | 12 L reservoir · No tether · No 200 ft ceiling | 47, 55, 2.8 |
   | 4 | Pressure Nozzle | A precision nozzle delivers a controlled stream of water onto the glass, keeping spray contained within the detected window boundary while minimizing waste. | 0.07 GPM · 29x less water | 54, 55, 2.8 |
   | 5 | Camera | The onboard camera feeds the computer vision system that identifies glass panes, guides docking, and captures the data behind the Post-Flight Report. | Computer vision · Post-Flight Report | 55, 44, 2.8 |

   If you use a new render, re-measure each zoom point: hover the part's center in an image editor and divide its X and Y pixel by the image width and height.
4. **How the scroll works:**
   - The section (id `meet-gagamba`) is 6 screens tall. Inside it, a full-screen stage sticks just under the 72px header while the visitor scrolls through.
   - Scroll progress through the section (0 → 1) maps to steps 0 → 5. Between two steps, the image moves smoothly from one zoom point to the next, holding still for the first and last quarter of each transition so the text is readable.
   - Zooming means scaling the image to the step's level and shifting it so the step's point lands in the center of the image area. Cap the zoom at 3× on desktop and 1.8× on phones.
   - Each step's text is fully visible within 0.2 of its step, fades out completely by 0.5, and slides up to 24px as it fades. Hidden panels can't be clicked.
   - For smoothness, update on scroll and resize at most once per animation frame, and animate only position, scale and opacity.
5. **Layout:**
   - Desktop: the image fills the left 62% of the screen, running to the screen's left edge and fading out on its right side; the text sits in the right 38%.
   - Phone: image in the top 55%, text in the bottom 45%.
   - Text styling:
     - Step 0's title is the section heading (H2). The others are subheadings in the same style: Heming 26 → 42px, Sapphire.
     - Body: Elms Sans 16 → 18px, Onyx, about 36 characters per line.
     - Chips: Pearl squares with 14px Elms Sans Semi Bold Onyx text, 8px apart.
6. **Progress rail** (desktop): 6 small 8px squares on the right edge (Sapphire = current, Pearl = others). Hovering one shows that part's name; clicking scrolls to that step.
7. **Accent:** a faint iridescent glow behind the drone at 12% opacity. Everything else stays white.
8. **Reduce motion on:** skip the sticky zoom. Show a normal section: heading, the full drone image, then the 5 parts in a 2-column list (title, body, chips).
9. **Remove** the old box, glow, "Explore Gagamba" card, "Start tour" button, plus-pins and dark spotlight.

### Done when
- [ ] Scrolling down zooms smoothly through Propellers → Battery → Water Tank → Pressure Nozzle → Camera, and scrolling up reverses it.
- [ ] Scrolling stays smooth on a normal laptop, and the phone layout isn't cut off.
- [ ] The rail jumps to each part, and the reduce-motion version shows every part.
- [ ] Specs are confirmed in a comment here.


---

# [Rebrand #6] Home: Why Gagamba, with big stats first and the comparison table removed

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


---

# [Rebrand #7] Home: rename to "Our Partners", new colors, logos stay black

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


---

# [Rebrand #8] Footer: enlarged sitemap footer + Privacy Policy and Terms of Use pages

**Assignee:** Adrian Ortega · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~3 h

**Goal:** Replace the one-line footer with a larger footer that links to every section of the site, and add Privacy Policy and Terms of Use pages.
**Files:** `components/Footer.tsx`, plus new pages at `/privacy` and `/terms` that share one simple legal-page layout.

### Steps
1. **Footer look:** Pearl background, Onyx text. 64px top padding on phone (96px on desktop), 24px bottom (32px on desktop). Content max 1200px wide.
2. **Columns:**
   - Desktop: 4 columns with widths in the ratio 1.5 : 1 : 1 : 1 and 48px gaps.
   - Phone: the brand block spans the full width, with the 3 link groups 2 per row below it.

   | Column | Contents |
   |---|---|
   | Brand | Stacked logo `/brand/logo-secondary-sapphire.svg`, 120px wide, linking home · "The answer is clear." in 16px Onyx 70% · LinkedIn and Instagram icons (24px, Sapphire, Tanzanite on hover, 44×44px tap area, open in a new tab) |
   | Explore | Home `/` · Who we are `/#who-we-are` · Meet Gagamba `/#meet-gagamba` · Why Gagamba `/#why-gagamba` · Our Partners `/#partners` |
   | Company | About `/about` · Founders `/about#founders` · Media Gallery `/about#media-gallery` · Contact `/contact` · Get a Quote `/contact` |
   | Legal | Privacy Policy `/privacy` · Terms of Use `/terms` |

   Column headings: Heming Semi Bold 18px, Sapphire. Links: Elms Sans 16px, Onyx; Sapphire and underlined on hover.
3. **Bottom row:** a thin line (Onyx at 12% opacity), 48px below the columns. Then "© 2026 Gagamba UAS. All rights reserved." on the left and "Las Vegas, Nevada" on the right, in 14px Onyx 70%. Stacked on phone.
4. **Legal page layout:** white page, 720px-wide text column, 64px top/bottom padding (120px on desktop).
   - Title: Heming Bold 26 → 42px, Sapphire. Under it: "Last updated: November 3, 2026" in 14px Onyx 70%.
   - Section headings: Heming Semi Bold 20px, Onyx. Body: Elms Sans 16px with relaxed line spacing. Links: Sapphire and underlined. Lists: bulleted.
   - Page titles: "Privacy Policy" and "Terms of Use".
5. **Legal text:** paste the text below, then send both pages to Khristian Ordonio for approval and apply his edits. Ask him whether we need any other pages, and to confirm the 24-month retention period. This is a draft, not legal advice.

<details>
<summary><b>Privacy Policy text (draft)</b></summary>

**Intro:** This Privacy Policy explains what information Gagamba UAS ("Gagamba," "we," "us") collects through gagamba.co, how we use it, and the choices you have.

**Information we collect:** When you use our contact form, we collect the information you choose to give us: your name, your email address, and your message. Like most websites, our hosting and security providers automatically process technical information such as your IP address, browser type, and pages visited in order to deliver and protect the site. We do not use advertising cookies.

**How we use your information:** To respond to your message or quote request. To send you a one-time confirmation email that we received your message. To keep the website secure and working properly.

**Who we share it with:** We do not sell your personal information. We share it only with service providers that help us run the site, and only for that purpose: Resend, which delivers contact-form emails to our team and your confirmation email; Clerk, a security and authentication service that may set strictly necessary cookies; and our website hosting provider. We may also disclose information if required by law.

**How long we keep it:** We keep contact-form messages for as long as needed to respond to you and follow up on your request, and no longer than 24 months.

**Your choices:** You can ask us to review, correct, or delete the information you sent us by emailing vaughn.guintu.ggb@gmail.com. Nevada residents may also submit a request to opt out of the sale of their covered information to the same address; we do not sell covered information.

**Children:** This website is not directed to children under 13, and we do not knowingly collect their information.

**Changes to this policy:** If we change this policy, we will post the updated version on this page and update the date above.

**Contact us:** Questions about this policy? Email vaughn.guintu.ggb@gmail.com.
</details>

<details>
<summary><b>Terms of Use text (draft)</b></summary>

**Intro:** By using gagamba.co (the "Site"), you agree to these Terms of Use. If you do not agree, please do not use the Site.

**Use of the Site:** You may use the Site for lawful purposes only. Do not attempt to disrupt the Site, access it in unauthorized ways, or submit false, harmful, or unlawful content through our forms.

**Intellectual property:** The Gagamba UAS name, logos, text, images, and drone designs on the Site belong to Gagamba UAS and may not be copied or used without our written permission. Partner names and logos belong to their respective owners and appear with their permission.

**Information on the Site:** Figures, specifications, and descriptions on the Site describe products and services in development and may change. They are provided for general information and are not a binding offer.

**No warranties:** The Site is provided "as is" and "as available," without warranties of any kind, express or implied.

**Limitation of liability:** To the fullest extent permitted by law, Gagamba UAS is not liable for any indirect, incidental, or consequential damages arising from your use of the Site.

**Governing law:** These Terms are governed by the laws of the State of Nevada.

**Changes:** We may update these Terms at any time by posting a new version on this page.

**Contact us:** Questions about these Terms? Email vaughn.guintu.ggb@gmail.com.
</details>

All email addresses are clickable links that open a new email.

### Done when
- [ ] The footer shows on every page, and all 12 links plus both icons work, including the `/#` links from the About and Contact pages.
- [ ] `/privacy` and `/terms` load and match the layout above.
- [ ] Khristian approved the text (comment here).
- [ ] The footer stacks cleanly on a phone.


---

# [Rebrand #9] About page: new motto and copy, Founders team tabs, tighter spacing, square images

**Assignee:** Ricardo Vazquez, Adrian Ortega · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** Ricardo ~3.5 h (code) · Adrian ~1 h (headshots)

**Goal:** New page title and text, "Founders" with a tab for each team, a smaller gap before the Media Gallery, and square image corners.
**Files:** `app/about/page.tsx`, `components/MissionStatement.tsx`, `components/MeetTheTeam.tsx`, `components/MediaGallery.tsx`, and a new `lib/team.ts` that holds the names and teams.
**Split:** Ricardo writes the code. Adrian collects the headshots and commits them to Ricardo's branch.

### Steps: top of page (Ricardo)
1. **Remove** the dark full-screen section, the glow, the "Mission Statement" eyebrow, "No Crew. No Tether. No Compromise." and the old paragraphs. The About page no longer needs to run in the browser, so it can set its page title, "About".
2. **Page title (H1):** "The answer is clear." Heming Bold 42 → 68px, Sapphire, left-aligned, 64px from the top (96px on desktop).
3. **Text**, 32px below the title. These 3 paragraphs, from the brand deck's Concept page. Elms Sans 16 → 18px, Onyx, about 62 characters per line, 24px apart:
   > Inspired by crystals and spiders, Gagamba UAS is redefining what it means for a drone company to be both trustworthy and innovative. Drone companies often earn trust through strength, speed, adaptability, or durability. Gagamba UAS earns it through clarity of strategy: lower cost, human connection, materials, autonomy, and environmental consciousness.

   > "Gagamba" means "spider" in Tagalog. Rather than the spider itself, we focus on its webbing. Spidroins, the main proteins in spider silk, contain crystalline structures that make webbing flexible, durable, and strong, which is why spiders trust it to catch prey, move, and build their homes.

   > Gagamba UAS is more than drones. We strategically improve our clients' businesses through automation and improve human quality of life along the way.

### Steps: Founders (Ricardo)
4. **Remove** "The People Behind Gagamba", "Meet the founders", the 8 old cards and the bios. Mentor Tony Ferrar is no longer shown; delete his headshot.
5. **Heading (H2):** "Founders", with the section id `founders`.
6. **Team data** (`lib/team.ts`): one entry per person (full name, last name for sorting, optional headshot). Each team lists its members, each with a role and an optional lead flag. Use **exactly** this list. Nobody else appears: no mentors, no placeholders.

   | Tab | Lead(s) | Members |
   |---|---|---|
   | C-Suite | none (titles only) | Vaughn Guintu: Chief Executive Officer (CEO) · Edwin Alvarez: Chief Operating Officer (COO) · Reasey You: Chief Financial Officer (CFO) · Khristian Ordonio: Chief Product Officer (CPO) |
   | Software | Narek (Tony) Tonoyan, Richies Huynh: Software Lead | Ricardo Vazquez, Justin Panopio, Henok Wondem, Nicholas Martinez, Adrian Ortega: Software Developer |
   | Outreach | Reasey You: Outreach Lead | Nate Tran, Cindy Dao, Callie Taylor, Nathaniel (Yul) Ordonio: Outreach |
   | Finance | Reasey You: Finance Lead | Aarash Gohari, Alice Dao, Maddox Dolor, Nate Tran: Finance |
   | Drone Design | Kayra H.: Drone Design Lead | Andre Tiu, Andrew L., Daniel Lopez, Nicholas Martinez, Patrick Chiong: Drone Design |
   | Wall Interface | Edwin Alvarez: Wall Interface Lead | Ashlynn Ringham, Christian Caingcoy, Jett Joncich, Reasey You: Wall Interface |
   | Drone Bay | Nathaniel (Yul) Ordonio: Drone Bay Lead | Callie Taylor, Maddox Dolor: Drone Bay |

   **Order on screen:** leads first, then members, each group A→Z by last name. Sort in code; don't rely on the order you typed. Kayra H. and Andrew L. stay abbreviated (sort by "H" and "L").
7. **Tabs**, 24px below the heading, in this order: C-Suite (selected on load) · Software · Outreach · Finance · Drone Design · Wall Interface · Drone Bay.
   - Each tab: 44px tall, square, 20px side padding, Elms Sans Semi Bold 15px, 8px apart. Selected: Sapphire with white text. Others: Pearl with Onyx text and a 1.5px Sapphire inner border on hover.
   - Left/right arrow keys, Home and End move between tabs. Use proper tab roles for screen readers.
   - On phone, the tabs stay in one row that scrolls sideways, with a white fade at the right edge.
   - Selecting a tab updates the link (for example `/about#founders-software`), and opening that link selects the tab.
8. **People grid**, 40px below the tabs: 5 columns on desktop, 3 on tablet, 2 on phone. Gaps: 32px (16px on phone).
   - Each card, top to bottom: square headshot with square corners, cropped to fill; name 16px below in Elms Sans Semi Bold 18px Onyx; role in Elms Sans 14px Onyx 70%.
   - No headshot: a Pearl square with the person's initials in Heming Semi Bold, about 48px, Sapphire. Ignore nicknames in parentheses (Narek (Tony) Tonoyan → "NT").
9. **Headshot files:** rename the 7 existing ones to lowercase with hyphens (for example "Vaughn Guintu.png" → `vaughn-guintu.png`) and point the team data at them.

### Steps: headshots (Adrian)
10. Today, ask the team chat for headshots: square, at least 800×800, face centered. Ask everyone in the table above. The current photos for Aarash, Khristian, Maddox, Narek, Nathaniel, Richies and Vaughn are tiny (about 140px), so ask them for bigger ones too.
11. Crop each photo square, resize it to 800×800, and save it as `public/images/headshots/first-last.png` (for example `reasey-you.png`). Commit it to Ricardo's branch `rebrand/9-about` and add it to that person's entry in the team data. Anyone still missing on 11/3 shows initials.

### Steps: Media Gallery (Ricardo)
12. **Smaller gap:** Founders gets no bottom padding; Media Gallery gets 48px of top padding (64px on desktop). Currently it's about 240px.
13. **Remove** the "Company and Event Photos" eyebrow, the gradient title, the rounded border, the shadow, the round black arrows and the counter bubble on the photo.
14. Give the section the id `media-gallery`. **Heading (H2):** "Media Gallery".
15. **Photo:** square corners, no border or shadow, max 500px tall, centered, 40px below the heading. **Caption** 12px below it: Elms Sans 14px Onyx 70%, centered.
16. **Controls**, 24px below the caption: a 44×44px square arrow button on each side (white, 1.5px Sapphire border, Sapphire arrow, Pearl on hover), with the "1 / 12" counter between them in Elms Sans Semi Bold 14px Onyx 70%. Screen readers announce the counter when it changes.

### Done when
- [ ] The title is "The answer is clear." with the 3 Concept paragraphs below it.
- [ ] All 7 tabs work with mouse, keyboard and phone, and every person appears exactly as in the table, leads first, A→Z.
- [ ] Every image on the page has square corners.
- [ ] The gap between the last team row and "Media Gallery" is 48–64px.
- [ ] Headshots are added, or initials show for anyone missing.


---

# [Rebrand #10] Contact page: one-color header, new colors and fonts for page and form

**Assignee:** Henok Wondem · **Reviewer:** Richies Huynh · **Due:** Tue 11/3 · **Effort:** ~2.5 h

**Goal:** Make "Gagamba" in the header the same color as the rest of it, and restyle the page and form in the new brand. Don't change how the form sends.
**Files:** `app/contact/page.tsx`, `components/FormLabel.tsx`. Delete `components/SubmitButton.tsx` (replaced by the Primary Button).

### Steps
1. **Remove** the glow, dot grid, "Get in Touch" eyebrow, blue line, the see-through card behind the form, and the setting that stops the title from wrapping (it overflows on phones).
2. **Page:** white, content left-aligned in a 640px-wide column, 64px top/bottom padding (120px on desktop).
3. **Title (H1):** "Reach out to Gagamba", entirely Sapphire with no gradient word. Heming Bold 42 → 68px. "out" is lowercase.
4. **Intro**, 16px below, same words as now: Elms Sans 18px, Onyx 70%. The form starts 40px below it.
5. **Form layout:** Name and Email side by side on desktop (16px gap), stacked on phone. Message full width. 24px between rows.
6. **Labels:** real labels tied to their fields. Elms Sans Semi Bold 14px Onyx, followed by " (required)" in Onyx 70%, 8px above the field.
7. **Fields:**
   - Look: white, 1px Onyx 60% border, square corners, 48px tall (message box at least 160px and resizable up and down), 12px × 16px padding.
   - Text: Elms Sans 16px Onyx (16px stops iPhones zooming in); Onyx 60% placeholder.
   - Hover: Onyx border. Focus: Sapphire border, 2px thick.
   - The browser can autofill name and email.
8. **Errors:** the field border turns error red (2px thick), with the message in 14px error red under the field. Mark the field invalid for screen readers, connect it to its message, and start the message with a hidden "Error:". The general send error at the bottom uses the same style.
9. **Button:** Primary Button "Send Message" as the form's submit button. It shows "Sending…" and is disabled while sending. Full width on phone, normal width on desktop.
10. **Under the button**, 12px below: "By sending this message you agree to our Privacy Policy." "Privacy Policy" is a Sapphire underlined link to `/privacy`. Elms Sans 14px Onyx 70%.
11. **After sending:** replace the form with a Pearl box (32px padding, square corners) containing:
    - "Thanks. Message received." in Heming Semi Bold 20 → 26px Sapphire. Move keyboard focus here.
    - "We'll get back to you soon. A confirmation is on its way to your inbox." in Elms Sans 16px Onyx.
    - A "Send another message" text button: Sapphire, underlined, Tanzanite on hover.

### Done when
- [ ] The whole title is one color (Sapphire) and wraps on a phone.
- [ ] Nothing blue, dark or glowing remains on the page.
- [ ] Submitting empty shows 3 red errors, and Tab goes Name → Email → Message → Send Message → Privacy Policy.
- [ ] On your branch preview, a test message reaches the team inbox, the sender gets a confirmation, and the Pearl thank-you box appears.
