"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedLetters({ text }: {text : string}) {
  const letters = text.split("");
  // Create array with {char, index} so duplicates are tracked
  const target = letters.map((char: any, idx: any) => ({ char, idx }));

  // Shuffle function
  const shuffleArray = (arr: any[]) => {
    return arr
      .map((v) => ({ ...v, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ char, idx }) => ({ char, idx }));
  };

  const [display, setDisplay] = useState(shuffleArray([...target]));

  // Bubble sort animation
  useEffect(() => {
    let arr = [...display];

    const interval = setInterval(() => {
      let swapped = false;

      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].idx > arr[i + 1].idx) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
          break; // swap one pair per interval for smooth animation
        }
      }

      setDisplay([...arr]);
      if (!swapped) clearInterval(interval);
    }, 200); // speed: 150ms per swap

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1 className="text-6xl font-bold font-header flex flex-wrap justify-center">
      {display.map((item, index) => (
        <motion.span
          key={index}
          className="mx-1 cursor-default"
          whileHover={{ scale: 1.3, color: "#38F0B9" }}
          transition={{ type: "spring", stiffness: 250}}
        >
          {item.char === " " ? "\u00A0" : item.char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
