"use client";
import Link from "next/link";
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

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 
                 flex items-center justify-between 
                 px-10 py-6 mb-auto"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="font-cinzel text-white/60 text-sm tracking-[0.2em] uppercase
                   hover:text-white transition-colors duration-500"
        aria-label="Home - Sam Leishman"
      >
        Sam Leishman
      </Link>

      <div className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <NavButton
            key={item.text}
            text={item.text}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </nav>
  );
}