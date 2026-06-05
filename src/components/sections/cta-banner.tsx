import Container from "../layout/container";

export default function CtaBanner() {
  return (
    <section className="py-24">

      <Container>

        <div
          className="
          rounded-3xl
          bg-[#D4A437]
          p-16
          text-center
          "
        >

          <h2 className="text-5xl font-bold">

            Ready To Join Us?

          </h2>

          <p className="mt-4">

            Become part of a generation
            committed to leadership and service.

          </p>

          <button
            className="
            mt-8
            rounded-xl
            bg-[#0E2A47]
            px-8
            py-4
            text-white
            "
          >
            Join Brigade
          </button>

        </div>

      </Container>

    </section>
  );
}




// import Container from "../layout/container";

// export default function CtaBanner() {
//   return (
//     <section className="py-24">

//       <Container>

//         <div
//           className="
//           rounded-3xl
//           bg-[#D4A437]
//           p-16
//           text-center
//           "
//         >

//           <h2 className="text-4xl font-bold">

//             Ready To Join The Brigade?

//           </h2>

//           <p className="mt-4 max-w-2xl mx-auto">

//             Become part of a community dedicated
//             to faith, leadership and service.

//           </p>

//           <button
//             className="
//             mt-8
//             bg-[#0E2A47]
//             text-white
//             px-8
//             py-4
//             rounded-xl
//             "
//           >
//             Join Today
//           </button>

//         </div>

//       </Container>

//     </section>
//   );
// }