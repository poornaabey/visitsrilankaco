import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AppProvider } from "@/providers/AppProvider";
import { PageShell } from "@/components/layout/PageShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VisitSriLanka.co | Curated Micro-Trips & Retreats",
  description:
    "A holistic niche tour platform for inbound micro-trips, sustainable eco-tourism, and bespoke tailor-made itineraries in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-stone-50 antialiased">
        <AppProvider>
          <PageShell>{children}</PageShell>
        </AppProvider>
      </body>
    </html>
  );
}
