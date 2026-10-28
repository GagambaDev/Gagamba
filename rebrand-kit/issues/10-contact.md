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
