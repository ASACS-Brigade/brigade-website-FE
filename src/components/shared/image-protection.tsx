"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const preventImageAction = (event: MouseEvent | DragEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.closest("img") ||
        target?.closest(".protected-image") ||
        target?.closest("[data-protected-image='true']")
      ) {
        event.preventDefault();
      }
    };

    const preventShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const protectedShortcut =
        key === "printscreen" ||
        ((event.ctrlKey || event.metaKey) &&
          ["s", "p", "u", "c"].includes(key));

      if (protectedShortcut) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventImageAction);
    document.addEventListener("dragstart", preventImageAction);
    document.addEventListener("keydown", preventShortcuts);

    return () => {
      document.removeEventListener("contextmenu", preventImageAction);
      document.removeEventListener("dragstart", preventImageAction);
      document.removeEventListener("keydown", preventShortcuts);
    };
  }, []);

  return null;
}
