"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

type NavItem = { name: string; path: string };
type NavbarProps = { navItems: NavItem[] };

/* ------------------- Motion Variants ------------------- */
const navVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
};

const underlineVariants: Variants = {
  initial: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.3 } },
};

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

/* ------------------- Navbar ------------------- */
export default function Navbar({ navItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-transparent"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      role="navigation"
      aria-label="Main navigation for Poovar boating and Kayaloram Cruise"
    >
      <div className="flex justify-between items-center h-16 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" aria-label="Kayaloram Cruise Home">
          <Image
            src="/logo.webp"
            alt="Kayaloram Cruise – Poovar boating logo"
            width={120}
            height={40}
            className="h-8 sm:h-10 w-auto drop-shadow-lg"
            priority
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-white text-2xl"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 bg-green-100/20 backdrop-blur-md px-6 py-1.5 rounded-full shadow-md border border-green-200/40">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <motion.li
                key={item.name}
                variants={itemVariants}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={item.path}
                  className={`font-semibold px-4 py-2 rounded-full transition ${
                    isActive
                      ? "bg-green-300/80 text-green-900 shadow-md"
                      : "text-white hover:bg-green-200/40 hover:text-green-900"
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <motion.span
                      className="absolute left-0 -bottom-1 w-full h-1 bg-linear-to-r from-green-400 to-green-700 rounded-full origin-left"
                      variants={underlineVariants}
                      initial="initial"
                      whileHover="hover"
                    />
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            ref={menuRef}
            className="md:hidden w-full bg-green-950/95 backdrop-blur-sm flex flex-col items-center space-y-6 py-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <motion.li
                  key={item.name}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    href={item.path}
                    className={`block text-lg font-semibold px-6 py-2 rounded-full transition ${
                      isActive
                        ? "bg-green-300/80 text-green-900"
                        : "text-white hover:bg-green-200/40 hover:text-green-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
