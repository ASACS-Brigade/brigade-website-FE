"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  ChevronRight,
  Clock3,
  Images,
} from "lucide-react";

import Container from "../../../layout/container";

interface ParadeYearsProps {
  activeYear: string;
  onYearChange: (year: string) => void;
}

const paradeYears = [
  {
    year: "2026",
    status: "coming",
    title: "Parade Season",
    description:
      "Preparations have begun for another remarkable parade season.",
    cover: "/gallery/parade-cover.jpg",
    photos: 0,
  },
  {
    year: "2025",
    status: "available",
    title: "Inspection & Parade Night",
    description:
      "Inspection parade, ceremonial march, awards and presentation.",
    cover: "/gallery/parade/1.jpg",
    photos: 48,
  },
  {
    year: "2024",
    status: "available",
    title: "Founder's Day Parade",
    description:
      "Celebrating our heritage through precision and discipline.",
    cover: "/gallery/parade/2.jpg",
    photos: 37,
  },
  {
    year: "2023",
    status: "available",
    title: "Church Anniversary Parade",
    description:
      "A memorable display of service and excellence.",
    cover: "/gallery/parade/3.jpg",
    photos: 31,
  },
];

export default function ParadeYears({
  activeYear,
  onYearChange,
}: ParadeYearsProps) {
  const selected =
    paradeYears.find(
      (item) => item.year === activeYear
    ) ?? paradeYears[0];

  return (
    <section
      id="years"
      className="py-24 bg-background"
    >
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="max-w-3xl"
        >
          <span
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-secondary/10
            px-4
            py-2
            text-secondary
            text-sm
            font-medium
            "
          >
            <CalendarDays size={18} />

            Parade Archive
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-black
            text-primary
            "
          >
            Journey Through Every Parade Year
          </h2>

          <p
            className="
            mt-5
            text-muted
            text-lg
            leading-8
            "
          >
            Browse every parade season and
            relive the memories that shaped
            our Brigade.
          </p>
        </motion.div>

        <div
          className="
          mt-16

          grid

          gap-8

          lg:grid-cols-[330px_1fr]
          "
        >
          {/* LEFT */}

          <div className="space-y-5">
            {paradeYears.map((year) => {
              const active =
                activeYear === year.year;

              return (
                <motion.button
                  key={year.year}
                  whileHover={{
                    x: 8,
                  }}
                  whileTap={{
                    scale: .98,
                  }}
                  onClick={() =>
                    onYearChange(year.year)
                  }
                  className={`
                    w-full
                    rounded-3xl
                    border
                    p-6
                    text-left
                    transition-all

                    ${
                      active
                        ? "bg-primary border-secondary text-white shadow-2xl"
                        : "bg-card border-border hover:border-secondary"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="text-3xl font-black">
                        {year.year}
                      </h3>

                      <p
                        className={`
                        mt-2
                        text-sm

                        ${
                          active
                            ? "text-white/80"
                            : "text-muted"
                        }
                        `}
                      >
                        {year.title}
                      </p>

                    </div>

                    <ChevronRight
                      className={`
                        transition-all

                        ${
                          active
                            ? "rotate-90"
                            : ""
                        }
                      `}
                    />

                  </div>

                  <div
                    className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    "
                  >
                    {year.status ===
                    "coming" ? (
                      <>
                        <Clock3
                          size={18}
                          className="text-secondary"
                        />

                        <span className="text-sm">
                          Coming Soon
                        </span>
                      </>
                    ) : (
                      <>
                        <Images
                          size={18}
                          className="text-secondary"
                        />

                        <span className="text-sm">
                          {year.photos} Photos
                        </span>
                      </>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT PANEL */}

          <motion.div
            key={selected.year}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .4,
            }}
            className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-primary
            min-h-[580px]
            "
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${selected.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-primary
              via-primary/80
              to-primary/30
              "
            />

            <div
              className="
              relative
              z-10

              flex

              h-full

              flex-col

              justify-end

              p-10
              md:p-16
              "
            >
              {selected.status ===
                "coming" && (
                <span
                  className="
                  mb-5
                  inline-flex
                  w-fit
                  rounded-full
                  bg-secondary
                  px-5
                  py-2
                  text-white
                  "
                >
                  Coming Soon
                </span>
              )}

              <h2
                className="
                text-6xl
                font-black
                text-white
                "
              >
                {selected.year}
              </h2>

              <h3
                className="
                mt-3
                text-3xl
                font-bold
                text-secondary
                "
              >
                {selected.title}
              </h3>

              <p
                className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-white/80
                "
              >
                {selected.description}
              </p>

              {selected.status ===
              "coming" ? (
                <button
                  disabled
                  className="
                  mt-10

                  w-fit

                  cursor-not-allowed

                  rounded-xl

                  border

                  border-white/20

                  bg-white/10

                  px-8

                  py-4

                  font-semibold

                  text-white/60
                  "
                >
                  Coming Soon
                </button>
              ) : (
                <a
                  href="#gallery"
                  className="
                  mt-10

                  inline-flex

                  w-fit

                  items-center

                  rounded-xl

                  bg-secondary

                  px-8

                  py-4

                  font-semibold

                  text-white

                  transition

                  hover:scale-105
                  "
                >
                  Explore {selected.year}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}





// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import {
//   CalendarDays,
//   ChevronRight,
//   Clock3,
//   Images,
// } from "lucide-react";

// import Container from "../../../layout/container";

// const paradeYears = [
//   {
//     year: "2026",
//     status: "coming",
//     title: "Parade Season",
//     description:
//       "Preparations have begun for another remarkable parade season. Stay tuned for inspections, competitions and unforgettable memories.",
//     cover: "/gallery/parade-cover.jpg",
//     photos: 0,
//   },
//   {
//     year: "2025",
//     status: "available",
//     title: "Inspection & Parade Night",
//     description:
//       "Inspection parade, ceremonial march, awards and presentation.",
//     cover: "/gallery/parade/1.jpg",
//     photos: 48,
//   },
//   {
//     year: "2024",
//     status: "available",
//     title: "Founder's Day Parade",
//     description:
//       "Celebrating our heritage through precision and discipline.",
//     cover: "/gallery/parade/2.jpg",
//     photos: 37,
//   },
//   {
//     year: "2023",
//     status: "available",
//     title: "Church Anniversary Parade",
//     description:
//       "A memorable display of service and excellence.",
//     cover: "/gallery/parade/3.jpg",
//     photos: 31,
//   },
// ];

// export default function ParadeYears() {
//   const [active, setActive] = useState(0);

//   const selected = paradeYears[active];

//   return (
//     <section
//       id="years"
//       className="py-28 bg-background overflow-hidden"
//     >
//       <Container>
//         {/* Heading */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           className="max-w-3xl"
//         >
//           <span
//             className="
//             inline-flex
//             items-center
//             gap-2
//             rounded-full
//             bg-secondary/10
//             px-4
//             py-2
//             text-sm
//             font-medium
//             text-secondary
//             "
//           >
//             <CalendarDays size={18} />

//             Parade Archive
//           </span>

//           <h2
//             className="
//             mt-6
//             text-4xl
//             font-black
//             text-primary
//             md:text-6xl
//             "
//           >
//             Journey Through
//             Every Parade Year
//           </h2>

//           <p
//             className="
//             mt-5
//             text-lg
//             leading-8
//             text-muted
//             "
//           >
//             Every year tells a different story.
//             Browse our parade history and relive
//             moments that shaped the Brigade.
//           </p>
//         </motion.div>

//         <div
//           className="
//           mt-16

//           grid

//           gap-8

//           lg:grid-cols-[340px_1fr]
//           "
//         >
//           {/* LEFT YEARS */}

//           <div className="space-y-5">
//             {paradeYears.map((year, index) => (
//               <motion.button
//                 key={year.year}
//                 whileHover={{
//                   x: 8,
//                 }}
//                 onClick={() => setActive(index)}
//                 className={`
//                 w-full

//                 rounded-3xl

//                 border

//                 p-6

//                 text-left

//                 transition-all

//                 ${
//                   active === index
//                     ? "border-secondary bg-primary text-white shadow-xl"
//                     : "border-border bg-card hover:border-secondary"
//                 }
//                 `}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>

//                     <h3
//                       className="
//                       text-3xl
//                       font-black
//                       "
//                     >
//                       {year.year}
//                     </h3>

//                     <p
//                       className={`
//                       mt-2
//                       text-sm

//                       ${
//                         active === index
//                           ? "text-white/80"
//                           : "text-muted"
//                       }
//                       `}
//                     >
//                       {year.title}
//                     </p>

//                   </div>

//                   <ChevronRight
//                     className={`
//                     transition

//                     ${
//                       active === index
//                         ? "rotate-90"
//                         : ""
//                     }
//                     `}
//                   />
//                 </div>

//                 <div
//                   className="
//                   mt-5

//                   flex

//                   items-center

//                   gap-5
//                   "
//                 >
//                   {year.status === "coming" ? (
//                     <>
//                       <Clock3
//                         size={18}
//                         className="text-secondary"
//                       />

//                       <span className="text-sm">
//                         Coming Soon
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       <Images
//                         size={18}
//                         className="text-secondary"
//                       />

//                       <span className="text-sm">
//                         {year.photos} Photos
//                       </span>
//                     </>
//                   )}
//                 </div>
//               </motion.button>
//             ))}
//           </div>

//           {/* RIGHT PANEL */}

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.year}
//               initial={{
//                 opacity: 0,
//                 x: 50,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 x: -50,
//               }}
//               transition={{
//                 duration: .35,
//               }}
//               className="
//               relative

//               overflow-hidden

//               rounded-[40px]

//               bg-primary

//               min-h-[600px]
//               "
//             >
//               <Image
//                 src={selected.cover}
//                 alt={selected.year}
//                 fill
//                 className="object-cover"
//               />

//               <div
//                 className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-r
//                 from-primary
//                 via-primary/80
//                 to-primary/30
//                 "
//               />

//               <div
//                 className="
//                 relative
//                 z-10

//                 flex

//                 h-full

//                 flex-col

//                 justify-end

//                 p-10
//                 md:p-16
//                 "
//               >
//                 {selected.status === "coming" && (
//                   <span
//                     className="
//                     mb-6

//                     inline-flex

//                     w-fit

//                     rounded-full

//                     bg-secondary

//                     px-5

//                     py-2

//                     text-white
//                     "
//                   >
//                     2026 Coming Soon
//                   </span>
//                 )}

//                 <h2
//                   className="
//                   text-5xl

//                   font-black

//                   text-white
//                   "
//                 >
//                   {selected.year}
//                 </h2>

//                 <h3
//                   className="
//                   mt-3

//                   text-3xl

//                   font-bold

//                   text-secondary
//                   "
//                 >
//                   {selected.title}
//                 </h3>

//                 <p
//                   className="
//                   mt-6

//                   max-w-2xl

//                   text-lg

//                   leading-8

//                   text-white/80
//                   "
//                 >
//                   {selected.description}
//                 </p>

//                 {selected.status === "available" ? (
//                   <button
//                     className="
//                     mt-10

//                     w-fit

//                     rounded-xl

//                     bg-secondary

//                     px-8

//                     py-4

//                     font-semibold

//                     text-white

//                     transition

//                     hover:scale-105
//                     "
//                   >
//                     Explore {selected.year}
//                   </button>
//                 ) : (
//                   <button
//                     className="
//                     mt-10

//                     w-fit

//                     rounded-xl

//                     border

//                     border-white/20

//                     px-8

//                     py-4

//                     font-semibold

//                     text-white

//                     backdrop-blur

//                     transition

//                     hover:bg-white

//                     hover:text-primary
//                     "
//                   >
//                     Notify Me
//                   </button>
//                 )}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </Container>
//     </section>
//   );
// }