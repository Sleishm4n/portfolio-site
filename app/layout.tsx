import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Roboto_Mono } from "next/font/google";
import './globals.css';
import Navbar from "../components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Leishman",
  description: "Personal portfolio of Sam Leishman — Computing Science student at the University of Glasgow.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-3xl mx-auto p-6">{children}</main>

        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Sam Leishman. All rights reserved.
        </footer>
        <Analytics />
      </body>
    </html>
  );
}