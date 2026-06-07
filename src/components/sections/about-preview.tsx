import Image from "next/image";
import Link from "next/link";
import Container from "../layout/container";

export default function AboutPreview() {
  return (
    <section className="section">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold">
              A Family, A Mission, A Future
            </h2>

            <p className="mt-6 text-gray-600">
              Boys and Girls Brigade Surulere exists to develop young people who
              lead with integrity and impact their world.
            </p>

            {/* <Link href="/about" className="btn-primary">
              Learn More
            </Link> */}

            <Link
              href="/about"
              className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              rounded-lg
              bg-primary-light
              px-6
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-black/20
              transition
              hover:bg-primary-dark
              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:ring-offset-2
              focus:ring-offset-background
              sm:w-auto
              md:text-base
              mt-7
              "
            >
              Learn About Us
            </Link>
          </div>

          <div className="relative h-100">
            <Image
              src="/events/pic2.png"
              alt="About"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
