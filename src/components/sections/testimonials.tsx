// "use client";

// import Image from "next/image";
// import { useState, useRef, useEffect, useCallback } from "react";

// /* ─────────────────────────────────────────────
//    Types
// ───────────────────────────────────────────── */
// type TagProps = {
//   label: string;
//   color: string;
//   bg: string;
//   icon: string;
// };

// type Testimonial = {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   rating: number;
//   text: string;
//   manifestations: {
//     tags: TagProps[];
//     title: string;
//   };
// };

// /* - Data -*/
// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Amaka Okonkwo",
//     role: "Brigade Member · Lagos Chapter",
//     image: "/images/avatar2.jpg",
//     rating: 5,
//     text: "Joining the brigade changed my perspective on community. Having a clear vision board inside the app keeps me accountable to my goals and to the people I serve every day.",
//     manifestations: {
//       title: "Manifestations",
//       tags: [
//         { label: "Community", color: "#06BF37", bg: "#E6F8EA", icon: "/images/gb-logo.png" },
//         { label: "Physique", color: "#3C6BF6", bg: "#EEF1FF", icon: "/images/bb-Logo.png" },
//       ],
//     },
//   },
//   {
//     id: 2,
//     name: "Chukwuemeka Eze",
//     role: "Parent & Brigade Volunteer",
//     image: "/images/avatar2.jpg",
//     rating: 5,
//     text: "As a parent, I want to model intentional living for my children. This app gives me a space to set goals that align with my family values and track them with purpose.",
//     manifestations: {
//       title: "Manifestations",
//       tags: [
//         { label: "Family", color: "#06BF37", bg: "#E6F8EA", icon: "/icons/travel1.svg" },
//         { label: "Leadership", color: "#3C6BF6", bg: "#EEF1FF", icon: "/icons/career1.svg" },
//         { label: "Physique", color: "#800080", bg: "#F3E8F8", icon: "/icons/physique1.svg" },
//       ],
//     },
//   },
//   {
//     id: 3,
//     name: "Ngozi Adeleke",
//     role: "Youth Mentor · Brigade Lead",
//     image: "/images/avatar2.jpg",
//     rating: 5,
//     text: "Manifesti brought our brigade members closer to their dreams. The shared accountability it fosters is unlike anything we had before — our team is more motivated than ever.",
//     manifestations: {
//       title: "Manifestations",
//       tags: [
//         { label: "Leadership", color: "#06BF37", bg: "#E6F8EA", icon: "/icons/travel1.svg" },
//         { label: "Career", color: "#3C6BF6", bg: "#EEF1FF", icon: "/icons/career1.svg" },
//         { label: "Physique", color: "#800080", bg: "#F3E8F8", icon: "/icons/physique1.svg" },
//       ],
//     },
//   },
//   {
//     id: 4,
//     name: "Tunde Fashola",
//     role: "Community Organiser",
//     image: "/images/avatar2.jpg",
//     rating: 5,
//     text: "I can literally see my community's future on my screen. The vision boards keep our brigade grounded in purpose and remind us daily of the impact we are building together.",
//     manifestations: {
//       title: "Manifestations",
//       tags: [
//         { label: "Impact", color: "#06BF37", bg: "#E6F8EA", icon: "/icons/travel1.svg" },
//         { label: "Career", color: "#3C6BF6", bg: "#EEF1FF", icon: "/icons/career1.svg" },
//       ],
//     },
//   },
//   {
//     id: 5,
//     name: "Ifeoma Nwosu",
//     role: "Wellness Coach · Brigade Member",
//     image: "/images/avatar2.jpg",
//     rating: 5,
//     text: "I use this with my wellness clients and brigade groups alike. Seeing a future version of yourself makes the hard days easier — it is the daily nudge everyone needs.",
//     manifestations: {
//       title: "Manifestations",
//       tags: [
//         { label: "Health", color: "#06BF37", bg: "#E6F8EA", icon: "/icons/travel1.svg" },
//         { label: "Physique", color: "#800080", bg: "#F3E8F8", icon: "/icons/physique1.svg" },
//       ],
//     },
//   },
//   {
//     id: 6,
//     name: "Bello Abubakar",
//     role: "Entrepreneur & Brigade Patron",
//     image: "/images/avatar2.jpg",
//     rating: 5,
//     text: "Every entrepreneur needs a system for clarity. Manifesti gives my team and I a visual anchor for our business goals — it is part of our weekly brigade check-ins now.",
//     manifestations: {
//       title: "Manifestations",
//       tags: [
//         { label: "Business", color: "#3C6BF6", bg: "#EEF1FF", icon: "/icons/career1.svg" },
//         { label: "Travel", color: "#06BF37", bg: "#E6F8EA", icon: "/icons/travel1.svg" },
//       ],
//     },
//   },
//   {
//     id: 7,
//     name: "Chidinma Okafor",
//     role: "Student · Brigade Youth Wing",
//     image: "/images/avatar2.jpg",
//     rating: 5,
//     text: "I joined the brigade as a student with no clear direction. Manifesti helped me map out my academic and life goals visually — I feel confident and driven for the first time.",
//     manifestations: {
//       title: "Manifestations",
//       tags: [
//         { label: "Education", color: "#3C6BF6", bg: "#EEF1FF", icon: "/icons/career1.svg" },
//         { label: "Health", color: "#06BF37", bg: "#E6F8EA", icon: "/icons/travel1.svg" },
//       ],
//     },
//   },
// ];

