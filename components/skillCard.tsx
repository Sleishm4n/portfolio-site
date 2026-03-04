"use client";

import { motion } from "framer-motion";
import React, { forwardRef } from "react";

export interface Skill {
    name: string;
    level: "Familiar" | "Comfortable" | "Experienced";
    duration: string;
    description: string;
    projects?: { label: string; href: string}[];
}

interface SkillCardProps {
    skill: Skill;
    faded: boolean;
    isHovered: boolean | null;
    onHover: () => void;
    onLeave: () => void;
    onClick: () => void;
}

const PROFICIENCY_BARS: Record<Skill["level"], number> = {
    Familiar: 1,
    Comfortable: 2,
    Experienced: 3,
};


const SkillCard = forwardRef<HTMLDivElement, SkillCardProps>(
    ({skill, faded, isHovered , onClick, onHover, onLeave }, ref) => {
        const bars = PROFICIENCY_BARS[skill.level];

        return (
            <motion.div
                ref={ref}
                onClick={onClick}
                onKeyDown={(e) => e.key === "Enter" && onClick()}
                animate={{
                    scale: isHovered === true ? 1.08 : isHovered === false ? 0.93 : 1,
                    opacity: isHovered === true ? 1 : isHovered === false ? 0.35 : 1,
                }}
                onHoverStart={onHover}
                onHoverEnd={onLeave}
                tabIndex={0}
                aria-label={`${skill.name}, click to expand`}
                style={{ opacity: faded ? 0.3 : 1 }}
                transition={{ duration: 0.2 }}
                className="group relative font-cinzel border border-white/10 hover:border-white/25 transition-colors duration-500 cursor-pointer text-left items-center self-stretch"
                role="button"
            >
                <span className="absolute top-0 left-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
                <span className="absolute top-0 left-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
                <div className="h-full px-5 py-4 sm:px-7 sm:py-6 flex items-center justify-between gap-3 sm:gap-5h-full">
                    <p className="text-white/70 text-xs sm:text-lg group-hover:text-white transition-colors duration-500">
                        {skill.name}
                    </p>

                    <div className="flex items-end gap-[3px] shrink-0">
                        {[1, 2, 3].map((level) => (
                            <div
                                key={level}
                                className={`w-[3px] rounded-full transition-all duration-500 ${
                                    level <= bars
                                        ? "bg-purple-500/80 group-hover:bg-purple-400"
                                        : "bg-white/10"
                                }`}
                                style={{ height: `${level * 4 + 4}px` }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        );
    }
);
    
SkillCard.displayName = "SkillCard";
export default SkillCard