import Link from "next/link";

interface NavButtonProps {
  text: string;
  href: string;
  isActive?: boolean;
}

export default function NavButton({ text, href, isActive = false }: NavButtonProps) {
  return (
    <a
      href={href}
      className={`
        font-cinzel text-sm tracking-[0.15em] uppercase
        transition-colors duration-500
        relative group
        ${isActive ? "text-white" : "text-white/40 hover:text-white/80"}
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {text}
      {/* Thin underline that grows from center */}
      <span
        className={`
          absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-purple-600
          transition-all duration-500
          ${isActive ? "w-full opacity-60" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-30"}
        `}
        aria-hidden="true"
      />
    </a>
  );
}