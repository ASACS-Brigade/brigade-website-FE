import Container from "../layout/container";

export default function Newsletter() {
  return (
    <section className="py-24 bg-slate-100">

      <Container>

        <div
          className="
          max-w-3xl
          mx-auto
          text-center
          "
        >

          <h2 className="text-4xl font-bold">

            Stay Updated

          </h2>

          <p className="mt-4 text-gray-600">

            Get updates on events,
            articles and activities.

          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">

            <input
              placeholder="Enter email"
              className="
              flex-1
              border
              rounded-xl
              px-4
              py-3
              "
            />

            <button
              className="
              bg-[#0E2A47]
              text-white
              px-8
              rounded-xl
              "
            >
              Subscribe
            </button>

          </div>

        </div>

      </Container>

    </section>
  );
}



// import Container from "../layout/container";

// export default function Newsletter() {
//   return (
//     <section className="py-24 bg-slate-100">

//       <Container>

//         <div className="max-w-2xl mx-auto text-center">

//           <h2 className="text-4xl font-bold">

//             Stay Updated

//           </h2>

//           <p className="mt-4 text-gray-600">

//             Receive updates on events,
//             articles and community activities.

//           </p>

//           <div className="mt-8 flex gap-4">

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="
//               flex-1
//               rounded-xl
//               border
//               px-4
//               py-3
//               "
//             />

//             <button
//               className="
//               bg-[#0E2A47]
//               text-white
//               px-6
//               rounded-xl
//               "
//             >
//               Subscribe
//             </button>

//           </div>

//         </div>

//       </Container>

//     </section>
//   );
// }