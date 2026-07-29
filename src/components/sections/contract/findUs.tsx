"use client";

import FadeIn from "../../layout/fade-in";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=All%20Saints%20Anglican%20Church%20Surulere%20Lagos&output=embed";

export default function FindUs() {
  return (
    <FadeIn>
      <div className="overflow-hidden rounded-xl border border-border shadow-sm">
        <div className="border-b border-border bg-background px-4 py-3">
          <h2 className="text-base font-bold text-heading">Find Us</h2>
          <p className="mt-0.5 text-xs text-muted">
            All Saints Anglican Church, Surulere, Lagos.
          </p>
        </div>

        <div className="relative h-[260px] w-full">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="All Saints Anglican Church Surulere map"
          />
        </div>
      </div>
    </FadeIn>
  );
}