// /* ─────────────────────────────────────────────
//    Helpers
// ───────────────────────────────────────────── */
// const CARD_WIDTH_MOBILE = 260;   // px
// const CARD_WIDTH_DESKTOP = 570;  // px
// const CARD_GAP_MOBILE = 12;      // gap-3
// const CARD_GAP_DESKTOP = 24;     // gap-6

// function getCardWidth(isMobile: boolean) {
//   return isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
// }
// function getGap(isMobile: boolean) {
//   return isMobile ? CARD_GAP_MOBILE : CARD_GAP_DESKTOP;
// }

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState<number>(1); // 0-based
//   const [isMobile, setIsMobile] = useState<boolean>(false);
//   const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
//   const trackRef = useRef<HTMLDivElement>(null);

//   /* detect viewport width */
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   /* ── translate the track so the active card is centred ──
//      The track starts at x=0 (left edge of viewport).
//      We want the active card's centre to align with the viewport centre.

//      offset = viewportWidth/2 − (activeIndex × (cardWidth + gap) + cardWidth/2)
//   */
//   const getTranslateX = useCallback(() => {
//     const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
//     const cardW = getCardWidth(isMobile);
//     const gap = getGap(isMobile);
//     const cardCentre = activeIndex * (cardW + gap) + cardW / 2;
//     return vw / 2 - cardCentre;
//   }, [activeIndex, isMobile]);

//   /* apply transform whenever activeIndex or viewport changes */
//   useEffect(() => {
//     if (trackRef.current) {
//       trackRef.current.style.transform = `translateX(${getTranslateX()}px)`;
//     }
//   }, [getTranslateX]);

//   /* auto-advance */
//   useEffect(() => {
//     const start = () => {
//       autoScrollInterval.current = setInterval(() => {
//         setActiveIndex((prev) => (prev + 1) % testimonials.length);
//       }, 3000);
//     };
//     start();
//     return () => { if (autoScrollInterval.current) clearInterval(autoScrollInterval.current); };
//   }, []);

//   const goTo = (index: number) => {
//     if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
//     setActiveIndex(index);
//     setTimeout(() => {
//       if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
//       autoScrollInterval.current = setInterval(() => {
//         setActiveIndex((prev) => (prev + 1) % testimonials.length);
//       }, 3000);
//     }, 5000);
//   };

//   return (
//     /*
//       overflow-x-hidden on section — kills any horizontal scroll at page level.
//       No overflow-x-scroll anywhere; the carousel is driven by CSS transform only.
//     */
//     <section className="flex flex-col items-center py-8 md:py-16 gap-8 w-full max-w-360 mx-auto min-h-125 md:min-h-157.5 overflow-x-hidden">

//       {/* ── Header ── */}
//       <div className="text-center mb-4 px-4 w-full">
//         <h2 className="font-semibold text-2xl md:text-4xl leading-[113%] tracking-[-0.02em] text-base-dark">
//           What our members are saying
//         </h2>
//         <p className="mt-2 mx-auto max-w-[420px] text-base-secondary tracking-[-0.5px] leading-[120%]">
//           We&#39;re rolling out soon. Join the waitlist to get early access and exclusive perks.
//         </p>

