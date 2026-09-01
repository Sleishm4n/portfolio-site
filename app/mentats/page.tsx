"use client";

import Link from "next/link";
import CvaeDemo from "@/components/cvaeDemo";
import NetworkBackground from "@/components/networkBackground";

export default function MentatsPage() {
  return (
    <main className="min-h-screen w-full bg-bg text-white relative overflow-hidden flex flex-col items-center text-center">
      {/* Background network visualization */}
      <NetworkBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(13,16,24,0.5)_100%)] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-16 flex flex-col items-center">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="font-dm text-xs tracking-[0.2em] uppercase text-white/40 hover:text-thistle-400/80 transition-colors mb-4 sm:mb-8"
        >
          ← Return to Projects
        </Link>

        {/* Section Heading matching site style */}
        <h2 className="font-dm text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 mb-2 sm:mb-3">
          // Mentats CVAE Demo
        </h2>
        <div className="w-14 h-px bg-linear-to-r from-thistle-400 to-transparent mb-4 sm:mb-8" />

        <h1 className="font-cinzel text-2xl sm:text-4xl text-white/90 mb-2 sm:mb-4 tracking-wider">
          mentats
        </h1>

        <p className="font-ibmPlex text-white/60 text-xs sm:text-sm leading-relaxed sm:leading-loose font-light tracking-wide max-w-2xl mb-5 sm:mb-8">
          A deep learning library built from first principles in Rust with no
          external crates. This interactive demo evaluates the trained{" "}
          <span className="text-white/80 font-normal">Conditional VAE</span>{" "}
          decoder in real time using the actual{" "}
          <code className="text-thistle-300 font-mono text-xs px-1.5 py-0.5 bg-white/5 border border-white/10 rounded-sm">
            cvae_decoder.rmlc
          </code>{" "}
          checkpoint.
        </p>

        {/* External Action Links */}
        <div className="flex gap-3 mb-6 sm:mb-12">
          <a
            href="https://github.com/Sleishm4n/mentats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-wider text-white/50 border border-white/20 px-3 py-1.5 hover:text-gray-400 hover:border-white/40 transition-all duration-300"
          >
            GitHub ↗
          </a>
          <a
            href="https://crates.io/crates/mentats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-wider text-thistle-400/70 border border-thistle-500/30 px-3 py-1.5 bg-thistle-500/10 hover:text-thistle-300 hover:border-thistle-500/60 transition-all duration-300"
          >
            crates.io ↗
          </a>
        </div>

        {/* Interactive Demo Component */}
        <div className="w-full mb-10 sm:mb-16">
          <CvaeDemo />
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-thistle-700 to-transparent mb-10 sm:mb-16" />

        {/* Technical Overview Cards */}
        <div className="w-full text-left space-y-6">
          <h3 className="font-dm text-sm tracking-[0.2em] uppercase text-white/40 text-center mb-6">
            // Architecture & Mathematical Foundations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-thistle-500/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-thistle-400/80 font-space mb-2">
                01 / Latent Conditioning
              </p>
              <p className="text-white/80 text-sm font-cinzel mb-2">
                Class-Guided Synthesis
              </p>
              <p className="text-white/40 text-[13px] leading-relaxed">
                By conditioning both encoder and decoder on a 10D one-hot
                vector, the model disentangles digit identity from handwriting
                style (slant, thickness, loops).
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-thistle-500/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-thistle-400/80 font-space mb-2">
                02 / Posterior Stability
              </p>
              <p className="text-white/80 text-sm font-cinzel mb-2">
                Free-Bits KL Annealing
              </p>
              <p className="text-white/40 text-[13px] leading-relaxed">
                Prevents posterior collapse during training by warming up the KL
                weight β over initial epochs and clamping minimum information
                per latent dimension.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-thistle-500/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-thistle-500/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-thistle-400/80 font-space mb-2">
                03 / Pure Rust Engine
              </p>
              <p className="text-white/80 text-sm font-cinzel mb-2">
                First-Principles ML
              </p>
              <p className="text-white/40 text-[13px] leading-relaxed">
                No external ML dependencies. Custom Tensor operations,
                backpropagation and Adam moments implemented directly in Rust.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="w-full flex justify-between items-center pt-16 text-xs font-dm tracking-wider uppercase text-white/30">
          <Link
            href="/"
            className="hover:text-thistle-400/80 transition-colors"
          >
            ← Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-thistle-400/80 transition-colors"
          >
            All Projects →
          </Link>
        </div>
      </div>
    </main>
  );
}
