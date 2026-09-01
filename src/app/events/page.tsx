import { getAllEvents } from "@/lib/drupal";
import EventsGrid from "./events-grid";

export default async function EventsPage() {
  const events = await getAllEvents();

  const futureEvents = events
    .filter((event) => new Date(event.field_starting_time) >= new Date())
    .sort(
      (a, b) =>
        new Date(a.field_starting_time).getTime() -
        new Date(b.field_starting_time).getTime()
    );

  return <EventsGrid events={futureEvents} />;
}
