import { getEventYears } from "@/lib/events";
import EventsArchive from "./events-archive";

/** /events/ shows the newest year. Older years live at /events/<year>/. */
export default function EventsPage() {
  const [newestYear] = getEventYears();
  return <EventsArchive year={newestYear} />;
}
