"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 520);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`cursor-pointer fixed bottom-6 right-5 z-[900] flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#b98c22] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:bottom-8 sm:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
}
