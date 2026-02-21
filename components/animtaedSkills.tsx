import React from "react";
import { motion, useAnimation } from "framer-motion";

const path = "M580.428 239.275L377.928 53.7746C361.095 39.7746 303.128 12.6746 205.928 16.2746C108.728 19.8746 33.4284 123.775 7.92838 175.275C-6.04776 252.698 -1.33628 293.489 30.9284 361.275C61.9088 409.354 82.7219 431.877 130.928 457.775C210.424 487.773 245.366 480.056 310.428 473.275C391.088 440.73 422.338 413.97 469.928 361.275L650.928 175.275C725.684 98.7722 769.372 58.7823 864.928 16.2746C939.105 -2.52582 980.562 -10.4611 1051.93 26.7746C1128.29 74.5662 1144.77 109.643 1164.43 175.275C1176.04 237.067 1158.36 285.346 1142.43 332.775C1126.5 380.203 1064.45 443.047 1061.43 440.775C1058.75 438.756 983.928 504.275 864.928 457.775C769.728 420.575 635.595 296.608 580.428 239.275Z";

const skills = ["React", "TypeScript", "Next.js", "Node.js", "Tailwind", "Git"];

export default function AnimatedSkills() {
    const controls = skills.map(() => useAnimation());

    const handleHoverStart = () => {
        controls.forEach((control) => {
            control.start({
                transition: { duration: 20, repeat: Infinity, ease: "linear" },
            });
        });
    };

    const handleHoverEnd = () => {
        controls.forEach((control) => {
            control.start({
                transition: { duration: 8, repeat: Infinity, ease: "linear" },
            });
        });
    };

    return (
        <div style={{ position: "relative", width: 1176, height: 510 }}>
            <svg width="1176" height="510" style={{ position: "absolute", top: 0, left: 0 }}>
                <path
                    d={path}
                    fill="transparent"
                    strokeWidth="1"
                    stroke="#6b2ca533"
                    strokeLinecap="round"
                />
            </svg>

            {skills.map((skill, i) => (
                <motion.div
                    key={skill}
                    animate={controls[i]}
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                    initial={{
                        offsetDistance: `${(i / skills.length) * 100}%`,
                    }}
                    style={{
                        offsetPath: `path('${path}')`,
                        offsetRotate: "0deg",
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 90,
                        height: 36,
                        borderRadius: 8,
                        background: "#6b2ca522",
                        border: "1px solid #6b2ca5",
                        color: "white",
                        fontSize: 13,
                        fontFamily: "Cinzel, serif",
                        letterSpacing: "0.1em",
                        cursor: "default",
                        backdropFilter: "blur(4px)",
                    }}
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    );
}