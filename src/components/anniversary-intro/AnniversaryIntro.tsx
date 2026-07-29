"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import AnniversaryDecorations from "./AnniversaryDecorations";
import AnniversaryNumber from "./AnniversaryNumber";
import PhotoMosaic from "./PhotoMosaic";
import SkipIntroButton from "./SkipIntroButton";
import styles from "./AnniversaryIntro.module.css";
import { useAnniversaryIntro } from "./useAnniversaryIntro";

export default function AnniversaryIntro() {
  const { isVisible, dismiss } = useAnniversaryIntro();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.section
          role="dialog"
          aria-modal="true"
          aria-label="Golden Jubilee anniversary introduction"
          className={styles.overlay}
          initial={{ opacity: reduceMotion ? 1 : 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.02 }}
          transition={{ duration: reduceMotion ? 0.18 : 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: reduceMotion ? 1 : 0.72, scale: reduceMotion ? 1 : 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
          >
            <PhotoMosaic />
          </motion.div>

          <div className={styles.photoWash} aria-hidden="true" />
          <div className={styles.vignette} aria-hidden="true" />
          <div className={styles.grain} aria-hidden="true" />

          <div className={styles.poster}>
            <motion.div
              className={styles.brand}
              initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.48, duration: reduceMotion ? 0.15 : 0.42 }}
            >
              <div className={styles.brandLogos}>
                <Image
                  src="/images/bb-Logo.png"
                  alt="Boys' Brigade Nigeria emblem"
                  width={34}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-[0.58rem] font-black uppercase leading-[1.35] tracking-[0.18em] text-white sm:text-[0.68rem]">
                  All Saints&apos; Anglican Church, Surulere
                </p>
                <p className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.15em] text-white/70 sm:text-[0.58rem]">
                  The Boys&apos; Brigade Nigeria
                </p>
              </div>
            </motion.div>

            <AnniversaryNumber />
            <AnniversaryDecorations />
            <p className={styles.hashtag}>#5thSurulereAt50 &nbsp;&middot;&nbsp; Sure &amp; Steadfast</p>
            <SkipIntroButton onSkip={dismiss} />
          </div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
