import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Noto_Serif_Malayalam } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

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

export const metadata: Metadata = {
  title: "KaKhaGa — The Mirror Mind Literature Festival",
  description:
    "Four days for the written word — in Malayalam, and everything it listens to. 15–18 January 2027, Karunagappally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${plexMono.variable} ${notoMalayalam.variable}`}
        style={{
          background: "#F4F3F1",
          backgroundImage:
            "repeating-linear-gradient(101deg, rgba(17,17,17,0.018) 0 2px, transparent 2px 7px),repeating-linear-gradient(-7deg, rgba(17,17,17,0.014) 0 1px, transparent 1px 9px),radial-gradient(120% 80% at 70% 0%, rgba(17,17,17,0.035), transparent 60%)",
          color: "#111111",
          fontFamily: "var(--font-archivo), sans-serif",
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        <ScrollProgress />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
