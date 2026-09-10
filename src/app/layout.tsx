import type { Metadata } from "next";
import { Cutive_Mono, Prata } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE_URL } from "@/lib/site";

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
});

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const title = "KILF 2027 — Kollam International Literature Festival";
const description =
  "Where Literature Meets the World. Three Days of Literature Without Borders. 15–17 January 2027, Kollam, Kerala, India. Organised by Capital Media.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "KILF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${prata.variable} ${cutiveMono.variable} bg-paper-texture relative min-h-screen overflow-x-hidden bg-paper font-sans text-ink`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
