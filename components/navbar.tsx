"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-polyGreen/50 text-white">
            <h1 className="text-3xl font-bold underline">Sam Leishman</h1>

            <div className="space-x-10 gap-6">
                <Link href="/" className="hover:text-silver">Home</Link>
                <Link href="/about" className="hover:text-silver">About</Link>
                <Link href="/projects" className="hover:text-silver">Projects</Link>
                <Link href="/contact" className="hover:text-silver">Contact</Link>
            </div>
        </nav>
    );
}