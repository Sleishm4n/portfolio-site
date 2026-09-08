"use client";

import { useEffect, useRef } from "react";

export default function DuneBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.012;

      // Subtle undulating loss landscape / manifold contours in midnight blue
      const contourCurves = [
        { yOffset: height * 0.45, amp: 22, freq: 0.0012, speed: 0.0012, color: "rgba(56, 189, 248, 0.02)" },
        { yOffset: height * 0.60, amp: 32, freq: 0.0016, speed: 0.0018, color: "rgba(30, 58, 138, 0.03)" },
        { yOffset: height * 0.74, amp: 42, freq: 0.0014, speed: 0.0022, color: "rgba(56, 189, 248, 0.025)" },
        { yOffset: height * 0.86, amp: 30, freq: 0.0020, speed: 0.0015, color: "rgba(15, 23, 42, 0.06)" },
      ];

      for (const dune of contourCurves) {
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 15) {
          const y = dune.yOffset + Math.sin(x * dune.freq + time * dune.speed) * dune.amp;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = dune.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
