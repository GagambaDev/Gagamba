import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Syne, DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  weight: ['400','600','700'],
  variable: '--font-header',
})

const dmSans = DM_Sans({
  weight: ['400', '500'],
  variable: '--font-body',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600'],
  variable: '--font-techy',
})

export const metadata: Metadata = {
  title: 'Gagamba',
  description: "Las Vegas' modern solution to graffiti cleaning",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${syne.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
        <body>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
