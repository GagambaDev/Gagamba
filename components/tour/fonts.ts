import localFont from "next/font/local";

// Brand fonts, self-hosted. Same files and CSS variable names the rebrand foundation (Issue 1) uses in app/layout.tsx.
export const heming = localFont({
  src: "../../app/fonts/Heming-Variable.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--font-heming",
});

export const elmsSans = localFont({
  src: [
    { path: "../../app/fonts/ElmsSans-Variable.woff2", weight: "100 900", style: "normal" },
    { path: "../../app/fonts/ElmsSans-Italic-Variable.woff2", weight: "100 900", style: "italic" },
  ],
  display: "swap",
  variable: "--font-elms-sans",
});
