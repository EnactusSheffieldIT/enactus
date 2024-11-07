import type { Metadata } from "next";
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
  openGraph: {
    title: "Enactus Sheffield",
    description: "A social enterprise society at the University of Sheffield",
    url:'/favicon.png',
    site_name:'',
  },
  openGraph: {
    title: "Enactus Sheffield",
    description: "A social enterprise society at the University of Sheffield",
    card:'',
    image:'/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
