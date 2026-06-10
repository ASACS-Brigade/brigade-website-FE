"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

const boysSteps = [
  {
    year: "4 October 1883",
    title: "The First Company",
    body: "William Alexander Smith opened Free College Church Mission, Glasgow with 35 boys — founding the world's first uniformed youth organisation.",
    rotate: "rotate-2",
  },
  {
    year: "The Founder's Vision",
    title: "Sure and Stedfast",
    body: "Smith's motto from Hebrews 6:19 paired military discipline with Christian faith. Object: to advance Christ's Kingdom through Reverence, Discipline, and Self-Respect.",
    rotate: "-rotate-2",
  },
  {
    year: "1890s onward",
    title: "A Worldwide Movement",
    body: "From one Glasgow company, BB swept the world — inspiring the Boy Scouts and Church Lads' Brigade. By 1910: 100,000 boys across 2,200 companies.",
    rotate: "rotate-2",
  },
  {
    year: "Today",
    title: "750,000 in 60 Nations",
    body: "Over 140 years on, Boys' Brigade equips boys and young men with faith, leadership, and character — across 60 countries worldwide.",
    rotate: "-rotate-3",
  },
];

const girlsSteps = [
  {
    year: "6 October 1893",
    title: "A Cold Evening in Dublin",
    body: "Miss Margaret Lyttle warmed girls up with drill at Sandymount Presbyterian Church during singing practice — founding the very first girls-only Christian youth group.",
    rotate: "-rotate-3",
  },
  {
    year: "1900 – 1902",
    title: "Three Sisters of Mission",
    body: "Girls' Guildry rose in Scotland (1900), then Girls' Life Brigade in England (1902) — three nations, one purpose: Christ's Kingdom among girls and young women.",
    rotate: "rotate-2",
  },
  {
    year: "10 June 1965",
    title: "One Organisation, One Crest",
    body: "Three missions merged into one. Ireland's Cross, Scotland's Lamp, and England's Crown united into a single crest. June 10th became the International Day of Prayer.",
    rotate: "rotate-3",
  },
  {
    year: "Today",
    title: "128,000 in 61 Nations",
    body: "Girls' Brigade equips girls and young women to Seek, Serve and Follow Christ — in 61 countries, carrying Margaret Lyttle's 1893 vision into a new generation.",
    rotate: "-rotate-2",
  },
];

function useSnake(
  colRef: React.MutableRefObject<HTMLDivElement | null>,
  svgRef: React.MutableRefObject<SVGSVGElement | null>,
) {
  useEffect(() => {
    function buildSnake() {
      const col = colRef.current;
      const svg = svgRef.current;
      if (!col || !svg) return;

      const nums = Array.from(
        col.querySelectorAll<HTMLElement>(".step-num-bubble"),
      );
      if (nums.length < 2) return;

      const colRect = col.getBoundingClientRect();
      const pts = nums.map((n) => {
        const r = n.getBoundingClientRect();
        return {
          x: (r.left + r.right) / 2 - colRect.left,
          y: (r.top + r.bottom) / 2 - colRect.top,
        };
      });

      const W = col.offsetWidth;
      const H = col.offsetHeight;

      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.setAttribute("width", String(W));
      svg.setAttribute("height", String(H));

      // Pull control points inward toward the center of the column
      // so the curve stays away from the text on both sides
      // controls the movement and body of the dashed line
      const tension = 50;
      const colCenterX = W / 2;

      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        const p = pts[i - 1];
        const c = pts[i];
        const my = (p.y + c.y) / 2;

        // Alternate LEFT / RIGHT but anchored around the column center
        // so the swing never reaches into the text columns
        const dir = i % 2 === 1 ? 1 : -1;

        // Control points swing around colCenterX, not around the bubble x
        const cx1 = colCenterX + dir * tension;
        const cx2 = colCenterX + dir * tension;

        d += ` C ${cx1.toFixed(1)} ${my.toFixed(1)}, ${cx2.toFixed(1)} ${my.toFixed(1)}, ${c.x.toFixed(1)} ${c.y.toFixed(1)}`;
      }

      while (svg.firstChild) svg.removeChild(svg.firstChild);

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "#000");
      path.setAttribute("stroke-width", "1");
      path.setAttribute("stroke-linecap", "round");
      // draw path BEHIND bubbles — z-index on SVG is now z-0
      // and the bubble wrapper is z-10, so SVG naturally sits behind
      svg.appendChild(path);

      const len = path.getTotalLength();
      path.setAttribute("stroke-dasharray", "8 6");
      path.setAttribute("stroke-dashoffset", String(len));
      path.style.transition = "none";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          path.style.transition = "stroke-dashoffset 2s ease";
          path.setAttribute("stroke-dashoffset", "0");
        });
      });
    }

    const col = colRef.current;
    if (!col) return;

    let drawn = false;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !drawn) {
          drawn = true;
          setTimeout(buildSnake, 200);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(col);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildSnake, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      obs.disconnect();
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, [colRef, svgRef]);
}

