"use client";

import { useEffect, useState } from "react";
import { HeartHandshake } from "lucide-react";

import { cn } from "../../lib/utils";

type DonateButtonProps = {
  className?: string;
  fullWidth?: boolean;
};

export default function DonateButton({
  className = "",
  fullWidth = false,
}: DonateButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timeout = window.setTimeout(() => setVisible(false), 2400);
    return () => window.clearTimeout(timeout);
  }, [visible]);

  return (
    <>
      <button
        type="button"
        onClick={() => setVisible(true)}
        className={cn(
          "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#b98c22]",
          fullWidth && "w-full",
          className
        )}
      >
        <HeartHandshake size={17} />
        Donate
      </button>

      <div
        role="status"
        aria-live="polite"
        className={`fixed right-5 top-24 z-[10000] max-w-[260px] rounded-lg border border-secondary/30 bg-primary px-4 py-3 text-sm font-semibold text-white shadow-2xl transition duration-300 ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        Donation is in development mode.
      </div>
    </>
  );
}
