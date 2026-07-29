"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnniversaryContent from "./AnniversaryContent";
import styles from "./AnniversaryIntro.module.css";

export default function AnniversaryNumber() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.anniversaryMark}>
      <motion.div
        aria-hidden="true"
        className={styles.number}
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.9, y: reduceMotion ? 0 : 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.15, duration: reduceMotion ? 0.15 : 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        50
      </motion.div>

      <motion.div
        className={styles.landmark}
        initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.5, duration: reduceMotion ? 0.15 : 0.45 }}
      >
        <span className={styles.landmarkLine} aria-hidden="true" />
        <span>A landmark year</span>
      </motion.div>

      <AnniversaryContent />
    </div>
  );
}
