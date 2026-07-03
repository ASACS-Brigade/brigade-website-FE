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
        } px-5 py-10 lg:px-12 lg:py-32 flex flex-col lg:flex-row items-center justify-between text-white md:gap-8 gap-3`}
        style={{
          ...(isBgColor ? {} : { backgroundColor: bgColor }),
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        }}
      >
        {/* Left Content */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 flex-1">
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
          } px-6 md:px-8 py-3 rounded-md font-semibold text-white whitespace-nowrap hover:opacity-90 transition md:w-auto md:text-base text-xs flex-shrink-0`}
          style={isButtonColor ? {} : { backgroundColor: buttonColor }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
