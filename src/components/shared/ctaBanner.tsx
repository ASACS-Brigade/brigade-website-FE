"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface CtaBannerProps {
  icon?: ReactNode;
  heading: string;
  subheading: string;
  buttonLabel: string;
  buttonHref: string;
  bgColor?: string; // e.g., "#173B61" or "bg-primary"
  buttonColor?: string; // e.g., "#D4A017" or "bg-secondary"
  headingSize?: "sm" | "md" | "lg";
  subheadingSize?: "xs" | "sm" | "base";
}

export default function CtaBanner({
  icon,
  heading,
  subheading,
  buttonLabel,
  buttonHref,
  bgColor = "bg-primary",
  buttonColor = "bg-secondary",
  headingSize = "lg",
  subheadingSize = "base",
}: CtaBannerProps) {
  const headingSizeMap = {
    sm: "text-lg md:text-xl lg:text-2xl",
    md: "text-xl md:text-2xl lg:text-3xl",
    lg: "text-2xl md:text-3xl lg:text-4xl",
  };

  const subheadingSizeMap = {
    xs: "text-xs md:text-sm",
    sm: "text-sm md:text-base",
    base: "text-xs md:text-base",
  };

  const isBgColor = bgColor.startsWith("bg-");
  const isButtonColor = buttonColor.startsWith("bg-");

  return (
    <section className="relative overflow-hidden">
      <div
        className={`${
          isBgColor ? bgColor : ""
        } flex flex-col items-center justify-center gap-5 px-5 py-10 text-white md:gap-0 lg:flex-row lg:px-40 lg:py-32`}
        style={{
          ...(isBgColor ? {} : { backgroundColor: bgColor }),
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
        }}
      >
        {/* Left Content */}
        <div className="flex flex-1 flex-col items-center gap-6 text-center md:flex-row md:text-left">
          {icon ? (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              {icon}
            </div>
          ) : null}

          {/* Text */}
          <div>
            <h3 className={`${headingSizeMap[headingSize]} font-bold`}>
              {heading}
            </h3>

            <p className={`${subheadingSizeMap[subheadingSize]} mt-2 max-w-xl`}>
              {subheading}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={buttonHref}
          className={`${
            isButtonColor ? buttonColor : ""
          } w-full shrink-0 whitespace-nowrap rounded-md px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto md:px-8 md:text-base`}
          style={isButtonColor ? {} : { backgroundColor: buttonColor }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
