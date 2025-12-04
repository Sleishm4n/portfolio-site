"use client";

import { motion } from "framer-motion";

export default function AnimatedLetters({ text }: { text: string }) {
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const letter = {
        hidden: { y: 20, opacity: 0},
        visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300 } },
        hover: { scale: 1.2, color: "#38F0B9", transition: { duration: 0.2 } },
    };

    return (
        <motion.h1
            className="text-6xl font-bold font-cinzel flex flex-wrap justify-center"    
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((char, index) => (
                    <motion.span
                        key={index}
                        className="mx-1 cursor-default"
                        variants={letter}
                        whileHover="hover"
                    >
                    {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
        </motion.h1>
    )
}