"use client";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Container from "../layout/container";
import FadeIn from "../layout/fade-in";

interface CtaBannerProps {
  icon?: React.ReactNode;
  heading: string;
  subheading: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CtaBanner({
  icon,
  heading,
  subheading,
  buttonLabel,
  buttonHref,
}: CtaBannerProps) {
  return (
    <section className="py-12" style={{ background: "#173B61" }}>
      <Container>
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {icon && (
                <div
                  className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  {icon}
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold text-white">{heading}</h3>
                <p className="text-sm text-white/70 mt-0.5">{subheading}</p>
              </div>
            </div>

            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center flex-shrink-0 rounded-lg px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 whitespace-nowrap"
              style={{ background: "#D4A017" }}
            >
              {buttonLabel}
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}