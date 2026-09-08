"use client";

import Link from "next/link";
import CvaeDemo from "@/components/cvaeDemo";
import DuneBackground from "@/components/duneBackground";

export default function MentatsPage() {
  return (
    <main className="min-h-screen w-full bg-bg text-white relative overflow-hidden flex flex-col items-center text-center">
      {/* Background subtle manifold contour visualization */}
      <DuneBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(13,16,24,0.5)_100%)] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-16 flex flex-col items-center">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="font-dm text-xs tracking-[0.2em] uppercase text-white/40 hover:text-sky-400/80 transition-colors mb-4 sm:mb-8"
        >
          ← Return to Projects
        </Link>

        {/* Section Heading matching site style */}
        <h2 className="font-dm text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 mb-2 sm:mb-3">
          // First-Principles Deep Learning Engine
        </h2>
        <div className="w-14 h-px bg-linear-to-r from-sky-400 to-transparent mb-4 sm:mb-8" />

        <h1 className="font-cinzel text-3xl sm:text-5xl text-white/90 mb-3 sm:mb-4 tracking-wider">
          mentats
        </h1>

        <p className="font-ibmPlex text-white/60 text-xs sm:text-base leading-relaxed sm:leading-loose font-light tracking-wide max-w-2xl mb-6 sm:mb-8">
          A deep learning library built completely from scratch in pure Rust
          with zero ML external dependencies, inspired by the human computers of
          Frank Herbert&apos;s{" "}
          <span className="text-white/80 font-normal italic">Dune</span>.
        </p>

        {/* Badges / Tech Summary */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-10 text-[11px] font-space tracking-wider uppercase">
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/60">
            Language: Pure Rust
          </span>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-sky-300">
            Dependencies: 1 (rand)
          </span>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-sky-400">
            Models: MLP | VAE | CVAE
          </span>
        </div>

        {/* External Action Links */}
        <div className="flex gap-3 mb-10 sm:mb-14">
          <a
            href="https://github.com/Sleishm4n/mentats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-wider text-white/50 border border-white/20 px-3.5 py-1.5 hover:text-gray-400 hover:border-white/40 transition-all duration-300"
          >
            GitHub ↗
          </a>
          <a
            href="https://crates.io/crates/mentats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-wider text-sky-400/80 border border-sky-500/30 px-3.5 py-1.5 bg-sky-500/10 hover:text-sky-300 hover:border-sky-500/60 transition-all duration-300"
          >
            crates.io ↗
          </a>
        </div>

        {/* Section 1: Concept & The Dune Inspiration */}
        <div className="w-full text-left mb-12 sm:mb-16">
          <div className="group relative p-6 sm:p-8 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
            {/* Corner Accents */}
            <span
              className="absolute top-0 left-0 w-3 h-px bg-sky-400/60"
              aria-hidden="true"
            />
            <span
              className="absolute top-0 left-0 w-px h-3 bg-sky-400/60"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-0 right-0 w-3 h-px bg-sky-400/60"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-0 right-0 w-px h-3 bg-sky-400/60"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 border-b border-white/5 pb-3">
              <span className="text-[11px] tracking-[0.2em] uppercase text-sky-400/80 font-space">
                Origin &amp; Concept
              </span>
              <span className="text-[10px] tracking-wider uppercase text-white/40 font-mono">
                The Butlerian Principle
              </span>
            </div>

            <h3 className="font-cinzel text-lg sm:text-xl text-white/90 mb-4 tracking-wide">
              What is a Mentat?
            </h3>

            <div className="space-y-4 text-white/60 text-xs sm:text-sm leading-relaxed sm:leading-loose font-light">
              <p>
                In Frank Herbert’s{" "}
                <span className="text-white/80 italic">Dune</span>, following
                the Butlerian Jihad that destroyed all artificial intelligence
                and banned thinking machines under the commandment{" "}
                <span className="text-spice-blue font-serif italic">
                  &ldquo;Thou shalt not make a machine in the likeness of a
                  human mind,&rdquo;
                </span>{" "}
                society developed{" "}
                <span className="text-white font-normal">Mentats</span>. These
                are humans conditioned from birth to be able to perform complex
                mental computations and huge data analysis tasks completely
                through raw intellect and cognitive training.
              </p>
              <p>
                The{" "}
                <span className="text-spice-blue font-mono text-xs">
                  mentats
                </span>{" "}
                framework adopts this thinking in regard to machine learning.
                Modern deep learning relies heavily on towering abstraction
                layers like PyTorch, LibTorch bindings, CUDA runtimes or
                high-level crates like{" "}
                <code className="text-white/70 font-mono text-xs">ndarray</code>
                , <code className="text-white/70 font-mono text-xs">burn</code>,
                and{" "}
                <code className="text-white/70 font-mono text-xs">candle</code>.
                Mentats gets rid of all of them. Every tensor stride, matrix
                multiplication, backward activation derivative, Adam second
                moment and latent sampling equation is hand-derived and
                implemented natively in Rust.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Interactive Evaluation (The Live Demo) */}
        <div className="w-full text-left mb-6">
          <h2 className="font-dm text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 text-center mb-2">
            // Live Evaluation: Trained CVAE Decoder
          </h2>
          <p className="font-ibmPlex text-white/50 text-xs sm:text-sm text-center max-w-xl mx-auto mb-2 sm:mb-4 font-light leading-relaxed">
            Click a digit and let the network create new handwriting styles it has never seen before.
          </p>
          <p className="font-ibmPlex text-white/50 text-xs text-center max-w-xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed">
            The interactive demo below runs real-time client-side inference
            using the exact{" "}
            <code className="text-sky-300 font-mono px-1.5 py-0.5 bg-white/5 border border-white/10 rounded-sm">
              cvae_decoder.rmlc
            </code>{" "}
            binary weights trained by{" "}
            <span className="text-spice-blue font-mono text-xs">mentats</span>{" "}
            in Rust. Select a target digit class and explore the latent
            dimension.
          </p>
        </div>

        {/* Interactive Demo Component */}
        <div className="w-full mb-12 sm:mb-16">
          <CvaeDemo />
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-sky-500/20 to-transparent mb-12 sm:mb-16" />

        {/* Section 3: Core Architecture Pillars */}
        <div className="w-full text-left mb-12 sm:mb-16">
          <h2 className="font-dm text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 text-center mb-6 sm:mb-8">
            // Core Framework Architecture
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-sky-400/80 font-space mb-2">
                01 / Linear Algebra Engine
              </p>
              <h3 className="text-white/80 text-sm font-cinzel mb-2">
                Custom Tensor &amp; Matrix Primitives
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed">
                Implemented raw contiguous-memory vector and matrix buffers with
                custom strided indexing. Provides cache-conscious matrix
                multiplication (<code className="text-white/60">A × B</code>),
                broadcasting, transpositions and elementwise activation
                functions (ReLU, Sigmoid, Softmax).
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-sky-400/80 font-space mb-2">
                02 / Reverse-Mode Autodiff
              </p>
              <h3 className="text-white/80 text-sm font-cinzel mb-2">
                Analytical Backpropagation
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed">
                Forward-pass activations and input states are cached within
                computational layers, allowing backward passes to propagate 
                gradients back through the network - {" "}
                <span className="text-white/80 italic"> which is what lets the 
                model learn from its mistakes</span>{" "} - 
                activation layers and multi-term loss functions (Categorical
                Cross-Entropy, Binary Cross-Entropy, KL Divergence).
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-sky-400/80 font-space mb-2">
                03 / Numerical Optimization
              </p>
              <h3 className="text-white/80 text-sm font-cinzel mb-2">
                SGD &amp; Adam with Moment Correction
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed">
                Features Stochastic Gradient Descent with velocity momentum as
                well as the Adam optimizer built directly from the Kingma &amp;
                Ba paper, maintaining running exponentially decaying first (
                <code className="text-white/60">m_t</code>) and second (
                <code className="text-white/60">v_t</code>) moment vectors with
                bias correction.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-sky-400/80 font-space mb-2">
                04 / Model Serialization
              </p>
              <h3 className="text-white/80 text-sm font-cinzel mb-2">
                The .rmlc Checkpoint Format
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed">
                Engineered a custom binary serialization format (
                <code className="text-white/60">.rmlc</code> — Rust Machine
                Learning Checkpoint) storing layer types, weight dimensions, and
                raw IEEE-754 32-bit floats. Checkpoints serialize with zero
                external runtime overhead and can be read by both native Rust
                and web clients.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Project Evolution & Milestones */}
        <div className="w-full text-left mb-12 sm:mb-16">
          <h2 className="font-dm text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 text-center mb-6 sm:mb-8">
            // Research &amp; Evolutionary Milestones
          </h2>

          <div className="space-y-4 font-ibmPlex">
            {/* Milestone 1 */}
            <div className="relative p-5 sm:p-6 border border-white/10 bg-cards/5 backdrop-blur-md">
            <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="font-cinzel text-sm sm:text-base text-white/90">
                  Milestone 01: Feedforward Classifier
                </span>
                <span className="text-[11px] font-space text-sky-300 px-2 py-0.5 bg-sky-500/10 border border-sky-500/30 w-fit">
                  97.43% Test Accuracy
                </span>
              </div>
              <p className="text-white/40 text-xs sm:text-[13px] leading-relaxed mb-3">
                The foundation test for Mentats. Trained on the full
                60,000-sample MNIST dataset using pure SGD, learning rate 0.01,
                and categorical cross-entropy over 5 epochs. Proved mathematical
                precision of dense layer gradient updates, backprop jacobians,
                and activation functions.
              </p>
              <div className="text-[11px] font-mono text-white/40 bg-black/30 px-3 py-1.5 border border-white/5 rounded-xs">
                Topology: 784 → Linear(128) → ReLU → Linear(10) → Softmax
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative p-5 sm:p-6 border border-white/10 bg-cards/5 backdrop-blur-md">
            <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="font-cinzel text-sm sm:text-base text-white/90">
                  Milestone 02: Unconditional Variational Autoencoder
                </span>
                <span className="text-[11px] font-space text-white/60 px-2 py-0.5 bg-white/5 border border-white/10 w-fit">
                  10D Latent Manifold
                </span>
              </div>
              <p className="text-white/40 text-xs sm:text-[13px] leading-relaxed mb-3">
                Transitioned to deep generative modeling. Derived the Gaussian
                reparameterization trick{" "}
                <span className="text-white/80 italic"> (a trick that lets the network
                learn to generate new examples and not just recognise existing ones)</span>{" "}
                (<code className="text-white/60">z = μ + σ ⊙ ε</code>) and
                optimized the Evidence Lower Bound (ELBO). Tackled posterior
                collapse - a common failure mode where the model gives up on using its learned representation
                - by implementing per-batch β-annealing (0 to 1 over 20
                epochs) and free-bits KL clamping, preventing latent units from
                degenerating into uninformative noise.
              </p>
              <div className="text-[11px] font-mono text-white/40 bg-black/30 px-3 py-1.5 border border-white/5 rounded-xs">
                Topology: 784 → 512 → 256 → 20 (μ, log_var; d=10) → 256 → 512 →
                784
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative p-5 sm:p-6 border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="font-cinzel text-sm sm:text-base text-white/90">
                  Milestone 03: Conditional VAE (CVAE)
                </span>
                <span className="text-[11px] font-space text-sky-300 px-2 py-0.5 bg-sky-500/20 border border-sky-500/40 w-fit">
                  Class-Conditioned Synthesis
                </span>
              </div>
              <p className="text-white/50 text-xs sm:text-[13px] leading-relaxed mb-3">
                Conditioned both the encoder and decoder on 10D one-hot class
                vectors. This disentangled digit semantics (0–9) from continuous
                handwriting style attributes (line thickness, slant, loop size)
                in a 32-dimensional latent space. This is the model exported and
                evaluated live in the interactive demo above.
              </p>
              <div className="text-[11px] font-mono text-sky-300/70 bg-black/30 px-3 py-1.5 border border-sky-500/20 rounded-xs">
                Topology: (784 + 10) → 512 → 256 → 64 (μ, log_var; d=32) → (32 +
                10) → 256 → 512 → 784
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Mathematical Foundations */}
        <div className="w-full text-left space-y-6">
          <h2 className="font-dm text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 text-center mb-6">
            // Mathematical Foundations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-sky-400/80 font-space mb-2">
                01 / Latent Conditioning
              </p>
              <h3 className="text-white/80 text-sm font-cinzel mb-2">
                Class-Guided Synthesis
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed">
                By conditioning both encoder and decoder on a 10D one-hot
                vector, the model disentangles digit identity from handwriting
                style (slant, thickness, loops).
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-sky-400/80 font-space mb-2">
                02 / Posterior Stability
              </p>
              <h3 className="text-white/80 text-sm font-cinzel mb-2">
                Free-Bits KL Annealing
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed">
                Prevents posterior collapse during training by warming up the KL
                weight β over initial epochs and clamping minimum information
                per latent dimension. This prevents the model from collapsing 
                into producing the same boring outputs regardless of the input.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-6 font-ibmPlex border border-white/10 bg-cards/5 backdrop-blur-md">
              <span
                className="absolute top-0 left-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 left-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-px bg-sky-400/60"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 right-0 w-px h-2 bg-sky-400/60"
                aria-hidden="true"
              />

              <p className="text-[10px] tracking-[0.2em] uppercase text-sky-400/80 font-space mb-2">
                03 / Pure Rust Engine
              </p>
              <h3 className="text-white/80 text-sm font-cinzel mb-2">
                First-Principles ML
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed">
                No external ML dependencies. Custom Tensor operations,
                backpropagation and Adam moments implemented directly in Rust.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="w-full flex justify-between items-center pt-16 text-xs font-dm tracking-wider uppercase text-white/30">
          <Link href="/" className="hover:text-sky-400/80 transition-colors">
            ← Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-sky-400/80 transition-colors"
          >
            All Projects →
          </Link>
        </div>
      </div>
    </main>
  );
}
