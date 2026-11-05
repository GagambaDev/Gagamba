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
