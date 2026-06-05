import PageHero from "../../components/layout/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in touch with our team."
      />

      <section className="section">

        <div className="container max-w-3xl">

          <form className="space-y-4">

            <input
              placeholder="Name"
              className="w-full border p-4 rounded-xl"
            />

            <input
              placeholder="Email"
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              placeholder="Message"
              className="w-full border p-4 rounded-xl h-40"
            />

            <button
              className="
              bg-[#0E2A47]
              text-white
              px-6
              py-3
              rounded-xl
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </section>
    </>
  );
}