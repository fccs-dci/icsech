import { notFound } from "next/navigation";
import { getEventYears } from "@/lib/events";
import EventsArchive from "../events-archive";

export function generateStaticParams() {
  return getEventYears().map((year) => ({ year }));
}

export default async function EventsByYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  if (!getEventYears().includes(year)) {
    notFound();
  }

  return <EventsArchive year={year} />;
}
