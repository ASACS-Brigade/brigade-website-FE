"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Expand,
  CalendarDays,
  ImageIcon,
} from "lucide-react";

import Container from "../../../layout/container";
import ParadeLightbox from "./parade-lightbox";

interface ParadeGalleryProps {
  year: string;
  images: string[];
}

export default function ParadeGallery({ year, images }: ParadeGalleryProps) {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hover state for each image
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Heights for Pinterest layout
  const heights = [
    "h-[420px]",
    "h-[300px]",
    "h-[360px]",
    "h-[280px]",
    "h-[390px]",
    "h-[320px]",
    "h-[410px]",
    "h-[300px]",
  ];

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const isAtStart = currentImageIndex === 0;
  const isAtEnd = currentImageIndex === images.length - 1;

  /**
   * Coming Soon State
   */

  if (images.length === 0) {
    return (
      <section id="gallery" className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] border border-dashed border-secondary/40 bg-primary p-8 text-center md:p-16">
            <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary/20 blur-[120px]" />

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
              className="relative z-10"
            >
              <CalendarDays size={70} className="mx-auto text-secondary" />

              <h2 className="mt-8 text-4xl font-black text-white md:text-5xl">
                {year} Gallery
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                The Parade Season has not yet taken place. Once the activities
                are completed, photographs and memories will automatically
                appear here.
              </p>

              <span className="mt-10 inline-flex rounded-full bg-secondary px-6 py-3 font-semibold text-white">
                Coming Soon
              </span>
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }

  /**
   * Gallery State
   */

  return (
      <section id="gallery" className="py-20">
      <Container>
        <motion.div
          key={year}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            key={`header-${year}`}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-secondary">
              <ImageIcon size={18} />
              Parade Gallery
            </span>

            <h2 className="mt-6 text-3xl font-black text-primary md:text-5xl">
              {year} Parade Gallery
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              Explore memorable moments from the {year} Brigade Parade, including
              inspections, ceremonial marches, awards, and company activities
              captured throughout the season.
            </p>
          </motion.div>

          <motion.div
            key={`gallery-${year}`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="mt-12 columns-1 gap-6 sm:columns-2 xl:columns-3"
          >
            {images.map((image, index) => (
              <motion.div
                key={`${year}-${index}`}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="mb-6 break-inside-avoid"
              >
                {/* Image Container */}
                <div
                  className={`${heights[index % heights.length]} relative cursor-pointer overflow-hidden rounded-3xl`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image */}
                  <Image
                    src={image}
                    alt={`Parade ${year}`}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Dark Overlay - Shows on Hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                    />
                  )}

                  {/* Expand Button - Shows on Hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-5 right-5 z-30"
                    >
                      <button
                        type="button"
                        title="Expand image"
                        aria-label="Expand image"
                        onClick={() => openLightbox(index)}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary hover:bg-secondary hover:text-white transition-all duration-200 shadow-lg"
                      >
                        <Expand size={20} />
                      </button>
                    </motion.div>
                  )}

                  {/* Bottom Info - Shows on Hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-7"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-secondary">
                            Parade {year}
                          </span>
                          <h3 className="mt-2 text-2xl font-bold text-white">
                            Brigade Parade
                          </h3>
                        </div>
                        <Camera size={32} className="text-secondary" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Lightbox */}
      <ParadeLightbox
        open={lightboxOpen}
        image={images[currentImageIndex]}
        title="Brigade Parade"
        current={currentImageIndex}
        total={images.length}
        isAtStart={isAtStart}
        isAtEnd={isAtEnd}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
}













// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   Camera,
//   Expand,
//   Download,
//   CalendarDays,
//   ImageIcon,
// } from "lucide-react";

// import Container from "../../../layout/container";

// interface ParadeGalleryProps {
//   year: string;
//   images: string[];
// }

// export default function ParadeGallery({ year, images }: ParadeGalleryProps) {
//   // Heights for Pinterest layout
//   const heights = [
//     "h-[520px]",
//     "h-[330px]",
//     "h-[430px]",
//     "h-[280px]",
//     "h-[470px]",
//     "h-[350px]",
//     "h-[500px]",
//     "h-[310px]",
//     "h-[390px]",
//     "h-[460px]",
//   ];

//   /**
//    * 2026
//    * Coming Soon State
//    */

//   if (images.length === 0) {
//     return (
//       <section id="gallery" className="py-24">
//         <Container>
//           <div
//             className="
//             rounded-[40px]
//             border
//             border-dashed
//             border-secondary/40
//             bg-primary
//             p-12
//             md:p-20
//             text-center
//             overflow-hidden
//             relative
//             "
//           >
//             <div
//               className="
//               absolute
//               -top-20
//               left-1/2
//               h-80
//               w-80
//               -translate-x-1/2
//               rounded-full
//               bg-secondary/20
//               blur-[120px]
//               "
//             />

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               className="relative z-10"
//             >
//               <CalendarDays size={70} className="mx-auto text-secondary" />

//               <h2
//                 className="
//                 mt-8
//                 text-5xl
//                 font-black
//                 text-white
//                 "
//               >
//                 {year} Gallery
//               </h2>

//               <p
//                 className="
//                 mx-auto
//                 mt-6
//                 max-w-2xl
//                 text-lg
//                 leading-8
//                 text-white/70
//                 "
//               >
//                 The Parade Season has not yet taken place. Once the activities
//                 are completed, photographs and memories will automatically
//                 appear here.
//               </p>

//               <span
//                 className="
//                 mt-10
//                 inline-flex
//                 rounded-full
//                 bg-secondary
//                 px-6
//                 py-3
//                 font-semibold
//                 text-white
//                 "
//               >
//                 Coming Soon
//               </span>
//             </motion.div>
//           </div>
//         </Container>
//       </section>
//     );
//   }

//   /**
//    * Gallery State
//    */

//   return (
//     <section id="gallery" className="py-24">
//       <Container>
//         <motion.div
//           key={year}
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//         >

//         <motion.div
//           key={`header-${year}`}
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
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
//             text-secondary
//             "
//           >
//             <ImageIcon size={18} />
//             Parade Gallery
//           </span>

//           <h2
//             className="
//             mt-6
//             text-4xl
//             md:text-6xl
//             font-black
//             text-primary
//             "
//           >
//             {year} Parade Gallery
//           </h2>

//           <p
//             className="
//             mt-4
//             max-w-3xl
//             text-lg
//             leading-8
//             text-muted
//             "
//           >
//             Explore memorable moments from the {year} Brigade Parade, including
//             inspections, ceremonial marches, awards, and company activities
//             captured throughout the season.
//           </p>
//         </motion.div>

//         <motion.div
//           key={`gallery-${year}`}
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           transition={{
//             duration: 0.45,
//             delay: 0.1,
//           }}
//           className="
//             mt-16
//             columns-1
//             sm:columns-2
//             xl:columns-3
//             gap-6
//             "
//         >
//           {images.map((image, index) => (
//             <motion.div
//               key={`${year}-${index}`}
//               initial={{
//                 opacity: 0,
//                 y: 70,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.15,
//               }}
//               transition={{
//                 delay: index * 0.08,
//               }}
//               className="
//               mb-6
//               break-inside-avoid
//               "
//             >
//               <div
//                 className={`
//                 ${heights[index % heights.length]}

//                 group
//                 relative
//                 overflow-hidden
//                 rounded-[34px]
//                 cursor-pointer
//                 `}
//               >
//                 <Image
//                   src={image}
//                   alt={`Parade ${year}`}
//                   fill
//                   className="
//                   object-cover

//                   transition-all
//                   duration-700

//                   group-hover:scale-110
//                   "
//                 />

//                 {/* Overlay */}

//                 <div
//                   className="
//                   absolute
//                   inset-0

//                   bg-gradient-to-t

//                   from-black

//                   via-black/20

//                   to-transparent

//                   opacity-0

//                   transition

//                   duration-500

//                   group-hover:opacity-100
//                   "
//                 />

//                 {/* Top Buttons */}

//                 <div
//                   className="
//                   absolute
//                   top-5
//                   right-5

//                   flex
//                   gap-3

//                   opacity-0

//                   -translate-y-6

//                   transition-all
//                   duration-500

//                   group-hover:opacity-100

//                   group-hover:translate-y-0
//                   "
//                 >
//                   <button
//                     type="button"
//                     title="Expand image"
//                     aria-label="Expand image"
//                     className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center

//                     rounded-full

//                     bg-white

//                     text-primary
//                     "
//                   >
//                     <Expand size={18} />
//                   </button>

//                   <button
//                     type="button"
//                     title="Download image"
//                     aria-label="Download image"
//                     className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center

//                     rounded-full

//                     bg-secondary

//                     text-white
//                     "
//                   >
//                     <Download size={18} />
//                   </button>
//                 </div>

//                 {/* Bottom */}

//                 <div
//                   className="
//                   absolute
//                   bottom-0
//                   left-0
//                   right-0

//                   translate-y-14

//                   p-7

//                   opacity-0

//                   transition-all
//                   duration-500

//                   group-hover:translate-y-0

//                   group-hover:opacity-100
//                   "
//                 >
//                   <div
//                     className="
//                     flex
//                     items-center
//                     justify-between
//                     "
//                   >
//                     <div>
//                       <span
//                         className="
//                         text-sm
//                         text-secondary
//                         "
//                       >
//                         Parade {year}
//                       </span>

//                       <h3
//                         className="
//                         mt-2
//                         text-2xl
//                         font-bold
//                         text-white
//                         "
//                       >
//                         Brigade Parade
//                       </h3>
//                     </div>

//                     <Camera size={28} className="text-secondary" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         </motion.div>
//       </Container>
//     </section>
//   );
// }
