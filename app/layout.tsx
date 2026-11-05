import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Brand fonts, self-hosted from app/fonts/. globals.css turns these variables into font-heading and font-body.
const heming = localFont({
  src: './fonts/Heming-Variable.woff2',
  weight: '300 700',
  display: 'swap',
  variable: '--font-heming',
})

const elmsSans = localFont({
  src: [
    { path: './fonts/ElmsSans-Variable.woff2', weight: '100 900', style: 'normal' },
    { path: './fonts/ElmsSans-Italic-Variable.woff2', weight: '100 900', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-elms-sans',
})

// Search and share info. Inner pages export their own `title` and show as "Page | Gagamba UAS".
const description = 'Autonomous, tetherless drones for high-rise window cleaning in Las Vegas. The answer is clear.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gagamba.co'),
  title: {
    default: 'Gagamba UAS',
    template: '%s | Gagamba UAS',
  },
  description,
  openGraph: {
    title: 'Gagamba UAS',
    description,
    url: '/',
    siteName: 'Gagamba UAS',
    images: [{ url: '/brand/og-image.png', width: 1200, height: 630, alt: 'Gagamba UAS' }],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${heming.variable} ${elmsSans.variable}`}>
        <body className="antialiased">
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
