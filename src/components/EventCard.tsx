import Link from "next/link";
import { DateTime } from "luxon";
import { stripHtml } from "@/lib/strip-html";
import type { Event } from "@/lib/types";

export default function EventCard({ event }: { event: Event }) {
  const formattedTime = DateTime.fromISO(event.field_starting_time).toLocaleString(
    DateTime.DATETIME_FULL
  );

  return (
    <div className="flex w-full h-full">
      <div className="block py-4 px-8 bg-white shadow-lg rounded-lg my-10">
        <div className="justify-start border-b border-red-800 w-full">
          <h3 className="text-primary font-semibold">
            {event.title.toUpperCase()}
          </h3>
        </div>
        {event.field_speakers && (
          <div>
            <p className="text-gray-800 text-sm">
              {stripHtml(event.field_speakers.value).toUpperCase()}
            </p>
          </div>
        )}
        <div>
          <p className="text-gray-500 text-sm">{formattedTime}</p>
        </div>
        {event.field_description && (
          <div>
            <p className="line-clamp-5 text-sm text-gray-900 mt-4">
              {stripHtml(event.field_description.value)}
            </p>
          </div>
        )}
        <div className="flex justify-end mt-4">
          <Link href={`/event/${event.id}/`} target="_blank">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-primary shadow-sm text-sm font-medium rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
            >
              Detail 詳情
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
