"use client";

import React from "react";
import { motion } from "framer-motion";

export interface AboutCardProps {
    label: string;
    value: string;
    sub: string;
    isHovered: boolean | null;
    onHover: () => void;
    onLeave: () => void;
}

export default function AboutCard({ label, value, sub, isHovered, onHover, onLeave, }: AboutCardProps) {
    return (
        <motion.div
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            animate={{
                scale: isHovered === true ? 1.08 : isHovered === false ? 0.93 : 1,
                opacity: isHovered === true ? 1 : isHovered === false ? 0.35 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="group relative px-4 py-3 font-cinzel
                        border border-white/10 hover:border-white/25
                        transition-colors duration-500 cursor-default text-left h-full items-center"
        >
            <span className="absolute top-0 left-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute top-0 left-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />

            <p className="text-[9.5px] tracking-[0.25em] uppercase text-white/30 mb-1.5">
                {label}
            </p>

            <p className="text-sm text-white/80 leading-snug">
                {value}
            </p>

            {sub && (
                <p className="text-xs text-white/30 italic mt-1">
                    {sub}
                </p>
            )}
        </motion.div>
    );
}