"use client";

import Image from "next/image";

import Container from "../../layout/container";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function CategoryHero({
  title,
  description,
  image,
}: Props) {
  return (
    <section
      className="
      relative
      h-[500px]
      overflow-hidden
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      <div
        className="
        absolute
        inset-0
        bg-primary/95
        lg:bg-primary/80
        "
      />

      <Container
        className="
        relative
        z-10
        flex
        h-full
        items-center
        "
      >
        <div className="max-w-3xl text-white">

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            "
          >
            {title}
          </h1>

          <p
            className="
            mt-5
            text-lg
            text-white/80
            "
          >
            {description}
          </p>

        </div>
      </Container>
    </section>
  );
}
