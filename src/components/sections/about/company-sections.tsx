"use client";

import Image from "next/image";
import {
  Anchor,
  BookOpen,
  ChevronsUp,
  Compass,
  Flag,
  Medal,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import curveDotLine from "../../../../public/images/curveDotLine.png";
import type { CompanyPageData } from "../../../constants/companies";

type CompanySection = CompanyPageData["sections"][number];

const cardColours = ["#F2FAFC", "#73E9DB", "#BAE3F4", "#F8F2FC"];
const cardRotations = [-4, 3, -3, 4];

function getSectionIcon(name: string): LucideIcon {
  const sectionName = name.toLowerCase();

  if (sectionName.includes("anchor")) return Anchor;
  if (sectionName.includes("explorer")) return Compass;
  if (sectionName.includes("junior")) return BookOpen;
  if (sectionName.includes("company section")) return Users;
  if (sectionName.includes("senior")) return Medal;
  if (sectionName.includes("brigader")) return Flag;
  if (sectionName.includes("non-commissioned") || sectionName.includes("nco")) {
    return ChevronsUp;
  }
  if (sectionName.includes("warrant")) return ShieldCheck;
  if (sectionName.includes("lieutenant")) return Star;

  return ShieldCheck;
}

function SectionCardContent({
  section,
  index,
}: {
  section: CompanySection;
  index: number;
}) {
  const Icon = getSectionIcon(section.name);

  return (
    <>
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/35 blur-2xl" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="text-xs font-bold tracking-[0.2em] text-primary/40">
          SECTION {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-secondary shadow-md shadow-primary/20">
          <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
        </span>
      </div>

      <div className="relative my-auto py-5 sm:py-7">
        <h3 className="text-[1.35rem] font-bold leading-tight text-[#141416] sm:text-2xl md:text-[1.7rem]">
          {section.name}
        </h3>
        {section.ageRange ? (
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-primary/65">
            {section.ageRange}
          </p>
        ) : null}
        <p className="mt-4 text-[0.95rem] font-medium leading-6 text-[#141416]/75 sm:text-base sm:leading-7">
          {section.description}
        </p>
      </div>

      <div className="relative flex justify-end">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary bg-primary text-secondary shadow-lg shadow-primary/20 sm:h-20 sm:w-20">
          <Icon aria-hidden="true" className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.45} />
        </div>
      </div>
    </>
  );
}

function StackedSectionCard({
  section,
  index,
  total,
  progress,
  reduceMotion,
}: {
  section: CompanySection;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const enter = index / total;
  const exit = (index + 1) / total;
  const scale = useTransform(
    progress,
    [index === 0 ? 0 : Math.max(0, enter - 1 / total), enter],
    [index === 0 ? 1 : 0.88, 1],
    { clamp: true },
  );
  const y = useTransform(
    progress,
    index < total - 1 ? [enter, exit] : [enter, enter],
    index < total - 1 ? ["0%", "-115%"] : ["0%", "0%"],
    { clamp: true },
  );
  const rotate = useTransform(
    progress,
    [enter, exit],
    [
      cardRotations[index % cardRotations.length],
      cardRotations[index % cardRotations.length] - 2,
    ],
    { clamp: true },
  );
  const zIndex = useTransform(progress, (value) => {
    const active = value >= enter && (index === total - 1 || value < exit);
    return active ? 100 : total - index;
  });

  return (
    <motion.article
      style={{
        scale: reduceMotion ? 1 : scale,
        y,
        rotate: reduceMotion ? 0 : rotate,
        zIndex,
        backgroundColor: cardColours[index % cardColours.length],
      }}
      className="absolute left-1/2 top-[45%] flex h-[min(450px,58svh)] min-h-[360px] w-[min(88vw,420px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-4xl border border-white/40 p-5 shadow-[0_32px_90px_rgba(0,0,0,.24)] will-change-transform sm:top-1/2 sm:h-[min(500px,62svh)] sm:min-h-[400px] sm:p-7 lg:left-[70%] lg:h-[min(520px,70vh)] lg:w-[min(44vw,460px)] lg:p-8 xl:left-[62%]"
    >
      <SectionCardContent section={section} index={index} />
    </motion.article>
  );
}

export default function CompanySectionsShowcase({
  sections,
}: {
  sections: CompanyPageData["sections"];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const sectionHeight = `${(sections.length + 1) * 100}vh`;

  return (
    <section
      id="company-sections"
      className="relative bg-primary-light"
      data-testid="company-sections"
    >
      <div className="relative z-[120] px-5 py-8 text-center sm:px-8 sm:py-12 lg:hidden">
        <SectionHeading />
      </div>

      <div
        ref={sectionRef}
        className="relative -mt-16 lg:mt-0"
        data-testid="company-sections-scroll"
        style={{ height: sectionHeight }}
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden lg:top-20 lg:h-[calc(100svh-5rem)]">
          <SectionBackdrop />

          <div className="absolute left-[6%] top-[7%] z-[120] hidden max-w-sm lg:block">
            <SectionHeading />
          </div>

          <div className="relative h-full w-full">
            {sections.map((section, index) => (
              <StackedSectionCard
                key={section.name}
                section={section}
                index={index}
                total={sections.length}
                progress={scrollYProgress}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading() {
  return (
    <div>
      <div className="inline-flex rounded-lg bg-secondary px-4 py-2 text-xs font-bold text-[#141416] shadow-lg shadow-black/10 sm:text-sm">
        Membership Journey
      </div>
      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        Company Sections
      </h2>
      <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-white/70 sm:text-sm sm:leading-6 lg:mx-0 lg:mt-3 lg:leading-7">
        Follow the path from a member&apos;s first section into responsibility and officer leadership.
      </p>
    </div>
  );
}

function SectionBackdrop() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={curveDotLine}
          alt=""
          className="absolute -right-44 top-[12%] w-[620px] rotate-[-6deg] opacity-20 sm:-right-28 sm:w-[760px] lg:-right-20 lg:w-[900px]"
        />
        <Image
          src={curveDotLine}
          alt=""
          className="absolute -left-64 bottom-[2%] w-[680px] rotate-[174deg] opacity-10 sm:w-[820px] lg:-left-40"
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[15%] h-80 w-80 rounded-full bg-[#73E9DB]/10 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[8%] h-96 w-96 rounded-full bg-secondary/10 blur-[140px]" />
      </div>
    </>
  );
}
