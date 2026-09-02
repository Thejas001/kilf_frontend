import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Noto_Serif_Malayalam } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE_URL } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoMalayalam = Noto_Serif_Malayalam({
  variable: "--font-noto-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "600"],
});

const title = "KaKhaGa — The Mirror Mind Literature Festival";
const description =
  "Four days for the written word — in Malayalam, and everything it listens to. 15–18 January 2027, Karunagappally.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "KaKhaGa",
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
        className={`${archivo.variable} ${plexMono.variable} ${notoMalayalam.variable} bg-paper-texture relative min-h-screen overflow-x-hidden bg-paper font-sans text-ink`}
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
