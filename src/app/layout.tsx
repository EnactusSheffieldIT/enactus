import type { Metadata } from "next";
import type { Viewport } from 'next'
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const geistSans = localFont({
  src: "./components/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./components/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Enactus Sheffield",
  description: "A social enterprise society at the University of Sheffield",
  keywords: "social,enterprise,society,university,sheffield",
  openGraph: {
    title: "Enactus Sheffield",
    description: "A social enterprise society at the University of Sheffield",
    url: 'enactussheffield.org',
    images: '/favicon.png',
  },
  twitter: {
    site: "enactussheffield.org",
    siteId: "",
    creator: "Shalev Lau",
    creatorId: "",
    title: "Enactus Sheffield",
    description: "A social enterprise society at the University of Sheffield",
    images: "/favicon.png"
  },
};

export const viewport: Viewport = {

  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
