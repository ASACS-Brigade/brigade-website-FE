"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Shield } from "lucide-react";

import Container from "../layout/container";
import ThemeToggle from "../layout/theme-toggle";
import MobileMenu from "./mobile-menu";
import { cn } from "../../lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className="
        sticky
        top-0
        z-[999]
        border-b
        border-border
        bg-card
        text-foreground
        shadow-sm
        shadow-black/5
        "
      >

        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              className="
              flex
              min-w-0
              items-center
              gap-2
              text-primary
              sm:gap-3
              "
            >
              {/* <span
                className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D4A437]/50
                bg-[#0E2A47]
                text-[#D4A437]
                shadow-sm
                sm:h-11
                sm:w-11
                "
                aria-hidden="true"
              >
                <Shield className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span> */}
              <span className="">
                <img src="/images/bb-logo.png" alt="Brigade Logo" width={40} height={40} />
              </span>

              <span className="flex min-w-0 flex-col text-[11px] font-bold uppercase leading-[1.08] tracking-wide sm:text-xs md:text-[13px]">
                <span>ALL SAINTS SURULERE</span>
                <span>Brigade</span>
                {/* <span>Surulere Companies</span> */}
              </span>

                <span className="">
                <img src="/images/gb-logo.png" alt="girls Brigade Logo" width={37} height={37} />
              </span>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "navHover text-foreground transition",
                      isActive && "is-active"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <button
                type="button"
                title="Open menu"
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen((open) => !open)}
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-border
                text-foreground
                transition
                hover:bg-background
                lg:hidden
                "
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
