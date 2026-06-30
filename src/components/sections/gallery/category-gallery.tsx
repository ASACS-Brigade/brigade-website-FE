"use client";

import Image from "next/image";

import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

interface Props {
  images: string[];
}

export default function CategoryGallery({
  images,
}: Props) {
  return (
    <section className="py-16">

      <Container>

        <div
          className="
          columns-1
          sm:columns-2
          lg:columns-3
          gap-6
          "
        >
          {images.map((image) => (
            <FadeIn key={image}>
              <div
                className="
                relative
                mb-6
                overflow-hidden
                rounded-3xl
                "
              >
                <Image
                  src={image}
                  alt=""
                  width={800}
                  height={800}
                  className="
                  w-full
                  transition
                  duration-700
                  hover:scale-105
                  "
                />
              </div>
            </FadeIn>
          ))}
        </div>

      </Container>
    </section>
  );
}