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

export const metadata: Metadata = {
  metadataBase: new URL("https://poovarislandboating.com"),
  title: {
    default: "Poovar Island Boating | Boat Tour & Backwater Cruise",
    template: "%s | Poovar Island Boating",
  },
  description:
    "Official Poovar Island Boating website. Book boat tours, backwater cruises, sunset rides and island sightseeing in Poovar, Kerala.",
  alternates: {
    canonical: "https://poovarislandboating.com/",
  },
  openGraph: {
    title: "Poovar Island Boating | Boat Tour & Backwater Cruise",
    description:
      "Book Poovar Island boating, mangrove forest cruise, golden beach visit and sunset boat rides in Kerala.",
    url: "https://poovarislandboating.com/",
    siteName: "Poovar Island Boating",
    images: [
      {
        url: "https://poovarislandboating.com/firstImage.webp",
        width: 1200,
        height: 630,
        alt: "Poovar Island boating and backwater cruise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poovar Island Boating | Backwater Cruise",
    description:
      "Experience Poovar Island boating, backwaters and sunset cruises. Book online.",
    images: ["https://poovarislandboating.com/firstImage.webp"],
  },
  icons: {
    icon: "/favicon.webp",
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
    { name: "Services", path: "/service" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Booking", path: "/reservation" },
  ];

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://poovarislandboating.com/#localbusiness",
              "name": "Poovar Island Boating",
              "url": "https://poovarislandboating.com/",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Poovar Island",
                "addressLocality": "Poovar",
                "addressRegion": "Kerala",
                "postalCode": "695525",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Su 06:00-18:30",
              "image": [
                "https://poovarislandboating.com/firstImage.webp"
              ],
              "priceRange": "₹₹",
              "sameAs": []
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-emerald-950 font-sans text-white">
        <Navbar navItems={navItems} />
        <main id="page-content">{children}</main>
        <FloatingContactButtons />
        <TawkToChat />
        <Footer />
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
      </body>
    </html>
  );
}
