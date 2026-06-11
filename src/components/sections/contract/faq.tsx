"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "../../layout/fade-in";

const faqs = [
  {
    q: "How do I join the Brigade?",
    a: "You can join by visiting our hall during any meeting session — Mondays 10 AM–12:30 PM or Fridays 5–7 PM — or by contacting us through this form.",
  },
  {
    q: "What age groups are accepted?",
    a: "We accept members from age 5 through young adulthood. Boys' Brigade and Girls' Brigade each have age-specific sections with tailored programmes.",
  },
  {
    q: "Are parents involved?",
    a: "Absolutely. We hold regular Parents & Leaders Forums, and parents are encouraged to attend events, volunteer, and stay connected with the chapter.",
  },
  {
    q: "Is there a membership fee?",
    a: "There is a nominal annual subscription fee that helps cover uniforms, training materials, and activities. Contact us for current rates.",
  },
  {
    q: "Do you run holiday programmes?",
    a: "Yes — we run camps, outreach programmes, and skill-building workshops during school holidays. Follow our events page to stay updated.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <FadeIn>
      <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
        <h2 className="text-base font-bold text-primary mb-5">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-3.5 text-left group"
                aria-expanded={open === i}
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className="flex-shrink-0 text-muted transition-transform duration-200"
                  style={{
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    color: open === i ? "#D4A017" : undefined,
                  }}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: open === i ? "200px" : "0px",
                  opacity: open === i ? 1 : 0,
                }}
              >
                <p className="pb-4 text-xs text-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}