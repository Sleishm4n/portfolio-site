"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import SkillCard, { Skill } from "./skillCard";

interface SkillsGridProps {
  skills: Skill[];
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const firstRect = useRef<DOMRect | null>(null);
    const expandedRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (selectedIndex === null || !firstRect.current || !gridRef.current) return;

        const last = gridRef.current.getBoundingClientRect();
        const first = firstRect.current;

        const deltaX = first.left - last.left;
        const deltaY = first.top - last.top;
        const scaleX = first.width / last.width;
        const scaleY = first.height / last.height;

        const el = expandedRef.current;
        if (!el) return;

        el.style.transition = "none";
        el.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`;
        el.style.transformOrigin = "top left";

        requestAnimationFrame(() => {
            el.style.transition = "transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)";
            el.style.transform = "none";
        });
    }, [selectedIndex]);

    return (
        <div ref={gridRef} className="relative w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-stretch">
                {skills.map((skill, i) => (
                    <SkillCard
                        ref={(el) => { cardRefs.current[i] = el; }}
                        key={skill.name}
                        skill={skill}
                        faded={selectedIndex !== null && selectedIndex !== i}
                        onClick={() => {
                            firstRect.current = cardRefs.current[i]?.getBoundingClientRect() ?? null;
                            setSelectedIndex(i);
                        }}
                    />
                ))}
            </div>
            {selectedIndex !== null && (
                <div
                    ref={expandedRef}
                    className="absolute inset-0 bg-[#0e0e0e] border border-purple-500/30 p-6 flex flex-col sm:flex-row text-left overflow-y-auto"
                >
                    <button
                        onClick={() => setSelectedIndex(null)}
                        className="absolute top-3 right-4 font-cinzel text-xs text-white/20 hover:text-white/60 transition-colors tracking-widest"
                    >
                        ✕
                    </button>
                    <span className="absolute top-0 left-0 w-4 h-px bg-purple-500/60" aria-hidden="true" />
                    <span className="absolute top-0 left-0 w-px h-4 bg-purple-500/60" aria-hidden="true" />
                    <span className="absolute bottom-0 right-0 w-4 h-px bg-purple-500/60" aria-hidden="true" />
                    <span className="absolute bottom-0 right-0 w-px h-4 bg-purple-500/60" aria-hidden="true" />

                    <div className="w-full sm:w-3/5 sm:h-full flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/5 pb-4 sm:pb-0 sm:pr-6">
                        <div>
                            <h3 className="font-cinzel text-white/90 text-lg mb-2">{skills[selectedIndex].name}</h3>
                            <p className="font-sans text-xs text-white/30 leading-relaxed text-left">{skills[selectedIndex].description}</p>
                        </div>
                        <div>
                            <p className="font-cinzel text-xs tracking-[0.25em] uppercase text-purple-400/70 mb-1">{skills[selectedIndex].level}</p>
                            <p className="font-sans text-xs text-white/30">{skills[selectedIndex].duration}</p>
                        </div>
                    </div>

                    <div className="flex-1 sm:pl-6 flex flex-col gap-4 pt-4 sm:pt-0">
                        {skills[selectedIndex].projects && (
                            <div className="mt-auto">
                            <p className="font-cinzel text-xs tracking-[0.25em] uppercase text-purple-400/70 mb-3">Projects</p>
                            <div className="flex flex-wrap gap-2">
                                {skills[selectedIndex].projects!.map((p) => (
                                    <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                                        className="font-sans text-xs text-purple-400/60 border border-purple-500/20 px-2 py-0.5 hover:text-purple-300 transition-colors">
                                        ↗ {p.label}
                                    </a>
                                ))}
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
       
    );
}