//         {/*
//           Avatar strip:
//           - Large screens: justify-center so avatars are centred (fixes the off-centre bug).
//           - Small screens: overflow-x hidden + flex-wrap fallback, no scrollbar.
//           - no-scrollbar utility class hides any residual scrollbar on mobile.
//         */}
//         <div className="flex flex-wrap justify-center gap-4 mt-10 px-4 py-2">
//           {testimonials.map((testimonial, idx) => (
//             <div
//               key={testimonial.id}
//               className={`shrink-0 transition-all duration-300 cursor-pointer ${
//                 activeIndex === idx ? "scale-110" : "scale-100 opacity-70"
//               }`}
//               onClick={() => goTo(idx)}
//             >
//               <Image
//                 src={testimonial.image}
//                 width={64}
//                 height={64}
//                 alt={testimonial.name}
//                 className="object-cover rounded-full w-12 h-12 md:w-16 md:h-16 border-2 transition-all"
//                 style={{
//                   borderColor: activeIndex === idx ? "#173B61" : "transparent",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Carousel + dots ── */}
//       <div className="w-full flex flex-col items-center gap-6">
//         {/*
//           Viewport window — overflow-x-hidden so the off-screen cards are clipped
//           but the track itself is wider than the screen (no scrollbar).
//         */}
//         <div className="w-full overflow-x-hidden relative h-100 md:h-120">
//           {/*
//             Track — absolutely positioned, full natural width, no overflow.
//             transform: translateX(...) slides it; transition gives the animation.
//             Cards run edge-to-edge: no padding on the track, card widths are
//             fixed so the first card starts right at x=0 (left edge of screen).
//           */}
//           <div
//             ref={trackRef}
//             className="absolute top-0 left-0 flex items-center h-full gap-3 md:gap-6"
//             style={{
//               transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
//               willChange: "transform",
//             }}
//           >
//             {testimonials.map((testimonial, idx) => {
//               const isActive = activeIndex === idx;

//               return (
//                 <div
//                   key={testimonial.id}
//                   className={`
//                     flex flex-col items-start
//                     bg-linear-to-br from-[#F9F9F9] to-white
//                     border border-primary
//                     rounded-2xl
//                     transition-all duration-500 ease-in-out
//                     cursor-pointer
//                     shrink-0
//                     ${
//                       isActive
//                         ? "p-4 md:p-[26.46px] gap-3 md:gap-[35.28px] scale-100 shadow-lg z-10"
//                         : "p-3 md:p-[20.89px] gap-2 md:gap-[27.85px] scale-90 md:scale-95 opacity-70 md:opacity-85 z-0 mt-6 md:mt-8"
//                     }
//                   `}
//                   style={{
//                     width: isActive
//                       ? `${CARD_WIDTH_MOBILE}px`
//                       : `${CARD_WIDTH_MOBILE - 40}px`,
//                     // desktop overrides via inline style to avoid JIT purging
//                     ...(typeof window !== "undefined" && window.innerWidth >= 768
//                       ? {
//                           width: isActive
//                             ? `${CARD_WIDTH_DESKTOP}px`
//                             : `${CARD_WIDTH_DESKTOP - 120}px`,
//                         }
//                       : {}),
//                     height: isActive ? "360px" : "340px",
//                     transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                   }}
//                   onClick={() => goTo(idx)}
//                 >
//                   {/* Manifestations header */}
//                   <div className="w-full">
//                     <div className="flex items-center gap-2 mb-3 md:mb-4">
//                       {/* <div className="relative w-5 h-5 md:w-6 md:h-6 shrink-0">
//                         <Image
//                           src="/icons/star-purple.svg"
//                           alt=""
//                           width={isActive ? 20 : 16}
//                           height={isActive ? 20 : 16}
//                           className="absolute top-0 left-0"
//                         />
//                         <Image
//                           src="/icons/star-purple.svg"
//                           alt=""
//                           width={isActive ? 10 : 8}
//                           height={isActive ? 10 : 8}
//                           className="absolute -right-1 -top-1 opacity-95"
//                         />
//                       </div> */}
//                       {/* <span
//                         className={`font-medium duration-700 transition-all text-base-dark ${
//                           isActive ? "text-lg md:text-base" : "text-[10px] md:text-sm"
//                         }`}
//                       >
//                         Manifestations
//                       </span> */}
//                     </div>

