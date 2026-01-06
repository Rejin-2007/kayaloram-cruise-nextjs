import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import OfferPopup from "@/components/OfferPopup";
import TawkToChat from "@/components/TawkToChat";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Poovar Island Boating | Kerala Backwater Tours",
  description:
    "Book Poovar boating and Poovar island boating. Enjoy Kerala backwater cruises, golden beach tours, and unforgettable boating experiences.",
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
  ];

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        {/* Global Components */}
        <OfferPopup />
        <TawkToChat />

        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar navItems={navItems} />
        </div>

        {/* Page Content */}
        <main className="pt-20">
          {children}
          <FloatingContactButtons />
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