function ImagePlaceholder({
  index,
  side,
}: {
  index: number;
  side: "boys" | "girls";
}) {
  const boysBgs = ["#1a1060", "#FEF9E7", "#FFFBEB", "#1a1060"];
  const girlsBgs = ["#78350f", "#FFFBEB", "#FFFBEB", "#78350f"];
  const bg = side === "boys" ? boysBgs[index] : girlsBgs[index];

  return (
    <svg
      viewBox="0 0 148 111"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="148" height="111" fill={bg} />
      {side === "boys" && index === 0 && (
        <foreignObject x="15" y="10" width="118" height="90">
          <div className="w-full h-full flex items-center justify-center bg-white rounded-xl">
            <Image
              src="/images/bb-Logo.png"
              alt="Boys Brigade"
              width={80}
              height={80}
            />
          </div>
        </foreignObject>
      )}
      {side === "boys" && index === 1 && (
        <>
          <rect x="40" y="22" width="68" height="72" rx="6" fill="#B8860B" />
          <rect x="40" y="22" width="34" height="72" rx="6" fill="#92680B" />
          <line
            x1="74"
            y1="22"
            x2="74"
            y2="94"
            stroke="#D4A017"
            strokeWidth="1"
          />
          <line
            x1="48"
            y1="42"
            x2="70"
            y2="42"
            stroke="#FEF3C7"
            strokeWidth="1.5"
          />
          <line
            x1="48"
            y1="50"
            x2="70"
            y2="50"
            stroke="#FEF3C7"
            strokeWidth="1.5"
          />
          <line
            x1="80"
            y1="42"
            x2="100"
            y2="42"
            stroke="#FDE68A"
            strokeWidth="1.5"
          />
          <line
            x1="80"
            y1="50"
            x2="100"
            y2="50"
            stroke="#FDE68A"
            strokeWidth="1.5"
          />
          <text
            x="74"
            y="14"
            textAnchor="middle"
            fill="#B8860B"
            fontSize="8"
            fontFamily="sans-serif"
          >
            Sure and Stedfast
          </text>
        </>
      )}
      {side === "boys" && index === 2 && (
        <>
          <circle cx="74" cy="58" r="34" fill="#B8860B" />
          <ellipse
            cx="74"
            cy="58"
            rx="15"
            ry="34"
            fill="none"
            stroke="#FEF3C7"
            strokeWidth="1"
          />
          <ellipse
            cx="74"
            cy="58"
            rx="34"
            ry="12"
            fill="none"
            stroke="#FEF3C7"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="58"
            x2="108"
            y2="58"
            stroke="#FEF3C7"
            strokeWidth="1"
          />
          <circle cx="54" cy="46" r="3" fill="#FBBF24" />
          <circle cx="88" cy="42" r="3" fill="#FBBF24" />
          <circle cx="96" cy="64" r="3" fill="#FBBF24" />
          <text
            x="74"
            y="14"
            textAnchor="middle"
            fill="#B8860B"
            fontSize="9"
            fontFamily="sans-serif"
          >
            60 Countries Today
          </text>
        </>
      )}
      {side === "boys" && index === 3 && (
        <>
          <circle cx="74" cy="35" r="17" fill="#534AB7" />
          <path d="M46 90 Q46 62 74 59 Q102 62 102 90Z" fill="#3C3489" />
          <circle cx="62" cy="72" r="5" fill="#D4A017" />
          <circle cx="74" cy="68" r="5" fill="#D4A017" />
          <circle cx="86" cy="72" r="5" fill="#D4A017" />
          <text
            x="74"
            y="104"
            textAnchor="middle"
            fill="#FDE68A"
            fontSize="9"
            fontFamily="sans-serif"
          >
            750,000 Members
          </text>
        </>
      )}
      {side === "girls" && index === 0 && (
        <>
          <circle cx="74" cy="48" r="24" fill="#D97706" />
          <rect x="70" y="28" width="8" height="40" rx="2" fill="#FEF3C7" />
          <rect x="54" y="44" width="40" height="8" rx="2" fill="#FEF3C7" />
          <text
            x="74"
            y="94"
            textAnchor="middle"
            fill="#FDE68A"
            fontSize="9"
            fontFamily="sans-serif"
          >
            Dublin · 1893
          </text>
        </>
      )}
      {side === "girls" && index === 1 && (
        <>
          <rect x="8" y="26" width="38" height="58" rx="5" fill="#D97706" />
          <rect x="55" y="26" width="38" height="58" rx="5" fill="#B8860B" />
          <rect x="102" y="26" width="38" height="58" rx="5" fill="#92680B" />
          <line
            x1="27"
            y1="36"
            x2="27"
            y2="74"
            stroke="#FEF3C7"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="55"
            x2="42"
            y2="55"
            stroke="#FEF3C7"
            strokeWidth="2"
          />
          <ellipse cx="74" cy="52" rx="8" ry="11" fill="#FBBF24" />
          <rect x="70" y="63" width="8" height="5" rx="1" fill="#92680B" />
          <path
            d="M108 40 L112 32 L116 40 L120 32 L124 40 L124 48 L108 48Z"
            fill="#FBBF24"
          />
          <text
            x="74"
            y="98"
            textAnchor="middle"
            fill="#92680B"
            fontSize="8"
            fontFamily="sans-serif"
          >
            Ireland · Scotland · England
          </text>
        </>
      )}
      {side === "girls" && index === 2 && (
        <>
          <circle cx="74" cy="58" r="32" fill="#D97706" />
          <rect x="70" y="34" width="8" height="44" rx="2" fill="#FEF3C7" />
          <rect x="54" y="50" width="40" height="8" rx="2" fill="#FEF3C7" />
          <path
            d="M62 34 L66 26 L70 34 L74 26 L78 34 L82 26 L86 34"
            fill="none"
            stroke="#FBBF24"
            strokeWidth="2.5"
          />
          <ellipse cx="74" cy="76" rx="7" ry="9" fill="#FBBF24" />
          <text
            x="74"
            y="104"
            textAnchor="middle"
            fill="#92680B"
            fontSize="8"
            fontFamily="sans-serif"
          >
            United · 1965
          </text>
        </>
      )}
      {side === "girls" && index === 3 && (
        <>
          <circle cx="74" cy="58" r="32" fill="#B8860B" />
          <ellipse
            cx="74"
            cy="58"
            rx="14"
            ry="32"
            fill="none"
            stroke="#FEF3C7"
            strokeWidth="1"
          />
          <ellipse
            cx="74"
            cy="58"
            rx="32"
            ry="11"
            fill="none"
            stroke="#FEF3C7"
            strokeWidth="1"
          />
          <circle cx="55" cy="48" r="3" fill="#FBBF24" />
          <circle cx="90" cy="44" r="3" fill="#FBBF24" />
          <circle cx="94" cy="64" r="3" fill="#FBBF24" />
          <circle cx="56" cy="68" r="3" fill="#FBBF24" />
          <text
            x="74"
            y="104"
            textAnchor="middle"
            fill="#FDE68A"
            fontSize="8"
            fontFamily="sans-serif"
          >
            128,000+ · 61 Countries
          </text>
        </>
      )}
    </svg>
  );
}