//                     <div className="flex flex-wrap gap-1.5 md:gap-2">
//                       {testimonial.manifestations.tags.map((tag, tagIndex) => (
//                         <Tag key={tagIndex} {...tag} isActive={isActive} />
//                       ))}
//                     </div>
//                   </div>

//                   {/* Quote card */}
//                   <div className="w-full">
//                     <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4">
//                       <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
//                         <Image
//                           src={testimonial.image}
//                           width={isActive ? 36 : 32}
//                           height={isActive ? 36 : 32}
//                           className="rounded-full object-cover shrink-0"
//                           alt={testimonial.name}
//                         />
//                         <div className="min-w-0">
//                           <h3
//                             className={`font-semibold text-base-dark truncate ${
//                               isActive ? "text-sm md:text-base" : "text-[10px] md:text-sm"
//                             }`}
//                           >
//                             {testimonial.name}
//                           </h3>
//                           <p
//                             className={`text-base-secondary truncate ${
//                               isActive ? "text-xs md:text-sm" : "text-[8px] md:text-xs"
//                             }`}
//                           >
//                             {testimonial.role}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex mb-2 md:mb-3">
//                         {Array.from({ length: testimonial.rating }).map((_, i) => (
//                           <span
//                             key={i}
//                             className={`text-accent-yellow ${
//                               isActive ? "text-sm md:text-xl" : "text-xs md:text-lg"
//                             }`}
//                           >
//                             ★
//                           </span>
//                         ))}
//                       </div>

//                       <p
//                         className={`text-base-secondary leading-[140%] md:leading-[150%] ${
//                           isActive
//                             ? "text-[10px] md:text-sm line-clamp-4 md:line-clamp-5"
//                             : "text-[9px] md:text-xs line-clamp-3 md:line-clamp-4"
//                         }`}
//                       >
//                         {testimonial.text}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Dot indicators — pill morphs on active */}
//         <div className="flex items-center gap-2 justify-center">
//           {testimonials.map((_, idx) => {
//             const isActive = activeIndex === idx;
//             return (
//               <button
//                 key={idx}
//                 onClick={() => goTo(idx)}
//                 className={`rounded-full transition-all duration-300 cursor-pointer ${
//                   isActive
//                     ? "w-6 h-3 bg-primary"
//                     : "w-2.5 h-2.5 bg-primary-light hover:bg-primary-light"
//                 }`}
//                 aria-label={`Go to testimonial ${idx + 1}`}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─────────────────────────────────────────────
//    Tag sub-component
// ───────────────────────────────────────────── */
// function Tag({
//   label,
//   color,
//   bg,
//   icon,
//   isActive = true,
// }: TagProps & { isActive?: boolean }) {
//   return (
//     <div
//       className={`flex items-center gap-1 md:gap-1.5 rounded-full font-medium whitespace-nowrap ${
//         isActive
//           ? "px-2 md:px-4 py-1 md:py-2 text-[9px] md:text-sm"
//           : "px-1.5 md:px-3 py-0.5 md:py-1.5 text-[8px] md:text-xs"
//       }`}
//       style={{ backgroundColor: bg, color }}
//     >
//       <Image
//         src={icon}
//         width={isActive ? 12 : 10}
//         height={isActive ? 12 : 10}
//         alt={label}
//         className="shrink-0"
//       />
//       {label}
//     </div>
//   );
// }





"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type TagProps = {
  label: string;
  color: string;
  bg: string;
  icon: string;
};

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  manifestations: {
    tags: TagProps[];
    title: string;
  };
};

