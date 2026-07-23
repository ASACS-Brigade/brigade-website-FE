"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import DonateButton from "../shared/donate-button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      className={`
      fixed
      inset-0
      z-[9999]
      transition-all
      duration-300
      ${
        open
          ? "pointer-events-auto bg-black/50"
          : "pointer-events-none bg-transparent"
      }
      `}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        absolute
        top-0
        right-0
        h-screen
        w-[85%]
        max-w-[350px]
        bg-card
        text-foreground
        shadow-2xl
        transition-transform
        duration-300
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }
        `}
      >
        <div className="flex items-center justify-between border-b border-border p-5">
          <h2
            className="
            text-lg
            font-bold
            text-foreground
            "
          >
            MENU
          </h2>

          <button
            title="Close menu"
            aria-label="Close menu"
            onClick={onClose}
            className="
            rounded-lg
            p-2
            text-foreground
            hover:bg-background
            hover:pointer-cursor
            "
          >
            <X />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className="flex flex-col p-6"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="
              py-4
              text-lg
              font-medium
              text-foreground
              border-b
              border-border
              hover:text-[#D4A437]
              transition-colors
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6">
          <DonateButton fullWidth />
        </div>
      </div>
    </div>
  );
}



