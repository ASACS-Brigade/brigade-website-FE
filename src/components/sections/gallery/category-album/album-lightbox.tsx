"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  X,
} from "lucide-react";

interface AlbumLightboxProps {
  open: boolean;
  image: string;
  title: string;
  current: number;
  total: number;
  isAtStart: boolean;
  isAtEnd: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function AlbumLightbox({
  open,
  image,
  title,
  current,
  total,
  isAtStart,
  isAtEnd,
  onClose,
  onNext,
  onPrevious,
}: AlbumLightboxProps) {
  const hasMultiple = total > 1;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] bg-black/95 text-white"
          onContextMenu={(event) => event.preventDefault()}
        >
          <button
            type="button"
            title="Close"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-secondary sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {hasMultiple ? (
            <>
              <button
                type="button"
                title={isAtStart ? "Beginning of gallery" : "Previous image"}
                aria-label={isAtStart ? "Beginning of gallery" : "Previous image"}
                onClick={onPrevious}
                disabled={isAtStart}
                className={`absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition sm:left-6 sm:h-12 sm:w-12 ${
                  isAtStart
                    ? "cursor-not-allowed border border-white/10 bg-white/5 text-white/35"
                    : "bg-white/10 text-white hover:bg-secondary"
                }`}
              >
                {isAtStart ? <ChevronsLeft size={24} /> : <ChevronLeft size={24} />}
              </button>

              <button
                type="button"
                title={isAtEnd ? "End of gallery" : "Next image"}
                aria-label={isAtEnd ? "End of gallery" : "Next image"}
                onClick={onNext}
                disabled={isAtEnd}
                className={`absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition sm:right-6 sm:h-12 sm:w-12 ${
                  isAtEnd
                    ? "cursor-not-allowed border border-white/10 bg-white/5 text-white/35"
                    : "bg-white/10 text-white hover:bg-secondary"
                }`}
              >
                {isAtEnd ? <ChevronsRight size={24} /> : <ChevronRight size={24} />}
              </button>
            </>
          ) : null}

          <div className="flex h-full items-center justify-center px-5 py-20 sm:px-8 sm:py-24">
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative h-full w-full max-w-7xl"
            >
              <Image
                src={image}
                alt={title}
                fill
                priority
                draggable={false}
                className="select-none object-contain"
              />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black px-5 py-4 sm:px-8">
            <h3 className="text-base font-bold sm:text-xl">{title}</h3>
            <p className="mt-1 text-sm text-white/65">
              Image {current + 1} of {total}
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
