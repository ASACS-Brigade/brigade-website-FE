"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./AnniversaryIntro.module.css";

export default function AnniversaryContent() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.copy}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduceMotion ? 0 : 0.7, duration: reduceMotion ? 0.15 : 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className={styles.eyebrow}>Golden Jubilee</p>
      <h1 className={styles.headline}>
        5th Surulere
        <br />
        Company <br/><span className="font-extralight italic">Turns</span> 50
      </h1>
      <p className={styles.supportingText}>
        Celebrating 50 Years of Faith,
        <br className="hidden sm:block" />{" "}
        Discipline, Leadership &amp; Service.
      </p>
      <div className={styles.dateRow}>
        <span className={styles.divider} aria-hidden="true" />
        <time className={styles.date}>1976 &mdash; 2026</time>
      </div>
    </motion.div>
  );
}
