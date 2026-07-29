"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import Container from "../layout/container";
import ThemeToggle from "../layout/theme-toggle";
import MobileMenu from "./mobile-menu";
import { cn } from "../../lib/utils";
import DonateButton from "../shared/donate-button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const aboutItems = [
  {
    label: "About Us",
    description: "Our shared story, mission and values",
    href: "/about",
  },
  {
    label: "5th Surulere Company",
    description: "The Boys’ Brigade Nigeria",
    href: "/about/5th-surulere-company",
  },
  {
    label: "9th Surulere Company",
    description: "The Girls’ Brigade Nigeria",
    href: "/about/9th-surulere-company",
  },
];

function routeIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/about") return pathname === "/about";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!aboutRef.current?.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setAboutOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[999] border-b border-border bg-card text-foreground shadow-sm shadow-black/5">
        <Container className="max-[384px]:px-2.5">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" onClick={closeMenu} className="flex min-w-0 items-center gap-2 text-primary max-[384px]:gap-1 sm:gap-3">
              <span className="shrink-0">
                <Image
                  src="/images/bb-Logo.png"
                  alt="Boys’ Brigade logo"
                  width={50}
                  height={50}
                  priority
                  unoptimized
                  className="h-[50px] w-[50px] object-contain max-[384px]:h-9 max-[384px]:w-9"
                />
              </span>
              <span className="flex min-w-0 flex-col whitespace-nowrap text-[11px] font-bold uppercase leading-[1.08] tracking-wide max-[384px]:text-[9px] max-[384px]:leading-[1.05] max-[384px]:tracking-normal sm:text-xs md:text-[13px]">
                <span>ALL SAINTS SURULERE</span>
                <span className="text-center">Brigade</span>
              </span>
              <span className="shrink-0">
                <Image
                  src="/images/gb-logo.png"
                  alt="Girls’ Brigade logo"
                  width={45}
                  height={45}
                  priority
                  unoptimized
                  className="h-[45px] w-[45px] object-contain max-[384px]:h-8 max-[384px]:w-8"
                />
              </span>
            </Link>

            <nav aria-label="Primary navigation" className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-7">
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={cn("navHover text-foreground transition", pathname === "/" && "is-active")}>
                Home
              </Link>

              <div
                ref={aboutRef}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setAboutOpen(false);
                  }
                }}
              >
                <div className="flex items-center gap-0.5">
                  <Link
                    href="/about"
                    aria-current={pathname === "/about" ? "page" : undefined}
                    onFocus={() => setAboutOpen(true)}
                    className={cn("navHover text-foreground transition", pathname.startsWith("/about") && "is-active")}
                  >
                    About
                  </Link>
                  <button
                    type="button"
                    aria-label="Toggle About submenu"
                    aria-expanded={aboutOpen}
                    aria-controls="desktop-about-menu"
                    onClick={() => setAboutOpen((open) => !open)}
                    className="flex h-8 w-7 items-center justify-center rounded-md text-foreground outline-none transition hover:bg-background hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    <ChevronDown aria-hidden="true" className={cn("h-4 w-4 transition-transform", aboutOpen && "rotate-180")} />
                  </button>
                </div>

                <div
                  id="desktop-about-menu"
                  className={cn(
                    "absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 transition duration-200",
                    aboutOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
                  )}
                >
                  <div className="rounded-xl border border-border bg-card p-2 shadow-xl shadow-slate-900/10 dark:shadow-black/30">
                    {aboutItems.map((item) => {
                      const active = routeIsActive(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setAboutOpen(false)}
                          className={cn(
                            "block rounded-lg px-4 py-3 outline-none transition hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:ring-2 focus-visible:ring-secondary",
                            active && "bg-primary/5",
                          )}
                        >
                          <span className={cn("block text-sm font-bold text-primary", active && "text-secondary")}>{item.label}</span>
                          <span className="mt-1 block text-xs leading-5 text-muted">{item.description}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {navItems.slice(1).map((item) => {
                const isActive = routeIsActive(pathname, item.href);
                return (
                  <Link key={item.label} href={item.href} aria-current={isActive ? "page" : undefined} className={cn("navHover text-foreground transition", isActive && "is-active")}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-2 flex shrink-0 items-center gap-2 sm:ml-3 sm:gap-3">
              <DonateButton className="hidden lg:inline-flex" />
              <ThemeToggle />
              <button
                type="button"
                title="Open menu"
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary lg:hidden"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu open={isOpen} onClose={closeMenu} />
    </>
  );
}
