import { Users } from "lucide-react";
import ContactHero from "../../components/sections/contract/contactHero";
import ContactForm from "../../components/sections/contract/contactForm";
import ContactInfo from "../../components/sections/contract/contactInfo";
import FindUs from "../../components/sections/contract/findUs";
import Faq from "../../components/sections/contract/faq";
// import CtaBanner from "../../components/shared/CtaBanner";
import Container from "../../components/layout/container";

export const metadata = {
  title: "Contact | Boys & Girls Brigade Surulere",
  description:
    "Get in touch with the Boys & Girls Brigade, Surulere Chapter. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

            {/* ── Left: Form + Map ── */}
            <div className="flex flex-col gap-8">
              <ContactForm />
              <FindUs />
            </div>

            {/* ── Right: Info + FAQ ── */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-24">
              <ContactInfo />
              <Faq />
            </div>

          </div>
        </Container>
      </section>

      {/* <CtaBanner
        icon={<Users size={22} className="text-white" />}
        heading="Start Your Brigade Journey"
        subheading="We can't wait to welcome you to the family."
        buttonLabel="Contact the Team"
        buttonHref="/contact"
      /> */}
    </main>
  );
}



// import PageHero from "../../components/layout/page-hero";

// export default function ContactPage() {
//   return (
//     <>
//       <PageHero
//         title="Contact"
//         subtitle="Get in touch with our team."
//       />

//       <section className="section">

//         <div className="container max-w-3xl">

//           <form className="space-y-4">

//             <input
//               placeholder="Name"
//               className="w-full border p-4 rounded-xl"
//             />

//             <input
//               placeholder="Email"
//               className="w-full border p-4 rounded-xl"
//             />

//             <textarea
//               placeholder="Message"
//               className="w-full border p-4 rounded-xl h-40"
//             />

//             <button
//               className="
//               bg-[#0E2A47]
//               text-white
//               px-6
//               py-3
//               rounded-xl
//               "
//             >
//               Send Message
//             </button>

//           </form>

//         </div>

//       </section>
//     </>
//   );
// }