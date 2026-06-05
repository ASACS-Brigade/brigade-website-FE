import Container from "../layout/container";
import SectionHeader from "../layout/section-header";

const programs = [
  {
    title: "Children Brigade",
    description:
      "Building faith and discipline from an early age.",
  },
  {
    title: "Youth Development",
    description:
      "Leadership training, mentorship and service.",
  },
  {
    title: "Community Outreach",
    description:
      "Impacting lives through service projects.",
  },
];

export default function Programs() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeader
          title="Our Programs"
          subtitle="Designed to nurture leadership, faith and community service."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">
                {program.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}