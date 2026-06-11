import { Calendar } from "lucide-react";
import EventsHero from "../../components/sections/events/eventsHero";
import FeaturedEvent from "../../components/sections/events/featuredEvent";
import EventCalendar from "../../components/sections/events/eventCalendar";
import UpcomingEvents from "../../components/sections/events/upcomingEvents";
import PastEvents from "../../components/sections/events/pastEvents";
import Container from "../../components/layout/container";
import CtaBanner from "../../components/shared/ctaBanner";

export const metadata = {
  title: "Events | Boys & Girls Brigade Surulere",
  description:
    "Upcoming gatherings, activities and past events for the Boys & Girls Brigade, Surulere Chapter.",
};

export default function EventsPage() {
  return (
    <main>
      <EventsHero />

      {/* Featured + Calendar side-by-side on large screens */}
      <section className="py-0">
        
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">

            {/* Left: Featured Event */}
            <div>
              <FeaturedEvent />
            </div>


            {/* Right: Calendar */}
            <div className="lg:sticky lg:top-24">
              <Container>
              <h2 className="text-xl font-bold text-primary mb-4">
                Event Calendar
              </h2>
              <EventCalendar />
              </Container>
            </div>

          </div>
        {/* </Container> */}
      </section>

      <UpcomingEvents />
      <PastEvents />

      <CtaBanner
        icon={<Calendar size={22} className="text-white" />}
        heading="See Event Schedule"
        subheading="Don't miss out on things happening in the Brigade."
        buttonLabel="View All Events"
        buttonHref="/events/all"
      />
    </main>
  );
}





// import PageHero from "../../components/layout/page-hero";

// export default function EventsPage() {
//   return (
//     <>
//       <PageHero
//         title="Events"
//         subtitle="Upcoming activities and programs."
//       />
//     </>
//   );
// }