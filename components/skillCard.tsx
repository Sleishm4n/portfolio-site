"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
    skill: string;
    isHovered: boolean | null;
    onHover: () => void;
    onLeave: () => void;
    onTap: () => void;
}

export default function SkillCard({ skill, isHovered, onHover, onLeave, onTap }: SkillCardProps) {
    return (
        <motion.div
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            onTap={onTap}
            animate={{
                scale: isHovered === true ? 1.08 : isHovered === false ? 0.93 : 1,
                opacity: isHovered === true ? 1 : isHovered === false ? 0.35 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="group relative px-4 py-3 font-cinzel
                        border border-white/10 hover:border-white/25
                        transition-colors duration-500 cursor-pointer text-left h-full items-center"
        >
            <span className="absolute top-0 left-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute top-0 left-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
            <h1 className="text-center">{skill}</h1>
        </motion.div>
    );
}