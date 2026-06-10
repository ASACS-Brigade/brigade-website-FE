// "use client";

// import {
//   Cross,
//   Shield,
//   Users,
//   HandHeart,
//   Award,
// } from "lucide-react";

// import FadeIn from "../../layout/fade-in";
// import Container from "../../layout/container";

// const values = [
//   {
//     title: "Faith",
//     icon: Cross,
//     description:
//       "We put God first in all we do.",
//   },
//   {
//     title: "Integrity",
//     icon: Shield,
//     description:
//       "We are honest and dependable.",
//   },
//   {
//     title: "Leadership",
//     icon: Users,
//     description:
//       "We inspire and influence others.",
//   },
//   {
//     title: "Service",
//     icon: HandHeart,
//     description:
//       "We serve selflessly with love.",
//   },
//   {
//     title: "Excellence",
//     icon: Award,
//     description:
//       "We give our best in everything.",
//   },
// ];

// export default function AboutValues() {
//   return (
//     <section className="pb-16">

//       <Container>

//         <h2 className="text-3xl font-bold text-primary">
//           Our Core Values
//         </h2>

//         <div
//           className="
//           mt-8
//           grid
//           grid-cols-2
//           gap-4
//           md:grid-cols-3
//           lg:grid-cols-5
//           "
//         >
//           {values.map((value) => {
//             const Icon = value.icon;

//             return (
//               <FadeIn key={value.title}>
//                 <div
//                   className="
//                   card
//                   p-5
//                   text-center
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:shadow-lg
//                   "
//                 >
//                   <Icon
//                     size={34}
//                     className="
//                     mx-auto
//                     text-secondary
//                     "
//                   />

//                   <h3 className="mt-4 font-bold">
//                     {value.title}
//                   </h3>

//                   <p
//                     className="
//                     mt-2
//                     text-sm
//                     text-muted
//                     "
//                   >
//                     {value.description}
//                   </p>
//                 </div>
//               </FadeIn>
//             );
//           })}
//         </div>

//       </Container>

//     </section>
//   );
// }



"use client";
import { Cross, Shield, Users, HandHeart, Award } from "lucide-react";
import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

const values = [
  {
    title: "Faith",
    icon: Cross,
    description: "We put God first in all we do.",
  },
  {
    title: "Integrity",
    icon: Shield,
    description: "We are honest and dependable.",
  },
  {
    title: "Leadership",
    icon: Users,
    description: "We inspire and influence others.",
  },
  {
    title: "Service",
    icon: HandHeart,
    description: "We serve selflessly with love.",
  },
  {
    title: "Excellence",
    icon: Award,
    description: "We give our best in everything.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-16">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary mb-8">
            Our Core Values
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <FadeIn key={value.title}>
                <div
                  className="flex flex-col items-center text-center px-3 py-5 rounded-xl
                    transition-all duration-200 hover-card border-2 border-secondary/50"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                 <Icon
  size={28}
  className="
  hover-card-icon
  mb-3
  shrink-0
  text-secondary
  "
/>
                 <h3
  className="
  hover-card-title
  font-medium
  text-foreground
  text-sm
  mb-1
  "
>
                    {value.title}
                  </h3>
                  <p
  className="
  hover-card-text
  text-xs
  text-muted
  leading-relaxed
  "
>
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}