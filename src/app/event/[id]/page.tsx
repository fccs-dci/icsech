import { getAllEvents, getEventById } from "@/lib/events";
import { notFound } from "next/navigation";
import EventDetail from "./event-detail";

export function generateStaticParams() {
  return getAllEvents().map((event) => ({ id: event.id }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  return <EventDetail event={event} />;
}
