import EventsHero from "../../components/sections/events/eventsHero";
import EventsPageContent from "../../components/sections/events/eventsPageContent";

export const metadata = {
  title: "Events | Boys & Girls Brigade Surulere",
  description:
    "Upcoming gatherings, activities and past events for the Boys & Girls Brigade, Surulere Chapter.",
};

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <EventsPageContent />
    </main>
  );
}
