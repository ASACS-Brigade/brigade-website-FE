// "use client";

// import Image from "next/image";
// import {
//   Heart,
//   Shield,
//   Music,
//   Cross,
// } from "lucide-react";

// import { useEffect, useState } from "react";

// const slides = [
//   {
//     title: "Enrolment & Rededication",
//     subtitle:
//       "Welcoming members into the Brigade family.",
//     image: "/gallery/enrolment.jpg",
//     icon: Cross,
//   },
//   {
//     title: "Parade Night",
//     subtitle:
//       "Discipline, excellence and inspection.",
//     image: "/gallery/parade.jpg",
//     icon: Shield,
//   },
//   {
//     title: "Medical Outreach",
//     subtitle:
//       "Serving communities with compassion.",
//     image: "/gallery/outreach.jpg",
//     icon: Heart,
//   },
//   {
//     title: "Band & Orchestra",
//     subtitle:
//       "Training talents through music.",
//     image: "/gallery/orchestra.jpg",
//     icon: Music,
//   },
// ];

// export default function GalleryFeaturedSlider() {
//   const [active, setActive] = useState(0);

//   const [paused, setPaused] =
//     useState(false);

//   useEffect(() => {
//     if (paused) return;

//     const interval = setInterval(() => {
//       setActive((prev) =>
//         prev === slides.length - 1
//           ? 0
//           : prev + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [paused]);

//   return (
//     <section className="py-20">

//       <div className="mb-10">

//         <span
//           className="
//           text-secondary
//           text-sm
//           uppercase
//           tracking-[0.25em]
//           "
//         >
//           Featured Albums
//         </span>

//         <h2
//           className="
//           mt-3
//           text-4xl
//           font-bold
//           text-primary
//           "
//         >
//           Capturing Brigade Moments
//         </h2>

//       </div>

     

//  <div
//     onMouseEnter={() => setPaused(true)}
//     onMouseLeave={() => setPaused(false)}
//     className="
//     hidden
//     lg:flex
//     gap-4
//     h-[500px]
//     "
//   >
//      <div
//     onMouseEnter={() => setPaused(true)}
//     onMouseLeave={() => setPaused(false)}
//     className="
//     hidden
//     lg:flex
//     gap-4
//     h-[500px]
// "
//       >
//         {slides.map((slide, index) => {
//           const Icon = slide.icon;

//           return (
//             <div
//               key={slide.title}
//               onClick={() => setActive(index)}
//               className={`
//                 relative
//                 overflow-hidden
//                 rounded-[28px]
//                 cursor-pointer
//                 transition-all
//                 duration-700
//                 ease-in-out

//                 ${
//                   active === index
//                     ? "lg:flex-[4] flex-[3]"
//                     : "lg:flex-1 flex-[1]"
//                 }

//                 min-h-[220px]
//                 lg:min-h-full
//               `}
//             >
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 className="
//                 object-cover
//                 "
//               />

//               <div
//                 className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-t
//                 from-primary
//                 via-primary/40
//                 to-transparent
//                 "
//               />

//               <div
//                 className={`
//                 absolute
//                 bottom-6
//                 left-6
//                 right-6

//                 transition-all
//                 duration-500

//                 ${
//                   active === index
//                     ? "opacity-100"
//                     : "opacity-0 lg:opacity-0"
//                 }
//                 `}
//               >
//                 <div
//                   className="
//                   flex
//                   items-center
//                   gap-3
//                   "
//                 >
//                   <div
//                     className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-white/20
//                     backdrop-blur
//                     "
//                   >
//                     <Icon
//                       size={20}
//                       className="text-white"
//                     />
//                   </div>

//                   <div>

//                     <h3
//                       className="
//                       text-xl
//                       font-bold
//                       text-white
//                       "
//                     >
//                       {slide.title}
//                     </h3>

//                     <p
//                       className="
//                       text-white/80
//                       text-sm
//                       "
//                     >
//                       {slide.subtitle}
//                     </p>

//                   </div>

//                 </div>
//               </div>

//               {active !== index && (
//                 <div
//                   className="
//                   absolute
//                   inset-0
//                   bg-black/35
//                   "
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//   </div>

//   {/* Mobile + Tablet */}

//   <div className="lg:hidden">

//     <div
//       className="
//       relative
//       overflow-hidden
//       rounded-[28px]
//       h-[420px]
//       "
//     >
//       <Image
//         src={slides[active].image}
//         alt={slides[active].title}
//         fill
//         className="object-cover"
//       />

//       <div
//         className="
//         absolute
//         inset-0
//         bg-gradient-to-t
//         from-primary
//         via-primary/60
//         to-transparent
//         "
//       />