/* - Data -*/
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amaka Okonkwo",
    role: "Brigade Member · Lagos Chapter",
    image: "/images/avatar2.jpg",
    rating: 5,
    text: "Joining the brigade changed my perspective on community. Having a clear vision board inside the app keeps me accountable to my goals and to the people I serve every day.",
    manifestations: {
      title: "Manifestations",
      tags: [
        { label: "Community", color: "#06BF37", bg: "#E6F8EA", icon: "/images/gb-logo.png" },
        { label: "Physique", color: "#3C6BF6", bg: "#EEF1FF", icon: "/images/bb-Logo.png" },
      ],
    },
  },
  {
    id: 2,
    name: "Chukwuemeka Eze",
    role: "Parent & Brigade Volunteer",
    image: "/images/avatar2.jpg",
    rating: 5,
    text: "As a parent, I want to model intentional living for my children. This app gives me a space to set goals that align with my family values and track them with purpose.",
    manifestations: {
      title: "Manifestations",
      tags: [
        { label: "Family", color: "#06BF37", bg: "#E6F8EA", icon: "/images/gb-logo.png" },
        { label: "Leadership", color: "#3C6BF6", bg: "#EEF1FF", icon: "/images/bb-Logo.png" },
        { label: "Physique", color: "#800080", bg: "#F3E8F8", icon: "/images/bb-Logo.png" },
      ],
    },
  },
  {
    id: 3,
    name: "Ngozi Adeleke",
    role: "Youth Mentor · Brigade Lead",
    image: "/images/avatar2.jpg",
    rating: 5,
    text: "Manifesti brought our brigade members closer to their dreams. The shared accountability it fosters is unlike anything we had before — our team is more motivated than ever.",
    manifestations: {
      title: "Manifestations",
      tags: [
        { label: "Leadership", color: "#06BF37", bg: "#E6F8EA", icon: "/images/bb-Logo.png" },
        { label: "Career", color: "#3C6BF6", bg: "#EEF1FF", icon: "/images/bb-Logo.png" },
        { label: "Physique", color: "#800080", bg: "#F3E8F8", icon: "/images/bb-Logo.png" },
      ],
    },
  },
  {
    id: 4,
    name: "Tunde Fashola",
    role: "Community Organiser",
    image: "/images/avatar2.jpg",
    rating: 5,
    text: "I can literally see my community's future on my screen. The vision boards keep our brigade grounded in purpose and remind us daily of the impact we are building together.",
    manifestations: {
      title: "Manifestations",
      tags: [
        { label: "Impact", color: "#06BF37", bg: "#E6F8EA", icon: "/images/gb-logo.png" },
        { label: "Career", color: "#3C6BF6", bg: "#EEF1FF", icon: "/images/bb-Logo.png" },
      ],
    },
  },
  {
    id: 5,
    name: "Ifeoma Nwosu",
    role: "Wellness Coach · Brigade Member",
    image: "/images/avatar2.jpg",
    rating: 5,
    text: "I use this with my wellness clients and brigade groups alike. Seeing a future version of yourself makes the hard days easier — it is the daily nudge everyone needs.",
    manifestations: {
      title: "Manifestations",
      tags: [
        { label: "Health", color: "#06BF37", bg: "#E6F8EA", icon: "/images/gb-logo.png" },
        { label: "Physique", color: "#800080", bg: "#F3E8F8", icon: "/images/bb-Logo.png" },
      ],
    },
  },
  {
    id: 6,
    name: "Bello Abubakar",
    role: "Entrepreneur & Brigade Patron",
    image: "/images/avatar2.jpg",
    rating: 5,
    text: "Every entrepreneur needs a system for clarity. Manifesti gives my team and I a visual anchor for our business goals — it is part of our weekly brigade check-ins now.",
    manifestations: {
      title: "Manifestations",
      tags: [
        { label: "Business", color: "#3C6BF6", bg: "#EEF1FF", icon: "/images/bb-Logo.png" },
        { label: "Travel", color: "#06BF37", bg: "#E6F8EA", icon: "/images/gb-logo.png" },
      ],
    },
  },
  {
    id: 7,
    name: "Chidinma Okafor",
    role: "Student · Brigade Youth Wing",
    image: "/images/avatar2.jpg",
    rating: 5,
    text: "I joined the brigade as a student with no clear direction. Manifesti helped me map out my academic and life goals visually — I feel confident and driven for the first time.",
    manifestations: {
      title: "Manifestations",
      tags: [
        { label: "Education", color: "#3C6BF6", bg: "#EEF1FF", icon: "/images/bb-Logo.png" },
        { label: "Health", color: "#06BF37", bg: "#E6F8EA", icon: "/images/gb-logo.png" },
      ],
    },
  },
];

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
const CARD_WIDTH_MOBILE = 260;   // px
const CARD_WIDTH_DESKTOP = 570;  // px
const CARD_GAP_MOBILE = 12;      // gap-3
const CARD_GAP_DESKTOP = 24;     // gap-6

