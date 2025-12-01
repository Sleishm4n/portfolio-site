"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex items-center justify-between p-4 bg-linear-to-r from-polyGreen to-rasin rounded-b-3xl shadow-lg backdrop-blur-md text-white z-50">
        <h1 className="text-3xl font-bold underline animate-float">
            Sam Leishman
        </h1>

        <div className="space-x-10 gap-6 flex pr-2.5">
            {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative hover:text-silver transition-colors duration-300"
            >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-silver transition-all duration-300 hover:w-full"></span>
            </Link>
            ))}
        </div>
        </nav>
    );
}