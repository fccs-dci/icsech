"use client";

import EventCard from "@/components/EventCard";
import type { Event } from "@/lib/types";

export default function EventsGrid({ events }: { events: Event[] }) {
  const now = new Date();

  const futureEvents = events
    .filter((event) => new Date(event.field_starting_time) >= now)
    .sort(
      (a, b) =>
        new Date(a.field_starting_time).getTime() -
        new Date(b.field_starting_time).getTime()
    );

  return (
    <div className="grid grid-cols-1 gap-4 justify-middle sm:grid-cols-2 lg:grid-cols-3 mx-auto">
      {futureEvents.map((event) => (
        <div key={event.id} className="container col-auto">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
}
