"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

type NavItem = { name: string; path: string };
type NavbarProps = { navItems: NavItem[] };

export default function Navbar({ navItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isMenuOpen]);

  return (
    <LazyMotion features={domAnimation}>
      <nav
        className="fixed top-0 left-0 z-50 w-full bg-transparent"
        aria-label="Primary navigation Poovar boating"
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Poovar Island Boating Home">
            <Image
              src="/logo.webp"
              alt="Poovar Island Boating by Kayaloram Cruise"
              width={120}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-2xl text-white"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="hidden items-center gap-3 rounded-full border border-green-200/40 bg-green-100/20 px-4 py-1 backdrop-blur-md md:flex">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-green-300 text-green-900"
                        : "text-white hover:bg-green-200/40 hover:text-green-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <m.ul
              ref={menuRef}
              className="flex w-full flex-col items-center gap-6 bg-green-950/95 py-8 backdrop-blur-md md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {navItems.map((item) => {
                const active = pathname === item.path;
                return (
                  <li key={item.name} onClick={() => setIsMenuOpen(false)}>
                    <Link
                      href={item.path}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-full px-6 py-2 text-lg font-semibold transition ${
                        active
                          ? "bg-green-300 text-green-900"
                          : "text-white hover:bg-green-200/40 hover:text-green-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </m.ul>
          )}
        </AnimatePresence>

        <nav aria-label="Internal SEO links" className="sr-only">
          <Link href="/services">Poovar Boating Services</Link>
          <Link href="/reservation">Poovar Boating Booking</Link>
          <Link href="/contact">Poovar Boating Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/refund-cancellation-policy">
            Refund & Cancellation Policy
          </Link>
        </nav>
      </nav>
    </LazyMotion>
  );
}
