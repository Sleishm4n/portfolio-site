import { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import './globals.css';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Leishman | Portfolio",
  description: "Personal portfolio of Sam Leishman — Computing Science student at the University of Glasgow.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>

        <header className="p-4 shadow-md bg-white">
          <nav className="flex justify-center gap-60">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/projects" className="hover:text-blue-600">Projects</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto p-6">{children}</main>

        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Sam Leishman. All rights reserved.
        </footer>
      </body>
    </html>
  );
}