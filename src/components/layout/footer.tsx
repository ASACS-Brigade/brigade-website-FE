import Link from "next/link";
import Container from "./container";

export default function Footer() {
  return (
    <footer
      className="
      bg-[#0E2A47]
      text-white
      mt-24
      "
    >
      <Container>

        <div className="py-20">

          <div
            className="
            grid
            gap-10
            md:grid-cols-4
            "
          >
            <div>

              <h2 className="text-2xl font-bold">

                Boys & Girls Brigade

              </h2>

              <p className="mt-4 text-slate-300">

                Faith.
                Leadership.
                Service.

              </p>

            </div>

            <div>

              <h3 className="font-semibold mb-4">

                Quick Links

              </h3>

              <div className="space-y-2">

                <Link href="/about">About</Link>

                <br />

                <Link href="/events">Events</Link>

                <br />

                <Link href="/articles">Articles</Link>

              </div>

            </div>

            <div>

              <h3 className="font-semibold mb-4">

                Resources

              </h3>

              <div className="space-y-2">

                <p>Gallery</p>

                <p>Contact</p>

              </div>

            </div>

            <div>

              <h3 className="font-semibold mb-4">

                Contact

              </h3>

              <p>Surulere, Lagos</p>

              <p>info@bgb.org</p>

            </div>

          </div>

        </div>

      </Container>
    </footer>
  );
}














// import Container from "./container";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0E2A47] text-white py-16 mt-24">

//       <Container>

//         <div className="grid md:grid-cols-3 gap-12">

//           <div>
//             <h2 className="font-bold text-2xl">
//               Boys & Girls Brigade
//             </h2>

//             <p className="mt-4 text-sm">
//               Raising disciplined and faith-driven
//               leaders through service.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-3">
//               Quick Links
//             </h3>

//             <ul className="space-y-2">
//               <li>About</li>
//               <li>Events</li>
//               <li>Gallery</li>
//               <li>Contact</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-3">
//               Contact
//             </h3>

//             <p>Surulere, Lagos</p>
//             <p>info@bgbsurulere.org</p>
//           </div>

//         </div>

//       </Container>

//     </footer>
//   );
// }