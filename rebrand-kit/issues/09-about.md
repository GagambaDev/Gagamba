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
