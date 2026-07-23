"use client";

import Image from "next/image"
import Link from "next/link";
import Container from "../../layout/container";
import FadeIn from "../../layout/fade-in";

export default function ContactHero() {
  return (
      
    <section className="relative min-h-145 overflow-hidden md:min-h-160">
      <Image
        src="/images/hero.jpeg"
        alt="Hero"
        fill
        priority
        className="pointer-events-none object-cover"
      />

      <div
        className="
        hero-fade-overlay
        pointer-events-none
        absolute
        inset-0
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(14, 42, 71, 0.95) 0%, rgba(14, 42, 71, 0.88) 45%, rgba(14, 42, 71, 0) 75%)",
        }}
      />

      <Container
        className="
        relative
        z-10
        flex
        min-h-140
        items-center
        py-16
        sm:min-h-125
        sm:py-20
        lg:min-h-140
        lg:py-24
      "
      >
        <FadeIn>
        <div className="max-w-3xl text-white">
          <h1 className="max-w-3xl text-4xl font-bold leading sm:text-5xl md:text-6xl lg:text-7xl">
            We'd Love to{" "} <br />
            <span className="text-secondary">Hear From</span>{" "} <br />
            <span className="">You</span>{" "}
            {/* <span className="text-secondary">Service</span> in the Next
            Generation */}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:mt-6 md:text-[18px] md:leading-8">
            Whether you are a founder, partner, government agency, 
            or development organisation, 
            reach out and let us explore what we can build together.
          </p>

        </div>
        </FadeIn>
      </Container>
    </section>
  );
}






// "use client";
// import Link from "next/link";
// import Container from "../../layout/container";
// import FadeIn from "../../layout/fade-in";

// export default function ContactHero() {
//   return (
//     <section
//       className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
//       style={{ background: "#173B61" }}
//     >
//       <div
//         className="absolute inset-0 pointer-events-none opacity-10"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 70% 50%, #D4A017 0%, transparent 60%)",
//         }}
//       />

//       <Container className="relative z-10">
//         <FadeIn>
//           <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
//             <Link href="/" className="hover:text-white transition">Home</Link>
//             <span>/</span>
//             <span className="text-white/80">Contact</span>
//           </nav>

//           <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
//             We'd Love to
//             <br />
//             Hear From You
//           </h1>
//           <p className="mt-3 text-white/70 text-sm sm:text-base max-w-md">
//             Have questions or want to get involved? We're here for you.
//           </p>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// }
