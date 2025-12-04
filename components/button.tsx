"use client";

import Link from "next/link";

export default function Button({ text, href }: { text: string, href: string}) {
  return (
    <Link
      href={href}
      className="px-6 py-3 rounded-md bg-jungle text-bg font-semibold hover:scale-105 hover:shadow-lg transition transform duration-200"
    >
      {text}
    </Link>
  );
}