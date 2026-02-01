import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Footer from "@/components/Footer";
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

  title: {
    default: "Poovar Boating | Island & Backwater Cruise in Poovar",
    template: "%s | Poovar Boating",
  },

  description:
    "Enjoy Poovar boating, island sightseeing, mangrove forest cruise and Kerala backwater experiences with Kayaloram Cruise.",

  keywords: [
    "poovar boating",
    "poovar island boating",
    "poovar backwaters",
    "poovar boat service",
    "poovar boating price",
  ],

  alternates: {
    canonical: "https://www.poovarislandboating.com",
  },

  icons: {
    icon: "/favicon.webp",
  },

  openGraph: {
    title: "Poovar Boating & Island Backwater Cruise",
    description:
      "Book Poovar boating with Kayaloram Cruise. Explore mangroves, golden beach and scenic Kerala backwaters.",
    url: "https://www.poovarislandboating.com",
    siteName: "Kayaloram Cruise Poovar",
    images: [
      {
        url: "/firstImage.webp",
        width: 1200,
        height: 630,
        alt: "Poovar boating and island backwater cruise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Poovar Boating | Island & Backwater Cruise",
    description:
      "Explore Poovar boating, island sightseeing and Kerala backwater cruises with Kayaloram.",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-emerald-950 font-sans text-white">
        <Navbar navItems={navItems} />

        {/* Main Content – SEO Landmark */}
        <main id="page-content" className="relative">
          {children}

          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#020617",
                color: "#E6FFFA",
                border: "1px solid #2DD4BF",
              },
            }}
          />

          <FloatingContactButtons />
          <TawkToChat />
        </main>

        <Footer />
      </body>
    </html>
  );
}
