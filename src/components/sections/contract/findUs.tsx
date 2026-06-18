"use client";
import FadeIn from "../../layout/fade-in";

// Replace PLACE_ID or the embed URL with your actual location
// Get your embed URL from: https://maps.google.com → Share → Embed a map
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7216786!2d3.3514!3d6.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2!2sSurulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000";

export default function FindUs() {
  return (
    <FadeIn>
      <div className="rounded-xl border border-border overflow-hidden shadow-sm">
        <div className="px-4 py-3 border-b border-border bg-background">
          <h2 className="text-base font-bold text-primary">Find Us</h2>
          <p className="text-xs text-muted mt-0.5">
            Join us during our weekly meetings and activities.
          </p>
        </div>

        <div className="relative w-full" style={{ height: "260px" }}>
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brigade location map"
          />
        </div>
      </div>
    </FadeIn>
  );
}