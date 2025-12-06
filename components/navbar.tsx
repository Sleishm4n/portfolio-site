"use client";


import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky w-24 top-0 flex items-center justify-center p-4 bg-linear-to-r from-crayola/50 to-chineseBlack/50 rounded-b-3xl shadow-lg backdrop-blur-md text-white z-50">


        <div className=" flex">
            <Link
                key={"Home"}
                href={`/home`}
                className="relative hover:text-silver transition-colors duration-300"
            >
                {"Home"}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-silver transition-all duration-300 hover:w-full"></span>
            </Link>
        </div>
        </nav>
    );
}