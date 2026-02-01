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

  /* ---------- Close on ESC ---------- */
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  /* ---------- Click Outside ---------- */
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
        className="fixed top-0 left-0 w-full z-50 bg-transparent"
        role="navigation"
        aria-label="Main navigation for Poovar boating and Kayaloram Cruise"
      >
        {/* MAIN BAR */}
        <div className="flex justify-between items-center
          h-16 md:h-14
          px-4 sm:px-6 md:px-4"
        >
          {/* Logo */}
          <Link href="/" aria-label="Kayaloram Cruise Home">
            <Image
              src="/logo.webp"
              alt="Kayaloram Cruise – Poovar boating logo"
              width={110}
              height={36}
              className="h-8 sm:h-9 md:h-7 w-auto drop-shadow-lg"
              priority
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-white text-2xl"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop / Tablet Menu */}
          <ul
            className="hidden md:flex
            gap-2 lg:gap-4
            bg-green-100/20 backdrop-blur-md
            px-3 py-1
            lg:px-6 lg:py-1.5
            rounded-full shadow-md
            border border-green-200/40"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.path}
                    className={`relative font-semibold
                      px-3 py-1.5 lg:px-4 lg:py-2
                      rounded-full text-sm lg:text-base
                      transition
                      ${
                        isActive
                          ? "bg-green-300/80 text-green-900 shadow-md"
                          : "text-white hover:bg-green-200/40 hover:text-green-900"
                      }`}
                  >
                    {item.name}

                    {/* Hover underline */}
                    <span
                      className="absolute left-3 right-3 -bottom-1 h-0.5
                      bg-linear-to-r from-green-400 to-green-700
                      rounded-full scale-x-0 hover:scale-x-100
                      transition-transform origin-left"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <m.ul
              ref={menuRef}
              className="md:hidden w-full
              bg-green-950/95 backdrop-blur-sm
              flex flex-col items-center space-y-6 py-8"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name} onClick={() => setIsMenuOpen(false)}>
                    <Link
                      href={item.path}
                      className={`block text-lg font-semibold px-6 py-2 rounded-full transition
                        ${
                          isActive
                            ? "bg-green-300/80 text-green-900"
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
      </nav>
    </LazyMotion>
  );
}
