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
