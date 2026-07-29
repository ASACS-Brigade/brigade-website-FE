"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const ANNIVERSARY_SESSION_KEY = "brigade-golden-jubilee-intro-seen";
const HOLD_DURATION_MS = 3000;

export function useAnniversaryIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  const dismiss = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    try {
      sessionStorage.setItem(ANNIVERSARY_SESSION_KEY, "true");
    } catch {
      // Storage may be unavailable in strict privacy modes; dismissal must still work.
    }

    setIsVisible(false);
  }, []);

  useEffect(() => {
    let shouldShow = true;
    let previewRequested = false;

    try {
      previewRequested = new URLSearchParams(window.location.search).has("jubilee-preview");
      shouldShow = previewRequested || sessionStorage.getItem(ANNIVERSARY_SESSION_KEY) !== "true";
    } catch {
      shouldShow = true;
    }

    if (!shouldShow) return;

    setIsVisible(true);
    if (!previewRequested) {
      timerRef.current = window.setTimeout(dismiss, HOLD_DURATION_MS);
    }

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [dismiss]);

  return { isVisible, dismiss };
}
