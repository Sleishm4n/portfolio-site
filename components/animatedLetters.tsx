"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShuffleButton from "./shuffleButton";

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

  const startSortAnimation = (arr: any[]) => {
    let copy = [...arr];

    const interval = setInterval(() => {
      let swapped = false;

      for (let i = 0; i < copy.length - 1; i++) {
        if (copy[i].idx > copy[i + 1].idx) {
          [copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
          swapped = true;
          break;
        }
      }

      setDisplay([...copy]);

      if (!swapped) clearInterval(interval);
    }, 120);
  };

  useEffect(() => {
    startSortAnimation(display);
  }, []);

  const shuffle = () => {
    const shuffled = shuffleArray([...target]);
    setDisplay(shuffled);
    startSortAnimation(shuffled);
  };
  
  return (
    <><div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-6">
        <motion.h1 className="text-6xl font-bold font-cinzel flex flex-wrap justify-center">
          {display.map((item, index) => (
            <motion.span
              key={index}
              className="mx-1 cursor-default"
              whileHover={{ scale: 1.2, color: "#38F0B9" }}
            >
              {item.char === " " ? "\u00A0" : item.char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <div className="justify-center w-24">
          <ShuffleButton onClick={shuffle} />
      </div>
    </div></>
  );
}
