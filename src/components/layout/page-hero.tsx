import Container from "./container";

export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section
      className="
      bg-[#0E2A47]
      text-white
      py-32
      "
    >
      <Container>

        <h1 className="text-6xl font-bold">

          {title}

        </h1>

        <p className="mt-6 text-xl max-w-2xl">

          {subtitle}

        </p>

      </Container>
    </section>
  );
}