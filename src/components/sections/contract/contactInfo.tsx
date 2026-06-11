"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeIn from "../../layout/fade-in";

const info = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [
      "37, North Thomas Street,",
      "Surulere, Lagos, Nigeria.",
    ],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+234 (0)1 123 4567", "+234 (0)1 234 0678"],
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["info@brigadesurlere.org"],
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: [
      "Mondays 10:00 AM – 12:30 PM",
      "Fridays 5:00 PM – 7:00 PM",
    ],
  },
];

export default function ContactInfo() {
  return (
    <FadeIn>
      <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
        <h2 className="text-base font-bold text-primary mb-5">
          Contact Information
        </h2>

        <div className="flex flex-col gap-5">
          {info.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#FEF3C7" }}
                >
                  <Icon size={15} style={{ color: "#D4A017" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-0.5">
                    {item.label}
                  </p>
                  {item.lines.map(line => (
                    <p key={line} className="text-xs text-muted leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}