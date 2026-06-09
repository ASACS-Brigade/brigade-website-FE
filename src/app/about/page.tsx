 // import PageHero from "../../components/layout/page-hero";

// export default function AboutPage() {
//   return (
//     <>
//       <PageHero
//         title="About Us"
//         subtitle="Developing young people through faith and leadership."
//       />

//       <section className="section">
//         <div className="container">
//           Mission, Vision, Leadership,
//           Programs and History go here.
//         </div>
//       </section>
//     </>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import Container from "../../components/layout/container";

export default function AboutHero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden">

      <Image
        src="/images/about/about-hero.jpg"
        alt="About Hero"
        fill
        priority
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,42,71,.96) 0%, rgba(14,42,71,.85) 45%, rgba(14,42,71,0) 80%)",
        }}
      />

      <Container
        className="
        relative
        z-10
        flex
        min-h-[500px]
        items-center
        "
      >
        <div className="max-w-xl text-white">

          <h1
            className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            "
          >
            Raising Leaders
            Through Faith
            and Service
          </h1>

          <div className="mt-6 text-sm text-white/80">

            <Link href="/">
              Home
            </Link>

            <span className="mx-2">/</span>

            <span>About</span>

          </div>

        </div>
      </Container>
    </section>
  );
}