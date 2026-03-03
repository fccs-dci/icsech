import { getAllEvents } from "@/lib/drupal";
import EventsGrid from "./events-grid";

export default async function EventsPage() {
  const events = await getAllEvents();

  return <EventsGrid events={events} />;
}