//       <div
//         className="
//         absolute
//         bottom-6
//         left-6
//         right-6
//         "
//       >
//         <h3 className="text-white text-2xl font-bold">
//           {slides[active].title}
//         </h3>

//         <p className="text-white/80 mt-2">
//           {slides[active].subtitle}
//         </p>
//       </div>
//     </div>

//     <div className="flex justify-center gap-2 mt-5">
//       {slides.map((_, index) => (
//         <button
//           key={index}
//           onClick={() => setActive(index)}
//           className={`
//             h-2 rounded-full transition-all
//             ${
//               active === index
//                 ? "w-10 bg-secondary"
//                 : "w-2 bg-slate-300"
//             }
//           `}
//         />
//       ))}
//     </div>



//   </div>

  
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import {
  Heart,
  Shield,
  Music,
  Cross,
} from "lucide-react";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Enrolment & Rededication",
    subtitle:
      "Welcoming members into the Brigade family.",
    image: "/gallery/gallery1.png",
    icon: Cross,
  },
  {
    title: "Parade Night",
    subtitle:
      "Discipline, excellence and inspection.",
    image: "/gallery/parade.jpg",
    icon: Shield,
  },
  {
    title: "Medical Outreach",
    subtitle:
      "Serving communities with compassion.",
    image: "/gallery/outreach.jpg",
    icon: Heart,
  },
  {
    title: "Band & Orchestra",
    subtitle:
      "Training talents through music.",
    image: "/gallery/orchestra.jpg",
    icon: Music,
  },
];

export default function GalleryFeaturedSlider() {
  const [active, setActive] = useState(0);

  const [paused, setPaused] =
    useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="py-20">

      <div className="mb-10">

        <span
          className="
          text-secondary
          text-sm
          uppercase
          tracking-[0.25em]
          "
        >
          Featured Albums
        </span>

        <h2
          className="
          mt-3
          text-4xl
          font-bold
          text-primary
          "
        >
          Capturing Brigade Moments
        </h2>

      </div>

      {/* Desktop */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="
        hidden
        lg:flex
        gap-4
        h-[500px]
        "
      >
        {slides.map((slide, index) => {
          const Icon = slide.icon;

          return (
            <div
              key={slide.title}
              onClick={() => setActive(index)}
              className={`
                relative
                overflow-hidden
                rounded-[28px]
                cursor-pointer
                transition-all
                duration-700
                ease-in-out

                ${
                  active === index
                    ? "lg:flex-[4] flex-[3]"
                    : "lg:flex-1 flex-[1]"
                }

                min-h-[220px]
                lg:min-h-full
              `}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="
                object-cover
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-primary
                via-primary/40
                to-transparent
                "
              />

              <div
                className={`
                absolute
                bottom-6
                left-6
                right-6

                transition-all
                duration-500

                ${
                  active === index
                    ? "opacity-100"
                    : "opacity-0 lg:opacity-0"
                }
                `}
              >
                <div
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >
                  <div
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    backdrop-blur
                    "
                  >
                    <Icon
                      size={20}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <h3
                      className="
                      text-xl
                      font-bold
                      text-white
                      "
                    >
                      {slide.title}
                    </h3>

                    <p
                      className="
                      text-white/80
                      text-sm
                      "
                    >
                      {slide.subtitle}
                    </p>

                  </div>

                </div>
              </div>

              {active !== index && (
                <div
                  className="
                  absolute
                  inset-0
                  bg-black/35
                  "
                />
              )}
            </div>
          );
        })}
      </div>
         <div className="justify-center gap-2 mt-10 hidden lg:flex">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              title={`Go to slide ${index + 1}`}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2 rounded-full transition-all
                ${
                  active === index
                    ? "w-10 bg-secondary"
                    : "w-2 bg-slate-300"
                }
              `}
            />
          ))}
        </div>

      {/* Mobile + Tablet */}
      <div className="lg:hidden">

        <div
          className="
          relative
          overflow-hidden
          rounded-[28px]
          h-[420px]
          "
        >
          <Image
            src={slides[active].image}
            alt={slides[active].title}
            fill
            className="object-cover"
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-primary
            via-primary/60
            to-transparent
            "
          />

          <div
            className="
            absolute
            bottom-6
            left-6
            right-6
            "
          >
            <h3 className="text-white text-2xl font-bold">
              {slides[active].title}
            </h3>

            <p className="text-white/80 mt-2">
              {slides[active].subtitle}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-5">
          {slides.map((_, index) => (
               <button
              key={index}
              onClick={() => setActive(index)}
              title={`Go to slide ${index + 1}`}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2 rounded-full transition-all
                ${
                  active === index
                    ? "w-10 bg-secondary"
                    : "w-2 bg-slate-300"
                }
              `}
            />
          ))}
        </div>

      </div>

    </section>
  );
}