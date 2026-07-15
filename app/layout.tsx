import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL('https://shoryabhushan.com'),
  alternates: {
    canonical: 'https://shoryabhushan.com',
  },
  title: "Shorya Bhushan — Full-Stack Web Developer",
  description: "Full-stack web developer who genuinely enjoys the craft — from clean APIs to interfaces people actually like using. Currently open to freelance and full-time work.",
  openGraph: {
    title: "Shorya Bhushan — Full-Stack Web Developer",
    description: "Full-stack web developer who genuinely enjoys the craft — from clean APIs to interfaces people actually like using. Currently open to freelance and full-time work.",
    url: 'https://shoryabhushan.com',
    siteName: 'Shorya Bhushan',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 1024,
        alt: 'Shorya Bhushan — Full-Stack Web Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Shorya Bhushan — Full-Stack Web Developer",
    description: "Full-stack web developer who genuinely enjoys the craft — from clean APIs to interfaces people actually like using.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          inter.variable
        )}
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
