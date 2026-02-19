"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NavButton from "./navButton";

const NAV_ITEMS = [
  { text: "About", href: "#about" },
  { text: "Projects", href: "#projects" },
  { text: "Skills", href: "#skills" },
  { text: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 px-6 py-5 md:px-10 md:py-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="font-cinzel text-white/60 text-sm tracking-[0.2em] uppercase
                     hover:text-white transition-colors duration-500"
          aria-label="Home - Sam Leishman"
        >
          Sam Leishman
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavButton
              key={item.text}
              text={item.text}
              href={item.href}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px bg-current transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <NavButton
              key={item.text}
              text={item.text}
              href={item.href}
              isActive={pathname === item.href}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}