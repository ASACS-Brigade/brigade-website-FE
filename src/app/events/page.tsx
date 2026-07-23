import EventsHero from "../../components/sections/events/eventsHero";
import EventsPageContent from "../../components/sections/events/eventsPageContent";
import { getEventsData } from "../../lib/content-api";

export const metadata = {
  title: "Events | Boys & Girls Brigade Surulere",
  description:
    "Upcoming gatherings, activities and past events for the Boys & Girls Brigade, Surulere Chapter.",
};

export default async function EventsPage() {
  const { events, featuredEvent, upcomingEvents, pastEvents } =
    await getEventsData();

  return (
    <main>
      <EventsHero events={events} />
      <EventsPageContent
        events={events}
        featured={featuredEvent}
        upcoming={upcomingEvents}
        past={pastEvents}
      />
    </main>
  );
}
