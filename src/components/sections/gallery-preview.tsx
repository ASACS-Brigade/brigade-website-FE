import Image from "next/image";
import Link from "next/link";

import Container from "../layout/container";
import FadeIn from "../layout/fade-in";
import { FaArrowRight } from "react-icons/fa6";

export default function GalleryPreview({ images = [] }: { images?: string[] }) {
  const previewImages = images.slice(0, 4);

  return (
    <section className="py-8">

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
            hidden lg:block
            text-sm
            font-medium
            text-primary
            hoverLink
            "
          >
            View All
          </Link>

          <Link
            href="/gallery"
            className="
            block lg:hidden
            text-xs
            font-medium
            text-primary
            hoverLink
            "
          >
            <FaArrowRight />
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

          {previewImages.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-card p-6 text-sm text-muted md:col-span-4">
              Gallery images published from the dashboard will appear here.
            </div>
          ) : null}

          {previewImages.map((image, index) => (
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

