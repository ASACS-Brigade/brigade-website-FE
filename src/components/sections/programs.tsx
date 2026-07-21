"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

import curveDotLine from "../../../public/images/curveDotLine.png";

const cards = [
  {
    bg: "#F2FAFC",
    rotate: -8,
    image: "/events/pic1.png",
    title: "Weekly Meetings",
    description:
      "Every Saturday at 4pm, we gather for fellowship, worship, and inspiring Christian teaching. It's where every member finds connection, spiritual growth, and community support.",
  },
  {
    bg: "#73E9DB",
    rotate: 6,
    image: "/events/pic2.png",
    title: "Orchestra & Band Corps Rehearsals",
    description:
      "Saturday afternoons at 2pm, kids and young adults come together to play, learn, and rehearse. From beginners to seasoned musicians, everyone finds their voice in harmony.",
  },
  {
    bg: "#BAE3F4",
    rotate: -7,
    image: "/events/pic3.png",
    title: "Holiday Music Classes",
    description:
      "Master the art of music reading and instrument playing. Our specialized classes teach foundational skills, music theory, and practical techniques that build confident musicians.",
  },
  {
    bg: "#F8F2FC",
    rotate: 9,
    image: "/events/pic4.png",
    title: "Monthly Parade Drills",
    description:
      "Building discipline, precision, and coordination through structured monthly training sessions. These drills strengthen our collective unity and individual excellence.",
  },
  {
    bg: "#F2FAFC",
    rotate: -12,
    image: "/events/pic5.png",
    title: "Joint Enrolment & Rededication Services",
    description:
      "Every September, we celebrate new beginnings and renewed commitments. This service welcomes fresh members and honors the dedications of returning ones in our extended family.",
  },
  {
    bg: "#73E9DB",
    rotate: 10,
    image: "/events/pic6.png",
    title: "Parade Night",
    description:
      "December's grand celebration where the entire community comes alive! Music, joy, and festive energy fill the streets as we showcase the year's excellence and unity.",
  },
];

// >>>>>>>  How the scroll math works <<<<<<<<
//
// The outer section is (cards.length + 1) × 100vh tall.
// scrollYProgress goes 0 → 1 across that entire height.
//
// Cards are rendered in REVERSE order in the DOM (last card first).
// z-index is driven by scroll: the active card always sits on top.
//
// Each card i "owns" the scroll band:
//   enter:  i       / cards.length   — card finishes scaling in
//   exit:   (i + 1) / cards.length   — card flies off the top
//
// NO opacity changes — cards are always fully opaque. Only Y + scale move.

function Card({
  card,
  index,
  progress,
}: {
  card: (typeof cards)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const n = cards.length;

  // Each card's scroll band
  const enter = index / n;
  const exit = (index + 1) / n;

  // Scale: 0.85 → 1 as the card enters; stays 1 after
  const scale = useTransform(
    progress,
    [index === 0 ? 0 : enter - 1 / n, enter],
    [index === 0 ? 1 : 0.85, 1],
    { clamp: true },
  );

  // Y: once active, fly upward toward exit. Last card never exits.
  const y = useTransform(
    progress,
    index < n - 1 ? [enter, exit] : [enter, enter], // last card stays put
    index < n - 1 ? ["0%", "-110%"] : ["0%", "0%"],
    { clamp: true },
  );

  // Slight de-rotation as it exits (visual flair only)
  const rotate = useTransform(
    progress,
    [enter, exit],
    [card.rotate, card.rotate - 4],
    { clamp: true },
  );

  // z-index: bump to 100 while this card is the active one on top
  // Active = from its enter point until its exit point
  // Last card stays on top from its enter onward
  const zIndex = useTransform(progress, (p) => {
    const isActive = p >= enter && (index === n - 1 || p < exit);
    return isActive ? 100 : n - index;
  });

  return (
    <motion.div
      style={{
        scale,
        y,
        rotate,
        zIndex,
        backgroundColor: card.bg,
      }}
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        flex flex-col justify-between
        rounded-4xl
        p-6 sm:p-7 md:p-8
        w-[min(90vw,420px)]
        min-h-120 sm:min-h-130 md:min-h-135
        shadow-[0_40px_120px_rgba(0,0,0,.22)]
        border border-white/30
        overflow-hidden
        backdrop-blur-sm
        will-change-transform
      "
    >
      {/* Corner glow */}
      <div className="absolute -top-20 -right-20 h-55 w-55 rounded-full bg-white/25 blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="relative z-10">
        <h3 className="text-[1.4rem] sm:text-[1.6rem] md:text-[1.9rem] font-bold text-[#141416] leading-tight">
          {card.title}
        </h3>
      </div>

      {/* Description */}
      <p className="relative z-10 text-[1.17rem] sm:text-[1.2rem] md:text-[1.5rem] font-medium text-[#141416] tracking-tight">
        {card.description}
      </p>

      {/* Image */}
      <div className="relative z-10 flex justify-end">
        <Image
          src={card.image}
          alt={card.title}
          width={180}
          height={180}
          priority={index < 2}
          className="h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[180px] md:w-[180px] object-contain"
        />
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const ref = useRef<HTMLElement>(null);

  // Track scroll across the full section height
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Extra "+1" viewport gives breathing room after the last card
  const sectionHeight = `${(cards.length + 1) * 100}vh`;

  return (
    <>
      

      <section
        ref={ref}
        className="relative bg-primary-light"
        style={{ height: sectionHeight }}
      >
        <div className="lg:hidden bg-[#F1CA12] p-3 w-1/2 rounded-lg absolute -top-10 left-1/4  ">
        <p className="font-bold text-[#141416] text-[1.2rem] text-center">Our Programs</p>
      </div>

        {/* ── Decorative dotted path ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: Math.ceil(cards.length * 1.8) }).map((_, i) => (
            <Image
              key={i}
              src={curveDotLine}
              alt=""
              className="absolute opacity-20 rotate-[-6deg] w-[700px] xl:w-[900px]"
              style={{
                top: `${i * 55}vh`,
                right: i % 2 === 0 ? "-10%" : "auto",
                left: i % 2 !== 0 ? "-10%" : "auto",
              }}
            />
          ))}
        </div>

        {/* ── Ambient blobs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[10%] top-[15%] h-87.5 w-87.5 rounded-full bg-[#73E9DB]/10 blur-[120px]" />
          <div className="absolute right-[10%] bottom-[15%] h-100 w-100 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
        </div>

        {/* ── STICKY VIEWPORT ─────────────────────────────────────────────────
          This div sticks to the top of the screen for the entire scroll
          journey of the section, providing the "canvas" all cards animate on.
      ──────────────────────────────────────────────────────────────────────── */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Section label — pinned inside the sticky layer */}
          <div className="absolute top-[12%] left-[6%] z-50 hidden lg:block">
            <div
              style={{
                background: "linear-gradient(135deg,#D4AF37 0%,#FFD700 100%)",
                padding: "10px 60px 10px 18px",
                borderRadius: "10px",
              }}
            >
              <p className="font-bold text-[#141416] text-[1.5rem]">
                Our Programs
              </p>
            </div>
          </div>

          {/* Card stack — all cards share this single centered container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
