// "use client";
// import { useEffect, useRef } from "react";
// import { Eye, Target } from "lucide-react";
// import FadeIn from "../../layout/fade-in";
// import Container from "../../layout/container";

// export default function AboutVisionMission() {
//   return (
//     <section className="relative py-16 overflow-hidden">
//       <div className="absolute inset-0 bg-secondary/30" />

//       <div className="absolute top-0 left-0 w-full h-32 lg:h-40 bg-gradient-to-b from-background to-transparent z-[1] " />

//       <div className="absolute bottom-0 left-0 w-full h-32 lg:h-40 bg-gradient-to-t from-background to-transparent z-[1] " />

//       <Container className="relative z-10">
//         <FadeIn>
//           <h2 className="text-3xl font-bold text-primary mb-8">
//             Vision &amp; Mission
//           </h2>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
//           <FadeIn>
//             <div
//               className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background
//                 transition-all duration-200 hover:-translate-y-1 hover:border-border-secondary w-3/4 h-full"
//             >
//               <div
//                 className="w-20 h-20 rounded-lg flex items-center justify-center shrink-0"
//                 style={{ background: "#173B61" }}
//               >
//                 <Eye size={50} style={{ color: "#D4A017" }} />
//               </div>
//               <div>
//                 <h3 className="font-medium text-foreground mb-2">Our Vision</h3>
//                 <p className="text-sm text-muted leading-relaxed">
//                   To be a leading youth movement that raises disciplined,
//                   Christ-centered leaders who transform their world.
//                 </p>
//               </div>
//             </div>
//           </FadeIn>

//           <FadeIn>
//             <div
//               className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background
//                 transition-all duration-200 hover:-translate-y-1 hover:border-border-secondary w-3/4 h-full"
//             >
//               <div
//                 className="w-20 h-20 rounded-lg flex items-center justify-center shrink-0"
//                 style={{ background: "#173B61" }}
//               >
//                 <Target size={50} style={{ color: "#D4A017" }} />
//               </div>
//               <div>
//                 <h3 className="font-medium text-foreground mb-2">
//                   Our Mission
//                 </h3>
//                 <p className="text-sm text-muted leading-relaxed">
//                   To develop the total boy and girl through Christian faith,
//                   leadership training, and community service.
//                 </p>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </Container>
//     </section>
//   );
// }




"use client";

import { Cross, ShieldCheck } from "lucide-react";

import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

export default function AboutVisionMission() {
  return (
    <section className="py-1">

      <Container>

        <h2 className="text-3xl font-bold text-primary mb-9">
          Object & Aim Of The Brigade
        </h2>

         <div className="grid grid-cols-1 gap-5 items-stretch justify-center md:grid-cols-2">
          <FadeIn>
            <div
              className="flex h-full w-full flex-col gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-1 hover:border-secondary sm:flex-row sm:items-start md:p-6"
            >
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary-light sm:h-20 sm:w-20"
              >
                <ShieldCheck className="text-secondary" size={44} />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Object of the Boys' Brigade</h3>
                <p className="text-sm text-muted leading-relaxed">
                 The Advancement of Christ's Kingdom among Boys and the Promotion of Habits of
                  Obedience, Reverence, Discipline, Self-Respect and all that tends towards a true Christian Manliness.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div
              className="flex h-full w-full flex-col gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-1 hover:border-secondary sm:flex-row sm:items-start md:p-6"
            >
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary-light sm:h-20 sm:w-20"
              >
                <Cross className="text-secondary" size={44} />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Aim of the Girls' Brigade
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                 To help Girls become followers of the Lord Jesus Christ through self-control, 
                 reverence and a sense of responsibility to find true enrichment of life.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

      </Container>

    </section>
  );
}


