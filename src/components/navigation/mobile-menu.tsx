"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";

import DonateButton from "../shared/donate-button";
import { cn } from "../../lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "5th Surulere Company", href: "/about/5th-surulere-company" },
  { label: "9th Surulere Company", href: "/about/9th-surulere-company" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [aboutExpanded, setAboutExpanded] = useState(pathname.startsWith("/about"));
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[9999] overflow-x-hidden transition-all duration-300",
        open ? "visible pointer-events-auto bg-black/50 opacity-100" : "invisible pointer-events-none bg-transparent opacity-0",
      )}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onClick={(event) => event.stopPropagation()}
        className={cn(
          "absolute right-0 top-0 h-dvh w-[88%] max-w-[360px] overflow-y-auto bg-card text-foreground shadow-2xl transition-transform duration-300 will-change-transform",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border p-5">
          <h2 className="text-lg font-bold text-foreground">MENU</h2>
          <button
            ref={closeButtonRef}
            type="button"
            title="Close menu"
            aria-label="Close menu"
            onClick={onClose}
            className="cursor-pointer rounded-lg p-2 text-foreground outline-none hover:bg-background focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <X />
          </button>
        </div>

        <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col px-6 py-3">
          <Link href="/" onClick={onClose} aria-current={pathname === "/" ? "page" : undefined} className="border-b border-border py-4 text-lg font-medium text-foreground transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
            Home
          </Link>

          <div className="border-b border-border">
            <div className="flex items-center">
              <Link href="/about" onClick={onClose} aria-current={pathname === "/about" ? "page" : undefined} className="flex min-h-14 flex-1 items-center text-lg font-medium text-foreground transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                About
              </Link>
              <button
                type="button"
                aria-label="Toggle About submenu"
                aria-expanded={aboutExpanded}
                aria-controls="mobile-about-submenu"
                onClick={() => setAboutExpanded((expanded) => !expanded)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground outline-none hover:bg-background focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <ChevronDown aria-hidden="true" className={cn("h-5 w-5 transition-transform", aboutExpanded && "rotate-180")} />
              </button>
            </div>
            <div id="mobile-about-submenu" className={cn("grid transition-[grid-template-rows,opacity] duration-300", aboutExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                <div className="mb-3 ml-3 border-l-2 border-secondary/40 pl-4">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      aria-current={pathname === link.href ? "page" : undefined}
                      tabIndex={aboutExpanded ? 0 : -1}
                      className={cn(
                        "flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-muted outline-none transition hover:bg-primary/5 hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary",
                        pathname === link.href && "bg-primary/5 text-secondary",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {links.slice(1).map((link) => (
            <Link key={link.label} href={link.href} onClick={onClose} aria-current={pathname.startsWith(link.href) ? "page" : undefined} className="border-b border-border py-4 text-lg font-medium text-foreground transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
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
