"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  loadCvaeModel,
  evaluateCvaeDecoder,
  sampleStandardNormal,
  interpolateVectors,
  CvaeDecoderModel,
} from "@/lib/cvae-engine";

export default function CvaeDemo() {
  const [model, setModel] = useState<CvaeDecoderModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedDigit, setSelectedDigit] = useState<number>(7);
  const [morphDigitB, setMorphDigitB] = useState<number>(3);
  const [morphT, setMorphT] = useState<number>(0);
  const [isMorphMode, setIsMorphMode] = useState<boolean>(false);

  const [latentZ, setLatentZ] = useState<Float32Array>(() =>
    sampleStandardNormal(32),
  );
  const [latentB, setLatentB] = useState<Float32Array>(() =>
    sampleStandardNormal(32),
  );

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load the model weights
  useEffect(() => {
    let isMounted = true;
    loadCvaeModel("/models/cvae_decoder.rmlc")
      .then((m) => {
        if (isMounted) {
          setModel(m);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Failed to load model");
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Crisp canvas draw function with thistle styling
  const drawImage = useCallback(
    (canvas: HTMLCanvasElement, pixels: Float32Array) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const size = 28;
      const imgData = ctx.createImageData(size, size);
      const data = imgData.data;

      for (let i = 0; i < 784; i++) {
        const val = Math.max(0, Math.min(1, pixels[i]));
        const idx = i * 4;

        // Dark background -> Glowing thistle/lavender digit
        data[idx] = Math.round(18 + val * (216 - 18)); // R
        data[idx + 1] = Math.round(14 + val * (191 - 14)); // G
        data[idx + 2] = Math.round(26 + val * (216 - 26)); // B
        data[idx + 3] = 255;
      }

      const offscreen = document.createElement("canvas");
      offscreen.width = size;
      offscreen.height = size;
      const offCtx = offscreen.getContext("2d");
      if (offCtx) {
        offCtx.putImageData(imgData, 0, 0);
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(offscreen, 0, 0, canvas.width, canvas.height);
      }
    },
    [],
  );

  // Update canvas
  useEffect(() => {
    if (!model || !canvasRef.current) return;

    if (!isMorphMode || morphT === 0) {
      const { pixels } = evaluateCvaeDecoder(model, latentZ, selectedDigit);
      drawImage(canvasRef.current, pixels);
    } else {
      const yA = new Float32Array(10);
      yA[selectedDigit] = 1.0;
      const yB = new Float32Array(10);
      yB[morphDigitB] = 1.0;

      const yInterp = interpolateVectors(yA, yB, morphT);
      const zInterp = interpolateVectors(latentZ, latentB, morphT);

      const { pixels } = evaluateCvaeDecoder(model, zInterp, yInterp);
      drawImage(canvasRef.current, pixels);
    }
  }, [
    model,
    selectedDigit,
    latentZ,
    isMorphMode,
    morphDigitB,
    morphT,
    latentB,
    drawImage,
  ]);

  const handleGenerateNewStyle = () => {
    setLatentZ(sampleStandardNormal(32));
    setLatentB(sampleStandardNormal(32));
    setMorphT(0);
  };

  if (loading) {
    return (
      <div className="w-full max-w-xl mx-auto p-12 border border-white/10 bg-cards/5 backdrop-blur-md text-center flex flex-col items-center justify-center min-h-[280px]">
        <div className="w-6 h-6 border border-thistle-400 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="font-space text-xs tracking-[0.2em] uppercase text-white/40">
          Loading Mentats Model...
        </p>
      </div>
    );
  }

  if (error || !model) {
    return (
      <div className="w-full max-w-xl mx-auto p-6 border border-red-500/20 bg-red-500/5 text-center">
        <p className="font-space text-xs tracking-wider uppercase text-red-400 mb-1">
          Model Loading Error
        </p>
        <p className="font-ibmPlex text-white/40 text-xs">{error}</p>
      </div>
    );
  }

  return (
    <div className="group relative w-full max-w-2xl mx-auto p-4 sm:p-8 md:p-10 font-ibmPlex bg-cards/5 backdrop-blur-md border border-white/10 transition-all text-left">
      {/* Corner Accents matching site cards */}
      <span
        className="absolute top-0 left-0 w-3 h-px bg-thistle-500/60"
        aria-hidden="true"
      />
      <span
        className="absolute top-0 left-0 w-px h-3 bg-thistle-500/60"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-0 right-0 w-3 h-px bg-thistle-500/60"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-0 right-0 w-px h-3 bg-thistle-500/60"
        aria-hidden="true"
      />

      <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8 md:gap-10">
        {/* Crisp Pixel Display */}
        <div className="flex flex-col items-center shrink-0">
          <div className="p-2 sm:p-2.5 bg-black/60 border border-thistle-500/20 shadow-lg">
            <canvas
              ref={canvasRef}
              width={196}
              height={196}
              className="w-36 h-36 sm:w-44 md:w-48 sm:h-44 md:h-48 block"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          <button
            onClick={handleGenerateNewStyle}
            className="mt-3 sm:mt-4 text-xs font-sans tracking-wider text-thistle-400/80 border border-thistle-500/30 px-3.5 py-1.5 bg-thistle-500/10 hover:text-thistle-300 hover:border-thistle-500/60 transition-all duration-300 flex items-center gap-1.5"
          >
            <span>New Variation</span> ↗
          </button>
        </div>

        {/* Controls Section */}
        <div className="flex-1 w-full space-y-4 sm:space-y-6">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-thistle-400/70 font-space mb-2">
              Target Digit Class
            </p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                <button
                  key={digit}
                  onClick={() => {
                    setSelectedDigit(digit);
                    setMorphT(0);
                  }}
                  className={`h-8 sm:h-9 md:h-10 font-cinzel text-sm sm:text-base transition-all duration-300 border ${
                    selectedDigit === digit && (!isMorphMode || morphT === 0)
                      ? "bg-thistle-500/20 text-white border-thistle-400 shadow-sm"
                      : "bg-white/5 text-white/50 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                >
                  {digit}
                </button>
              ))}
            </div>
          </div>

          {/* Morph Toggle & Scrub */}
          <div className="pt-2 sm:pt-3 border-t border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setIsMorphMode(!isMorphMode);
                  if (isMorphMode) setMorphT(0);
                }}
                className="text-[10px] tracking-[0.2em] uppercase font-space text-white/40 hover:text-thistle-300 transition-colors flex items-center gap-1.5"
              >
                <span>{isMorphMode ? "−" : "+"}</span> Latent Morphing Tool
              </button>

              {isMorphMode && (
                <span className="text-[10px] sm:text-[11px] font-space text-thistle-400/80">
                  {selectedDigit} → {morphDigitB} ({(morphT * 100).toFixed(0)}%)
                </span>
              )}
            </div>

            {isMorphMode && (
              <div className="p-2.5 sm:p-3.5 bg-black/30 border border-white/5 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-ibmPlex text-white/60">
                  <span className="text-[11px] sm:text-xs">Morph toward:</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                      <button
                        key={d}
                        onClick={() => setMorphDigitB(d)}
                        className={`w-5 h-5 sm:w-6 sm:h-6 font-cinzel text-[11px] sm:text-xs border ${
                          morphDigitB === d
                            ? "bg-thistle-500/30 text-white border-thistle-400"
                            : "bg-transparent text-white/40 border-transparent hover:text-white"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.01"
                  value={morphT}
                  onChange={(e) => setMorphT(parseFloat(e.target.value))}
                  className="w-full accent-thistle-400 h-2 bg-white/10 rounded cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
