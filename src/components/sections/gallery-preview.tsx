import Image from "next/image";
import Link from "next/link";

import Container from "../layout/container";
import FadeIn from "../layout/fade-in";

const images = [
  "/gallery/gallery1.png",
  // "/gallery/gallery2.png",
  // "/gallery/gallery3.png",
  "/images/hero.jpeg",
];

export default function GalleryPreview() {
  return (
    <section className="py-14">

      <Container>

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-primary">
              Gallery Highlights
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Moments of faith, growth and impact
            </p>

          </div>

          <Link
            href="/gallery"
            className="
            text-sm
            font-medium
            text-primary
            hover:text-secondary
            "
          >
            View Full Gallery
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

          {images.map((image, index) => (
            <FadeIn key={index}>

              <div
                className="
                relative
                h-[150px]
                overflow-hidden
                rounded-xl
                "
              >
                <Image
                  src={image}
                  alt="Gallery"
                  fill
                  className="
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
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



// import Container from "../layout/container";
// import SectionHeader from "../layout/section-header";

// export default function GalleryPreview() {
//   return (
//     <section className="section">

//       <Container>

//         <SectionHeader
//           title="Gallery Highlights"
//           subtitle="Moments of growth, fellowship and service."
//         />

//         <div
//           className="
//           grid
//           md:grid-cols-4
//           gap-4
//           "
//         >

//           <div className="h-[300px] bg-slate-300 rounded-2xl" />
//           <div className="h-[300px] bg-slate-200 rounded-2xl" />
//           <div className="h-[300px] bg-slate-300 rounded-2xl" />
//           <div className="h-[300px] bg-slate-200 rounded-2xl" />

//         </div>

//       </Container>

//     </section>
//   );
// }