function StepRow({
  step,
  index,
  side,
}: {
  step: { year: string; title: string; body: string; rotate: string };
  index: number;
  side: "boys" | "girls";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, index * 80);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const accentColor = "#B8860B";

  // ── Mobile layout: image on top, text below, no number ──────────────
  const MobileLayout = (
    <div className="flex flex-col gap-3 lg:hidden">
      <div className="flex items-center justify-center">
        <div
          className={`relative w-full max-w-[180px] transition-transform duration-300 hover:rotate-0 hover:scale-105 ${step.rotate}`}
        >
          <div
            className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3 blur-[1px]"
            style={{ background: "#D4A017", opacity: 0.35 }}
          />
          <div className="relative rounded-2xl overflow-hidden border-2 border-white aspect-[4/3]">
            <ImagePlaceholder index={index} side={side} />
          </div>
        </div>
      </div>
      <div>
        <p
          className="text-[10px] font-medium uppercase tracking-widest mb-1"
          style={{ color: accentColor }}
        >
          {step.year}
        </p>
        <h4 className="text-sm font-medium text-foreground mb-1 leading-snug">
          {step.title}
        </h4>
        <p className="text-xs text-muted leading-relaxed">{step.body}</p>
      </div>
    </div>
  );

  // ── Desktop layout: 3-col grid with number bubble in center ─────────
  const TextBlock = (
    // Extra horizontal padding keeps text away from the snake line
    <div className={isEven ? "pl-3 pr-6" : "pr-3 pl-6"}>
      <p
        className="text-[10px] font-medium uppercase tracking-widest mb-1"
        style={{ color: accentColor }}
      >
        {step.year}
      </p>
      <h4 className="text-sm font-medium text-foreground mb-1 leading-snug">
        {step.title}
      </h4>
      <p className="text-xs text-muted leading-relaxed">{step.body}</p>
    </div>
  );

  const ImageBlock = (
    <div className="flex items-center justify-center">
      <div
        className={`relative w-full max-w-[148px] transition-transform duration-300 hover:rotate-0 hover:scale-105 ${step.rotate}`}
      >
        <div
          className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3 blur-[1px]"
          style={{ background: "#D4A017", opacity: 0.35 }}
        />
        <div className="relative rounded-2xl overflow-hidden border-2 border-white aspect-[4/3]">
          <ImagePlaceholder index={index} side={side} />
        </div>
      </div>
    </div>
  );

  const DesktopLayout = (
    // hidden below lg. Number bubble z-10 sits above SVG z-0
    <div className="hidden lg:grid grid-cols-[1fr_56px_1fr] items-center">
      {!isEven ? TextBlock : ImageBlock}

      {/* z-10 ensures bubble renders above the SVG (z-0) */}
      <div className="flex justify-center relative z-10">
        <div
          className="step-num-bubble w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white animate-[float_3s_ease-in-out_infinite]"
          style={{
            background: side === "boys" ? "#173B61" : "#B8860B",
            boxShadow:
              side === "boys"
                ? "0 0 0 8px #D0E4F7, 0 10px 25px rgba(0,0,0,.18)"
                : "0 0 0 8px #FEF3C7, 0 10px 25px rgba(0,0,0,.18)",
          }}
        >
          {index + 1}
        </div>
      </div>

      {!isEven ? ImageBlock : TextBlock}
    </div>
  );

  return (
    <div
      ref={ref}
      className="mb-12"
      style={{
        opacity: 0,
        transform: "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {MobileLayout}
      {DesktopLayout}
    </div>
  );
}

export default function AboutStory() {
  const boysColRef = useRef<HTMLDivElement>(null);
  const boysSvgRef = useRef<SVGSVGElement>(null);
  const girlsColRef = useRef<HTMLDivElement>(null);
  const girlsSvgRef = useRef<SVGSVGElement>(null);

  useSnake(boysColRef, boysSvgRef);
  useSnake(girlsColRef, girlsSvgRef);

  return (
    <section className="py-10">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-3">Our Story</h2>
            <p className="text-muted leading-7 max-w-md mx-auto">
              Two movements, one mission — rooted in faith, shaped by discipline,
              united in service.
            </p>
          </div>
        </FadeIn>

        {/* <FadeIn>
          <div
            className="
    relative
    mb-16
    text-center
    "
          >
            <span
              className="
      inline-flex
      items-center
      rounded-full
      bg-secondary/10
      px-4
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.2em]
      text-secondary
      "
            >
              Our Heritage
            </span>

            <h2
              className="
      mt-5
      text-4xl
      font-bold
      text-primary
      md:text-5xl
      "
            >
              Our Story
            </h2>

            <p
              className="
      mx-auto
      mt-4
      max-w-2xl
      text-muted
      leading-8
      "
            >
              Two movements, one mission — rooted in faith, shaped by
              discipline, united in service.
            </p>

            <div
              className="
      mx-auto
      mt-6
      h-1
      w-24
      rounded-full
      bg-secondary
      "
            />
          </div>
        </FadeIn> */}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-x-8">
          {/* ── Boys Column ── */}
          <div ref={boysColRef} className="relative">
            {/* SVG is z-0 so number bubbles (z-10) sit above it */}
            <svg
              ref={boysSvgRef}
              className="absolute inset-0 pointer-events-none overflow-visible hidden lg:block"
              style={{ zIndex: 0 }}
              aria-hidden="true"
            />

            <div
              className="flex items-center gap-3 mb-10 pb-4 border-b-2"
              style={{ borderColor: "#173B61" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "#FEF3C7" }}
              >
                ⚓
              </div>
              <div>
                <p className="text-base font-medium text-foreground">
                  Boys' Brigade
                </p>
                <p className="text-xs text-muted">
                  Founded 1883 · Glasgow, Scotland
                </p>
              </div>
            </div>

            {boysSteps.map((step, i) => (
              <StepRow key={i} step={step} index={i} side="boys" />
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-border" />

          {/* ── Girls Column ── */}
          <div ref={girlsColRef} className="relative mt-12 lg:mt-0">
            {/* ✅ FIX 2: same z-0 treatment */}
            <svg
              ref={girlsSvgRef}
              className="absolute inset-0 pointer-events-none overflow-visible hidden lg:block"
              style={{ zIndex: 0 }}
              aria-hidden="true"
            />

            <div
              className="flex items-center justify-end gap-3 mb-10 pb-4 border-b-2"
              style={{ borderColor: "#B8860B" }}
            >
              <div className="text-right">
                <p className="text-base font-medium text-foreground">
                  Girls' Brigade
                </p>
                <p className="text-xs text-muted">
                  Founded 1893 · Dublin, Ireland
                </p>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "#FEF3C7" }}
              >
                ✦
              </div>
            </div>

            {girlsSteps.map((step, i) => (
              <StepRow key={i} step={step} index={i} side="girls" />
            ))}
          </div>
        </div>

        {/* Mottos */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className="rounded-xl p-5 border"
            style={{ background: "#173B61", borderColor: "#FDE68A" }}
          >
            <p
              className="text-[10px] font-medium uppercase tracking-widest mb-1.5"
              style={{ color: "#ffffff" }}
            >
              Boys' Brigade motto
            </p>
            <p className="text-sm text-foreground italic text-white">
              "Sure and Stedfast" — Hebrews 6:19
            </p>
          </div>
          <div
            className="rounded-xl p-5 border text-right"
            style={{ background: "#FEFCE8", borderColor: "#FDE68A" }}
          >
            <p
              className="text-[10px] font-medium uppercase tracking-widest mb-1.5"
              style={{ color: "#92680B" }}
            >
              Girls' Brigade motto
            </p>
            <p className="text-sm text-foreground italic">
              "Seek, Serve and Follow Christ"
            </p>
          </div>
        </div>

        {/* Together strip */}
        <div className="mt-6 text-center p-6 border border-border rounded-xl">
          <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Today, the{" "}
            <strong className="font-medium text-foreground">
              5th &amp; 9th Surulere, Brigade Companies
            </strong>{" "}
            carries both legacies forward — raising a generation rooted in
            Christian values, leadership, discipline, and service.
          </p>
        </div>
      </Container>
    </section>
  );
}

// "use client";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import FadeIn from "../../layout/fade-in";
// import Container from "../../layout/container";

// const boysSteps = [
//   {
//     year: "4 October 1883",
//     title: "The First Company",
//     body: "William Alexander Smith opened Free College Church Mission, Glasgow with 35 boys — founding the world's first uniformed youth organisation.",
//     rotate: "rotate-2",
//   },
//   {
//     year: "The Founder's Vision",
//     title: "Sure and Stedfast",
//     body: "Smith's motto from Hebrews 6:19 paired military discipline with Christian faith. Object: to advance Christ's Kingdom through Reverence, Discipline, and Self-Respect.",
//     rotate: "-rotate-2",
//   },
//   {
//     year: "1890s onward",
//     title: "A Worldwide Movement",
//     body: "From one Glasgow company, BB swept the world — inspiring the Boy Scouts and Church Lads' Brigade. By 1910: 100,000 boys across 2,200 companies.",
//     rotate: "rotate-2",
//   },
//   {
//     year: "Today",
//     title: "750,000 in 60 Nations",
//     body: "Over 140 years on, Boys' Brigade equips boys and young men with faith, leadership, and character — across 60 countries worldwide.",
//     rotate: "-rotate-3",
//   },
// ];

// const girlsSteps = [
//   {
//     year: "6 October 1893",
//     title: "A Cold Evening in Dublin",
//     body: "Miss Margaret Lyttle warmed girls up with drill at Sandymount Presbyterian Church during singing practice — founding the very first girls-only Christian youth group.",
//     rotate: "-rotate-3",
//   },
//   {
//     year: "1900 – 1902",
//     title: "Three Sisters of Mission",
//     body: "Girls' Guildry rose in Scotland (1900), then Girls' Life Brigade in England (1902) — three nations, one purpose: Christ's Kingdom among girls and young women.",
//     rotate: "rotate-2",
//   },
//   {
//     year: "10 June 1965",
//     title: "One Organisation, One Crest",
//     body: "Three missions merged into one. Ireland's Cross, Scotland's Lamp, and England's Crown united into a single crest. June 10th became the International Day of Prayer.",
//     rotate: "rotate-3",
//   },
//   {
//     year: "Today",
//     title: "128,000 in 61 Nations",
//     body: "Girls' Brigade equips girls and young women to Seek, Serve and Follow Christ — in 61 countries, carrying Margaret Lyttle's 1893 vision into a new generation.",
//     rotate: "-rotate-2",
//   },
// ];

// function useSnake(
//   colRef: React.MutableRefObject<HTMLDivElement | null>,
//   svgRef: React.MutableRefObject<SVGSVGElement | null>
// ) {
//   useEffect(() => {
//     function buildSnake() {
//       const col = colRef.current;
//       const svg = svgRef.current;
//       if (!col || !svg) return;

//       const nums = Array.from(col.querySelectorAll<HTMLElement>(".step-num-bubble"));
//       if (nums.length < 2) return;

//       const colRect = col.getBoundingClientRect();
//       const pts = nums.map((n) => {
//         const r = n.getBoundingClientRect();
//         return {
//           x: (r.left + r.right) / 2 - colRect.left,
//           y: (r.top + r.bottom) / 2 - colRect.top,
//         };
//       });

//       const W = col.offsetWidth;
//       const H = col.offsetHeight;

//       svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
//       svg.setAttribute("width", String(W));
//       svg.setAttribute("height", String(H));

//     let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
// for (let i = 1; i < pts.length; i++) {
//   const p = pts[i - 1];
//   const c = pts[i];
//   const my = (p.y + c.y) / 2;

//   // Alternate LEFT / RIGHT to force a real S-curve
//   const dir = i % 2 === 1 ? 0.7 : -0.7;
//   const tension = 55; // increase for a wider curve, decrease to tighten

//   const cx1 = p.x + dir * tension;
//   const cx2 = c.x + dir * tension;

//   d += ` C ${cx1.toFixed(1)} ${my.toFixed(1)}, ${cx2.toFixed(1)} ${my.toFixed(1)}, ${c.x.toFixed(1)} ${c.y.toFixed(1)}`;
// }

//       while (svg.firstChild) svg.removeChild(svg.firstChild);

//       const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//       path.setAttribute("d", d);
//       path.setAttribute("fill", "none");
//       path.setAttribute("stroke", "#000");
//       path.setAttribute("stroke-width", "1");
//       path.setAttribute("stroke-linecap", "round");
//       svg.appendChild(path);

//       const len = path.getTotalLength();
//       path.setAttribute("stroke-dasharray", "8 6");
//       path.setAttribute("stroke-dashoffset", String(len));
//       path.style.transition = "none";

//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           path.style.transition = "stroke-dashoffset 2s ease";
//           path.setAttribute("stroke-dashoffset", "0");
//         });
//       });
//     }

//     const col = colRef.current;
//     if (!col) return;

//     let drawn = false;
//     const obs = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !drawn) {
//           drawn = true;
//           setTimeout(buildSnake, 200);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.15 }
//     );
//     obs.observe(col);

//     let resizeTimer: ReturnType<typeof setTimeout>;
//     const onResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(buildSnake, 150);
//     };
//     window.addEventListener("resize", onResize);

//     return () => {
//       obs.disconnect();
//       window.removeEventListener("resize", onResize);
//       clearTimeout(resizeTimer);
//     };
//   }, [colRef, svgRef]);
// }

// function ImagePlaceholder({ index, side }: { index: number; side: "boys" | "girls" }) {
//   const boysBgs = ["#1a1060", "#FEF9E7", "#FFFBEB", "#1a1060"];
//   const girlsBgs = ["#78350f", "#FFFBEB", "#FFFBEB", "#78350f"];
//   const bg = side === "boys" ? boysBgs[index] : girlsBgs[index];

//   return (
//     <svg viewBox="0 0 148 111" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//       <rect width="148" height="111" fill={bg} />
//     {side === "boys" && index === 0 && (
//   <foreignObject
//     x="15"
//     y="10"
//     width="118"
//     height="90"
//   >
//     <div className="w-full h-full flex items-center justify-center bg-white rounded-xl">
//       <Image
//         src="/images/bb-Logo.png"
//         alt="Boys Brigade"
//         width={80}
//         height={80}
//       />
//     </div>
//   </foreignObject>
//       )}
//       {side === "boys" && index === 1 && (
//         <>
//           <rect x="40" y="22" width="68" height="72" rx="6" fill="#B8860B" />
//           <rect x="40" y="22" width="34" height="72" rx="6" fill="#92680B" />
//           <line x1="74" y1="22" x2="74" y2="94" stroke="#D4A017" strokeWidth="1" />
//           <line x1="48" y1="42" x2="70" y2="42" stroke="#FEF3C7" strokeWidth="1.5" />
//           <line x1="48" y1="50" x2="70" y2="50" stroke="#FEF3C7" strokeWidth="1.5" />
//           <line x1="80" y1="42" x2="100" y2="42" stroke="#FDE68A" strokeWidth="1.5" />
//           <line x1="80" y1="50" x2="100" y2="50" stroke="#FDE68A" strokeWidth="1.5" />
//           <text x="74" y="14" textAnchor="middle" fill="#B8860B" fontSize="8" fontFamily="sans-serif">Sure and Stedfast</text>
//         </>
//       )}
//       {side === "boys" && index === 2 && (
//         <>
//           <circle cx="74" cy="58" r="34" fill="#B8860B" />
//           <ellipse cx="74" cy="58" rx="15" ry="34" fill="none" stroke="#FEF3C7" strokeWidth="1" />
//           <ellipse cx="74" cy="58" rx="34" ry="12" fill="none" stroke="#FEF3C7" strokeWidth="1" />
//           <line x1="40" y1="58" x2="108" y2="58" stroke="#FEF3C7" strokeWidth="1" />
//           <circle cx="54" cy="46" r="3" fill="#FBBF24" />
//           <circle cx="88" cy="42" r="3" fill="#FBBF24" />
//           <circle cx="96" cy="64" r="3" fill="#FBBF24" />
//           <text x="74" y="14" textAnchor="middle" fill="#B8860B" fontSize="9" fontFamily="sans-serif">60 Countries Today</text>
//         </>
//       )}
//       {side === "boys" && index === 3 && (
//         <>
//           <circle cx="74" cy="35" r="17" fill="#534AB7" />
//           <path d="M46 90 Q46 62 74 59 Q102 62 102 90Z" fill="#3C3489" />
//           <circle cx="62" cy="72" r="5" fill="#D4A017" />
//           <circle cx="74" cy="68" r="5" fill="#D4A017" />
//           <circle cx="86" cy="72" r="5" fill="#D4A017" />
//           <text x="74" y="104" textAnchor="middle" fill="#FDE68A" fontSize="9" fontFamily="sans-serif">750,000 Members</text>
//         </>
//       )}
//       {side === "girls" && index === 0 && (
//         <>
//           <circle cx="74" cy="48" r="24" fill="#D97706" />
//           <rect x="70" y="28" width="8" height="40" rx="2" fill="#FEF3C7" />
//           <rect x="54" y="44" width="40" height="8" rx="2" fill="#FEF3C7" />
//           <text x="74" y="94" textAnchor="middle" fill="#FDE68A" fontSize="9" fontFamily="sans-serif">Dublin · 1893</text>
//         </>
//       )}
//       {side === "girls" && index === 1 && (
//         <>
//           <rect x="8" y="26" width="38" height="58" rx="5" fill="#D97706" />
//           <rect x="55" y="26" width="38" height="58" rx="5" fill="#B8860B" />
//           <rect x="102" y="26" width="38" height="58" rx="5" fill="#92680B" />
//           <line x1="27" y1="36" x2="27" y2="74" stroke="#FEF3C7" strokeWidth="2" />
//           <line x1="12" y1="55" x2="42" y2="55" stroke="#FEF3C7" strokeWidth="2" />
//           <ellipse cx="74" cy="52" rx="8" ry="11" fill="#FBBF24" />
//           <rect x="70" y="63" width="8" height="5" rx="1" fill="#92680B" />
//           <path d="M108 40 L112 32 L116 40 L120 32 L124 40 L124 48 L108 48Z" fill="#FBBF24" />
//           <text x="74" y="98" textAnchor="middle" fill="#92680B" fontSize="8" fontFamily="sans-serif">Ireland · Scotland · England</text>
//         </>
//       )}
//       {side === "girls" && index === 2 && (
//         <>
//           <circle cx="74" cy="58" r="32" fill="#D97706" />
//           <rect x="70" y="34" width="8" height="44" rx="2" fill="#FEF3C7" />
//           <rect x="54" y="50" width="40" height="8" rx="2" fill="#FEF3C7" />
//           <path d="M62 34 L66 26 L70 34 L74 26 L78 34 L82 26 L86 34" fill="none" stroke="#FBBF24" strokeWidth="2.5" />
//           <ellipse cx="74" cy="76" rx="7" ry="9" fill="#FBBF24" />
//           <text x="74" y="104" textAnchor="middle" fill="#92680B" fontSize="8" fontFamily="sans-serif">United · 1965</text>
//         </>
//       )}
//       {side === "girls" && index === 3 && (
//         <>
//           <circle cx="74" cy="58" r="32" fill="#B8860B" />
//           <ellipse cx="74" cy="58" rx="14" ry="32" fill="none" stroke="#FEF3C7" strokeWidth="1" />
//           <ellipse cx="74" cy="58" rx="32" ry="11" fill="none" stroke="#FEF3C7" strokeWidth="1" />
//           <circle cx="55" cy="48" r="3" fill="#FBBF24" />
//           <circle cx="90" cy="44" r="3" fill="#FBBF24" />
//           <circle cx="94" cy="64" r="3" fill="#FBBF24" />
//           <circle cx="56" cy="68" r="3" fill="#FBBF24" />
//           <text x="74" y="104" textAnchor="middle" fill="#FDE68A" fontSize="8" fontFamily="sans-serif">128,000+ · 61 Countries</text>
//         </>
//       )}
//     </svg>
//   );
// }

// function StepRow({
//   step,
//   index,
//   side,
// }: {
//   step: { year: string; title: string; body: string; rotate: string };
//   index: number;
//   side: "boys" | "girls";
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const isEven = index % 2 === 1;

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             el.style.opacity = "1";
//             el.style.transform = "translateY(0)";
//           }, index * 80);
//           obs.unobserve(el);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [index]);

//   const accentColor = side === "boys" ? "#B8860B" : "#B8860B";

//   const TextBlock = (
//     <div className={isEven ? "pl-3" : "pr-3"}>
//       <p
//         className="text-[10px] font-medium uppercase tracking-widest mb-1"
//         style={{ color: accentColor }}
//       >
//         {step.year}
//       </p>
//       <h4 className="text-sm font-medium text-foreground mb-1 leading-snug">
//         {step.title}
//       </h4>
//       <p className="text-xs text-muted leading-relaxed">{step.body}</p>
//     </div>
//   );

//   const ImageBlock = (
//     <div className="flex items-center justify-center">
//       <div
//         className={`relative w-full max-w-[148px] transition-transform duration-300 hover:rotate-0 hover:scale-105 ${step.rotate}`}
//       >
//         <div
//           className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3 blur-[1px]"
//           style={{ background: "#D4A017", opacity: 0.35 }}
//         />
//         <div className="relative rounded-2xl overflow-hidden border-2 border-white aspect-[4/3]">
//           <ImagePlaceholder index={index} side={side} />
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div
//       ref={ref}
//        className="
//   grid
//   grid-cols-[1fr_44px_1fr]
//   items-center
//   mb-12

//   max-[640px]:grid-cols-1
//   max-[640px]:gap-5
//   "
//       style={{
//         opacity: 0,
//         transform: "translateY(16px)",
//         transition: "opacity 0.5s ease, transform 0.5s ease",
//       }}
//     >
//       {!isEven ? TextBlock : ImageBlock}
//      <div className="flex justify-center relative z-30">
//   <div
//     className="
//     step-num-bubble
//     w-11
//     h-11
//     rounded-full
//     flex
//     items-center
//     justify-center
//     text-sm
//     font-bold
//     text-white
//     shadow-xl
//     animate-[float_3s_ease-in-out_infinite]
//     "
//     style={{
//       background: "#B8860B",
//       boxShadow:
//         "0 0 0 8px #FEF3C7, 0 10px 25px rgba(0,0,0,.18)",
//     }}
//   >
//     {index + 1}
//   </div>
// </div>
//       {!isEven ? ImageBlock : TextBlock}
//     </div>
//   );
// }

// export default function AboutStory() {
//   const boysColRef = useRef<HTMLDivElement>(null);
//   const boysSvgRef = useRef<SVGSVGElement>(null);
//   const girlsColRef = useRef<HTMLDivElement>(null);
//   const girlsSvgRef = useRef<SVGSVGElement>(null);

//   useSnake(boysColRef, boysSvgRef);
//   useSnake(girlsColRef, girlsSvgRef);

//   return (
//     <section className="py-16">
//       <Container>
//         <FadeIn>
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-primary mb-3">Our Story</h2>
//             <p className="text-muted leading-7 max-w-md mx-auto">
//               Two movements, one mission — rooted in faith, shaped by discipline,
//               united in service.
//             </p>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-x-8">

//           {/* Boys Column */}
//           <div ref={boysColRef} className="relative">
//             <svg
//   ref={boysSvgRef}
//   className="
//   absolute
//   inset-0
//   pointer-events-none
//   overflow-visible
//   "
//   style={{
//     zIndex: 1,
//   }}
// />

//             <div
//               className="flex items-center gap-3 mb-10 pb-4 border-b-2"
//               style={{ borderColor: "#B8860B" }}
//             >
//               <div
//                 className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
//                 style={{ background: "#FEF3C7" }}
//               >
//                 ⚓
//               </div>
//               <div>
//                 <p className="text-base font-medium text-foreground">Boys' Brigade</p>
//                 <p className="text-xs text-muted">Founded 1883 · Glasgow, Scotland</p>
//               </div>
//             </div>

//             {boysSteps.map((step, i) => (
//               <StepRow key={i} step={step} index={i} side="boys" />
//             ))}
//           </div>

//           {/* Divider */}
//           <div className="hidden lg:block bg-border" />

//           {/* Girls Column */}
//           <div ref={girlsColRef} className="relative mt-12 lg:mt-0">

//             <svg
//   ref={girlsSvgRef}
//   className="
//   absolute
//   inset-0
//   pointer-events-none
//   overflow-visible
//   "
//   style={{
//     zIndex: 1,
//   }}
// />

//             <div
//               className="flex items-center justify-end gap-3 mb-10 pb-4 border-b-2"
//               style={{ borderColor: "#B8860B" }}
//             >
//               <div className="text-right">
//                 <p className="text-base font-medium text-foreground">Girls' Brigade</p>
//                 <p className="text-xs text-muted">Founded 1893 · Dublin, Ireland</p>
//               </div>
//               <div
//                 className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
//                 style={{ background: "#FEF3C7" }}
//               >
//                 ✦
//               </div>
//             </div>

//             {girlsSteps.map((step, i) => (
//               <StepRow key={i} step={step} index={i} side="girls" />
//             ))}
//           </div>
//         </div>

//         {/* Mottos */}
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div
//             className="rounded-xl p-5 border"
//             style={{ background: "#FEFCE8", borderColor: "#FDE68A" }}
//           >
//             <p
//               className="text-[10px] font-medium uppercase tracking-widest mb-1.5"
//               style={{ color: "#92680B" }}
//             >
//               Boys' Brigade motto
//             </p>
//             <p className="text-sm text-foreground italic">
//               "Sure and Stedfast" — Hebrews 6:19
//             </p>
//           </div>
//           <div
//             className="rounded-xl p-5 border text-right"
//             style={{ background: "#FEFCE8", borderColor: "#FDE68A" }}
//           >
//             <p
//               className="text-[10px] font-medium uppercase tracking-widest mb-1.5"
//               style={{ color: "#92680B" }}
//             >
//               Girls' Brigade motto
//             </p>
//             <p className="text-sm text-foreground italic">
//               "Seek, Serve and Follow Christ"
//             </p>
//           </div>
//         </div>

//         {/* Together strip */}
//         <div className="mt-6 text-center p-6 border border-border rounded-xl">
//           <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
//             Today, the{" "}
//             <strong className="font-medium text-foreground">
//               Boys &amp; Girls Brigade, Surulere Chapter
//             </strong>{" "}
//             carries both legacies forward — raising a generation rooted in
//             Christian values, leadership, discipline, and service.
//           </p>
//         </div>
//       </Container>
//     </section>
//   );
// }
