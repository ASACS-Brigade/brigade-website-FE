import Container from "../layout/container";
import SectionHeader from "../layout/section-header";
import EventCard from "../cards/event-card";

export default function EventsPreview() {
  return (
    <section className="section bg-slate-50">

      <Container>

        <SectionHeader
          title="Upcoming Events"
          subtitle="Stay informed about upcoming activities."
        />

        <div className="grid md:grid-cols-3 gap-6">

          <EventCard />
          <EventCard />
          <EventCard />

        </div>

      </Container>

    </section>
  );
}