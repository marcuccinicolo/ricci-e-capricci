import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Serif elegante e caldo per i titoli (brand heritage dal 1998),
// usato solo a grandi dimensioni per restare leggibile.
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// Sans umanista, morbido e molto leggibile per il corpo del testo:
// pensato per una clientela di ogni età.
const sans = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricci & Capricci - Parrucchieri a Pietrasanta dal 1998",
  description:
    "Ricci E Capricci di Silvia Bertozzi: salone di parrucchieri storico a Pietrasanta, in Versilia. Dal 1998 taglio, colore e cura naturale dei capelli in un ambiente caldo e accogliente.",
  keywords: [
    "parrucchiere Pietrasanta",
    "salone Versilia",
    "Ricci & Capricci",
    "hair stylist Pietrasanta",
    "colore capelli Versilia",
  ],
  openGraph: {
    title: "Ricci & Capricci - Parrucchieri a Pietrasanta dal 1998",
    description:
      "Salone storico in Versilia. Cura naturale dei capelli in un ambiente caldo e accogliente.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col bg-panna">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