function getCardWidth(isMobile: boolean) {
  return isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
}
function getGap(isMobile: boolean) {
  return isMobile ? CARD_GAP_MOBILE : CARD_GAP_DESKTOP;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // 0-based
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  /* detect viewport width and set mounted flag */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── translate the track so the active card is centred ──
     The track starts at x=0 (left edge of viewport).
     We want the active card's centre to align with the viewport centre.

     offset = viewportWidth/2 − (activeIndex × (cardWidth + gap) + cardWidth/2)
  */
  const getTranslateX = useCallback(() => {
    const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
    const cardW = getCardWidth(isMobile);
    const gap = getGap(isMobile);
    const cardCentre = activeIndex * (cardW + gap) + cardW / 2;
    return vw / 2 - cardCentre;
  }, [activeIndex, isMobile]);

  /* apply transform whenever activeIndex or viewport changes */
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${getTranslateX()}px)`;
    }
  }, [getTranslateX]);

  /* auto-advance */
  useEffect(() => {
    const start = () => {
      autoScrollInterval.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    };
    start();
    return () => { if (autoScrollInterval.current) clearInterval(autoScrollInterval.current); };
  }, []);

  const goTo = (index: number) => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    setActiveIndex(index);
    setTimeout(() => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }, 5000);
  };

  return (
    /*
      overflow-x-hidden on section — kills any horizontal scroll at page level.
      No overflow-x-scroll anywhere; the carousel is driven by CSS transform only.
    */
    <section className="flex flex-col items-center py-8 md:py-16 gap-8 w-full max-w-360 mx-auto min-h-125 md:min-h-157.5 overflow-x-hidden">

      {/* ── Header ── */}
      <div className="text-center mb-4 px-4 w-full">
        <h2 className="font-semibold text-2xl md:text-4xl leading-[113%] tracking-[-0.02em] text-base-dark">
          What our members are saying
        </h2>
        <p className="mt-2 mx-auto max-w-[420px] text-base-secondary tracking-[-0.5px] leading-[120%]">
          We&#39;re rolling out soon. Join the waitlist to get early access and exclusive perks.
        </p>

        {/*
          Avatar strip:
          - Large screens: justify-center so avatars are centred (fixes the off-centre bug).
          - Small screens: overflow-x hidden + flex-wrap fallback, no scrollbar.
          - no-scrollbar utility class hides any residual scrollbar on mobile.
        */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 px-4 py-2">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`shrink-0 transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? "scale-110" : "scale-100 opacity-70"
              }`}
              onClick={() => goTo(idx)}
            >
              <Image
                src={testimonial.image}
                width={64}
                height={64}
                alt={testimonial.name}
                className="object-cover rounded-full w-12 h-12 md:w-16 md:h-16 border-2 transition-all"
                style={{
                  borderColor: activeIndex === idx ? "#173B61" : "transparent",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Carousel + dots ── */}
      <div className="w-full flex flex-col items-center gap-6">
        {/*
          Viewport window — overflow-x-hidden so the off-screen cards are clipped
          but the track itself is wider than the screen (no scrollbar).
        */}
        <div className="w-full overflow-x-hidden relative h-100 md:h-120">
          {/*
            Track — absolutely positioned, full natural width, no overflow.
            transform: translateX(...) slides it; transition gives the animation.
            Cards run edge-to-edge: no padding on the track, card widths are
            fixed so the first card starts right at x=0 (left edge of screen).
          */}
          <div
            ref={trackRef}
            className="absolute top-0 left-0 flex items-center h-full gap-3 md:gap-6"
            style={{
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform",
            }}
          >
            {testimonials.map((testimonial, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={testimonial.id}
                  className={`
                    flex flex-col items-start
                    bg-linear-to-br from-[#F9F9F9] to-white
                    border border-primary
                    rounded-2xl
                    transition-all duration-500 ease-in-out
                    cursor-pointer
                    shrink-0
                    ${
                      isActive
                        ? "p-4 md:p-[26.46px] gap-3 md:gap-[35.28px] scale-100 shadow-lg z-10"
                        : "p-3 md:p-[20.89px] gap-2 md:gap-[27.85px] scale-90 md:scale-95 opacity-70 md:opacity-85 z-0 mt-6 md:mt-8"
                    }
                  `}
                  style={{
                    width: isActive
                      ? `${CARD_WIDTH_MOBILE}px`
                      : `${CARD_WIDTH_MOBILE - 40}px`,
                    // desktop overrides only applied after hydration to prevent mismatch
                    ...(mounted && !isMobile
                      ? {
                          width: isActive
                            ? `${CARD_WIDTH_DESKTOP}px`
                            : `${CARD_WIDTH_DESKTOP - 120}px`,
                        }
                      : {}),
                    height: isActive ? "360px" : "340px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onClick={() => goTo(idx)}
                >
                  {/* Manifestations header */}
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      {/* <div className="relative w-5 h-5 md:w-6 md:h-6 shrink-0">
                        <Image
                          src="/images/bb-Logo.png"
                          alt=""
                          width={isActive ? 20 : 16}
                          height={isActive ? 20 : 16}
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src="/images/bb-Logo.png"
                          alt=""
                          width={isActive ? 10 : 8}
                          height={isActive ? 10 : 8}
                          className="absolute -right-1 -top-1 opacity-95"
                        />
                      </div> */}
                      {/* <span
                        className={`font-medium duration-700 transition-all text-base-dark ${
                          isActive ? "text-lg md:text-base" : "text-[10px] md:text-sm"
                        }`}
                      >
                        Manifestations
                      </span> */}
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {testimonial.manifestations.tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex} {...tag} isActive={isActive} />
                      ))}
                    </div>
                  </div>

                  {/* Quote card */}
                  <div className="w-full">
                    <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <Image
                          src={testimonial.image}
                          width={isActive ? 36 : 32}
                          height={isActive ? 36 : 32}
                          className="rounded-full object-cover shrink-0"
                          alt={testimonial.name}
                        />
                        <div className="min-w-0">
                          <h3
                            className={`font-semibold text-base-dark truncate ${
                              isActive ? "text-sm md:text-base" : "text-[10px] md:text-sm"
                            }`}
                          >
                            {testimonial.name}
                          </h3>
                          <p
                            className={`text-base-secondary truncate ${
                              isActive ? "text-xs md:text-sm" : "text-[8px] md:text-xs"
                            }`}
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex mb-2 md:mb-3">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span
                            key={i}
                            className={`text-accent-yellow ${
                              isActive ? "text-sm md:text-xl" : "text-xs md:text-lg"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <p
                        className={`text-base-secondary leading-[140%] md:leading-[150%] ${
                          isActive
                            ? "text-[10px] md:text-sm line-clamp-4 md:line-clamp-5"
                            : "text-[9px] md:text-xs line-clamp-3 md:line-clamp-4"
                        }`}
                      >
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators — pill morphs on active */}
        <div className="flex items-center gap-2 justify-center">
          {testimonials.map((_, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-6 h-3 bg-primary"
                    : "w-2.5 h-2.5 bg-primary-light hover:bg-primary-light"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Tag sub-component
───────────────────────────────────────────── */
function Tag({
  label,
  color,
  bg,
  icon,
  isActive = true,
}: TagProps & { isActive?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1 md:gap-1.5 rounded-full font-medium whitespace-nowrap ${
        isActive
          ? "px-2 md:px-4 py-1 md:py-2 text-[9px] md:text-sm"
          : "px-1.5 md:px-3 py-0.5 md:py-1.5 text-[8px] md:text-xs"
      }`}
      style={{ backgroundColor: bg, color }}
    >
      <Image
        src={icon}
        width={isActive ? 12 : 10}
        height={isActive ? 12 : 10}
        alt={label}
        className="shrink-0"
      />
      {label}
    </div>
  );
}
