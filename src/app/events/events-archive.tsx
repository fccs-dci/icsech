import Link from "next/link";
import EventsGrid from "./events-grid";
import { getEventsByYear, getEventYears } from "@/lib/events";

export default function EventsArchive({ year }: { year: string }) {
  const years = getEventYears();
  const events = getEventsByYear(year);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto mb-8">
        <h1>
          <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
            Archive 檔案
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Events in {year}
          </span>
        </h1>
        <p className="mt-4 text-center text-gray-500">
          This site is no longer updated. Events are listed newest first.
          Choose a year to browse the full archive.
        </p>
      </div>

      <nav
        aria-label="Browse events by year"
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {years.map((y) => {
          const isCurrent = y === year;
          return (
            <Link
              key={y}
              href={y === years[0] ? "/events/" : `/events/${y}/`}
              aria-current={isCurrent ? "page" : undefined}
              className={
                isCurrent
                  ? "px-4 py-2 rounded-md text-sm font-medium bg-primary text-white"
                  : "px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-red-800 hover:bg-secondary"
              }
            >
              {y}
            </Link>
          );
        })}
      </nav>

      <p className="text-center text-sm text-gray-500 mb-6">
        {events.length} events
      </p>

      <EventsGrid events={events} />
    </div>
  );
}
