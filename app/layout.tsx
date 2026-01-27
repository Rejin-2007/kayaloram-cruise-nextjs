import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Footer from "@/components/Footer";
import OfferPopup from "@/components/OfferPopup";
import TawkToChat from "@/components/TawkToChat";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ---------- Global SEO Metadata ---------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.poovarislandboating.com"),
  icons: {
    icon: "/favicon.webp",
  },
  title: {
    default:
      "Poovar Boating & Poovar Island Boating | Kayaloram Cruise Kerala",
    template:
      "%s | Poovar Boating & Poovar Island Boating – Kayaloram",
  },

  description:
    "Experience Poovar boating and Poovar island boating with Kayaloram Cruise. Enjoy Kerala backwater cruises, mangrove forest boating, and golden beach tours in Poovar.",

  keywords: [
    "Poovar boating",
    "Poovar island boating",
    "Kayaloram cruise",
    "Kayaloram resort Poovar",
    "Kerala backwater cruise Poovar",
    "Golden beach Poovar",
    "Mangrove forest boating",
    "Poovar boating packages",
  ],

  alternates: {
    canonical: "https://www.poovarislandboating.com",
  },

  openGraph: {
    title:
      "Poovar Boating & Poovar Island Boating | Kayaloram Cruise Kerala",
    description:
      "Book Poovar boating and Poovar island boating at Kayaloram. Scenic Kerala backwater cruises, mangrove forests, and golden beach experiences await.",
    url: "https://www.poovarislandboating.com",
    siteName: "Kayaloram Cruise Poovar",
    images: [
      {
        url: "/firstImage.webp",
        width: 1200,
        height: 630,
        alt: "Poovar boating and Poovar island boating with Kayaloram Cruise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Poovar Boating & Poovar Island Boating | Kayaloram Cruise",
    description:
      "Explore Poovar boating, island boating, Kerala backwater cruises & golden beach tours with Kayaloram.",
    images: ["/firstImage.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Reservation", path: "/reservation" },
  ];

  return (
    <html lang="en" className={`${inter.variable} bg-emerald-950`}>
      <body className="min-h-screen font-sans">
        <OfferPopup />
        <TawkToChat />

        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar navItems={navItems} />
        </div>

        <main>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#0f172a",
                color: "#CDFFF5",
                border: "1px solid #CDFFF5",
              },
            }}
          />
          <FloatingContactButtons />
        </main>

        <Footer />

      </body>
    </html>
  );
}
