"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface ParadeLightboxProps {
  open: boolean;
  image: string;
  title: string;
  current: number;
  total: number;
  isAtStart: boolean;
  isAtEnd: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ParadeLightbox({
  open,
  image,
  title,
  current,
  total,
  isAtStart,
  isAtEnd,
  onClose,
  onNext,
  onPrevious,
}: ParadeLightboxProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
          title="Close lightbox"
            onClick={onClose}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-secondary"
          >
            <X size={24} />
          </button>

          {/* Previous Button - DISABLED at Start */}
          <button
            onClick={onPrevious}
            disabled={isAtStart}
            className={`absolute left-6 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full text-white transition ${
              isAtStart
                ? "bg-white/5 cursor-not-allowed opacity-30"
                : "bg-white/10 hover:bg-secondary cursor-pointer"
            }`}
            title={isAtStart ? "No previous image" : "Previous image"}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button - DISABLED at End */}
          <button
            onClick={onNext}
            disabled={isAtEnd}
            className={`absolute right-6 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full text-white transition ${
              isAtEnd
                ? "bg-white/5 cursor-not-allowed opacity-30"
                : "bg-white/10 hover:bg-secondary cursor-pointer"
            }`}
            title={isAtEnd ? "No more images" : "Next image"}
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Container */}
          <div className="flex h-full items-center justify-center px-6 py-24">
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative h-full w-full max-w-7xl"
            >
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 px-8 py-5 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-white/60">
              Image {current + 1} of {total}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}













// "use client";

// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Download,
//   X,
// } from "lucide-react";

// interface ParadeLightboxProps {
//   open: boolean;
//   image: string;
//   title: string;
//   current: number;
//   total: number;
//   onClose: () => void;
//   onNext: () => void;
//   onPrevious: () => void;
// }

// export default function ParadeLightbox({
//   open,
//   image,
//   title,
//   current,
//   total,
//   onClose,
//   onNext,
//   onPrevious,
// }: ParadeLightboxProps) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           exit={{
//             opacity: 0,
//           }}
//           transition={{
//             duration: .25,
//           }}
//           className="
//           fixed
//           inset-0
//           z-[9999]
//           bg-black/95
//           backdrop-blur-md
//           "
//         >
//           {/* Close */}

//           <button
//             onClick={onClose}
//             className="
//             absolute
//             right-6
//             top-6
//             z-50

//             flex
//             h-12
//             w-12
//             items-center
//             justify-center

//             rounded-full

//             bg-white/10

//             text-white

//             transition

//             hover:bg-secondary
//             "
//           >
//             <X />
//           </button>

//           {/* Previous */}

//           <button
//             onClick={onPrevious}
//             className="
//             absolute

//             left-6

//             top-1/2

//             z-50

//             -translate-y-1/2

//             flex

//             h-12

//             w-12

//             items-center

//             justify-center

//             rounded-full

//             bg-white/10

//             text-white

//             transition

//             hover:bg-secondary
//             "
//           >
//             <ChevronLeft />
//           </button>

//           {/* Next */}

//           <button
//             onClick={onNext}
//             className="
//             absolute

//             right-6

//             top-1/2

//             z-50

//             -translate-y-1/2

//             flex

//             h-12

//             w-12

//             items-center

//             justify-center

//             rounded-full

//             bg-white/10

//             text-white

//             transition

//             hover:bg-secondary
//             "
//           >
//             <ChevronRight />
//           </button>

//           {/* Image */}

//           <div
//             className="
//             flex
//             h-full
//             items-center
//             justify-center
//             px-6
//             py-24
//             "
//           >
//             <motion.div
//               key={image}
//               initial={{
//                 opacity: 0,
//                 scale: .95,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//               }}
//               transition={{
//                 duration: .3,
//               }}
//               className="
//               relative

//               h-full

//               w-full

//               max-w-7xl
//               "
//             >
//               <Image
//                 src={image}
//                 alt={title}
//                 fill
//                 priority
//                 className="
//                 object-contain
//                 "
//               />
//             </motion.div>
//           </div>

//           {/* Bottom Bar */}

//           <div
//             className="
//             absolute

//             bottom-0

//             left-0

//             right-0

//             flex

//             items-center

//             justify-between

//             border-t

//             border-white/10

//             bg-black/60

//             px-8

//             py-5

//             backdrop-blur-xl
//             "
//           >
//             <div>

//               <h3
//                 className="
//                 text-xl
//                 font-bold
//                 text-white
//                 "
//               >
//                 {title}
//               </h3>

//               <p className="text-white/60">
//                 Image {current + 1} of {total}
//               </p>

//             </div>

//             <button
//               className="
//               flex
//               items-center
//               gap-3

//               rounded-xl

//               bg-secondary

//               px-6

//               py-3

//               text-white

//               transition

//               hover:scale-105
//               "
//             >
//               <Download size={18} />

//               Download

//             </button>

//           </div>

//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }