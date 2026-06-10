"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}


// "use client";

// import { motion } from "framer-motion";

// export default function FadeIn({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 30,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.6,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }"
