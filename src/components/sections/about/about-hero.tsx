import Image from "next/image";
import Link from "next/link";
import Container from "../../layout/container";

export default function AboutHero() {
  return (
    <section className="relative min-h-125 overflow-hidden">
      <Image
        src="/about/biblestud.jpeg"
        alt="About Hero"
        fill
        priority
        className="pointer-events-none object-cover"
      />

      <div
        className="hero-fade-overlay absolute inset-0"
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
        min-h-140
        items-center
        py-16
        sm:min-h-125
        sm:py-20
        lg:min-h-140
        lg:py-24
      "
      >
        <div className="max-w-3xl text-white">
          <h1 className="max-w-3xl text-4xl font-bold leading sm:text-5xl md:text-6xl lg:text-7xl">
            Raising <span className="text-secondary">Leaders</span>,{" "}
            <span className="">Through</span>{" "}
            <span className="text-secondary">Faith</span> and
            <span className="text-secondary"> Service</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:mt-6 md:text-[18px] md:leading-8">
            A Christ-centred company at All Saints Anglican Church Surulere,
            raising boys and girls through worship, discipline, leadership,
            service and lasting fellowship.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row md:mt-10">
            <Link
              href="/articles/history-of-the-brigade"
              className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              rounded-lg
              bg-secondary
              px-6
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-black/20
              transition
              hover:bg-[#b98c22]
              focus:outline-none
              focus:ring-2
              focus:ring-secondary
              focus:ring-offset-2
              focus:ring-offset-primary
              sm:w-auto
              md:text-base
              "
            >
              History of The Brigade
            </Link>

            <Link
              href="/events"
              className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              rounded-lg
              border
              border-white/80
              px-6
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              transition
              hover:border-secondary
              hover:bg-white
              hover:text-primary
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-primary
              sm:w-auto
              md:text-base
              "
            >
              Explore Events
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
