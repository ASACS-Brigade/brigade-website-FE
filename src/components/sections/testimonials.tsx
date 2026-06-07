import Container from "../layout/container";

export default function Testimonials() {
  return (
    <section className="pb-6">

      <Container>

        <div
          className="
          rounded-xl
          bg-primary
          px-8
          py-10
          text-center
          text-white
          relative
          overflow-hidden
          "
        >

          <span
            className="
            absolute
            left-14
            top-6
            text-secondary
            text-4xl
            "
          >
            ❝
          </span>

          <p
            className="
            text-lg
            md:text-xl
            font-medium
            max-w-3xl
            mx-auto
            "
          >
            The Brigade taught me confidence,
            discipline, and service.
            Today, I lead because I was trained
            to serve.
          </p>

          <p
            className="
            mt-5
            text-sm
            font-semibold
            "
          >
            — Favour Ogada, Brigader 
          </p>

        </div>

      </Container>

    </section>
  );
}


// import Container from "../layout/container";

// export default function Testimonials() {
//   return (
//     <section className="bg-[#0E2A47] text-white py-28">

//       <Container>

//         <div className="max-w-4xl mx-auto text-center">

//           <h2 className="text-4xl font-bold">

//             What Members Say

//           </h2>

//           <p className="mt-8 text-2xl leading-relaxed">

//             The Brigade gave me confidence,
//             leadership skills and lifelong
//             friendships.

//           </p>

//           <div className="mt-8">

//             <p className="font-semibold">
//               Michael A.
//             </p>

//             <p className="text-slate-300">
//               Former Member
//             </p>

//           </div>

//         </div>

//       </Container>

//     </section>
//   );
// }



