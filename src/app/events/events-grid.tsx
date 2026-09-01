import EventCard from "@/components/EventCard";
import type { Event } from "@/lib/types";

export default function EventsGrid({ events }: { events: Event[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 justify-middle sm:grid-cols-2 lg:grid-cols-3 mx-auto">
      {events.map((event) => (
        <div key={event.id} className="container col-auto">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
}
