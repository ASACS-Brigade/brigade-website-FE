"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./AnniversaryIntro.module.css";

const pieces = [
  { left: "7%", top: "18%", width: 7, height: 34, rotate: 24, delay: 0.92 },
  { left: "18%", top: "78%", width: 5, height: 25, rotate: 68, delay: 1.06 },
  { left: "31%", top: "9%", width: 8, height: 20, rotate: -52, delay: 1.18 },
  { left: "42%", top: "82%", width: 4, height: 30, rotate: 16, delay: 0.98 },
  { left: "58%", top: "13%", width: 6, height: 24, rotate: 73, delay: 1.24 },
  { left: "69%", top: "86%", width: 8, height: 19, rotate: -25, delay: 1.1 },
  { left: "79%", top: "11%", width: 5, height: 32, rotate: 42, delay: 0.88 },
  { left: "90%", top: "70%", width: 7, height: 23, rotate: -64, delay: 1.3 },
  { left: "94%", top: "25%", width: 4, height: 18, rotate: 18, delay: 1.14 },
  { left: "13%", top: "54%", width: 4, height: 16, rotate: -18, delay: 1.28 },
];

export default function AnniversaryDecorations() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[7] overflow-hidden">
      {pieces.map((piece, index) => (
        <motion.span
          key={`${piece.left}-${piece.top}`}
          className={styles.decoration}
          style={{
            left: piece.left,
            top: piece.top,
            width: piece.width,
            height: piece.height,
            rotate: piece.rotate,
            opacity: index % 3 === 0 ? 0.62 : 0.88,
          }}
          initial={{ opacity: 0, y: reduceMotion ? 0 : -14, rotate: piece.rotate - 14 }}
          animate={{
            opacity: index % 3 === 0 ? 0.62 : 0.88,
            y: reduceMotion ? 0 : [0, 5, 1],
            rotate: reduceMotion ? piece.rotate : [piece.rotate - 5, piece.rotate + 5, piece.rotate],
          }}
          transition={{
            delay: reduceMotion ? 0 : piece.delay,
            duration: reduceMotion ? 0 : 1.15,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
