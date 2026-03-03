import Link from "next/link";
import { DateTime } from "luxon";
import { stripHtml } from "@/lib/strip-html";
import type { Event } from "@/lib/types";

export default function EventCard({ event }: { event: Event }) {
  const formattedTime = DateTime.fromISO(event.field_starting_time).toLocaleString(
    DateTime.DATETIME_FULL
  );

  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full py-4 px-8 bg-white shadow-lg rounded-lg border-l-4 border-primary">
        <div className="border-b border-red-800 w-full pb-2">
          <h3 className="text-primary font-semibold uppercase">
            {event.title}
          </h3>
        </div>
        {event.field_speakers && (
          <div className="mt-2 flex items-start gap-1.5">
            <svg className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p className="text-gray-800 text-sm">
              {stripHtml(event.field_speakers.value)}
            </p>
          </div>
        )}
        <div className="mt-2 flex items-center gap-1.5">
          <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-500 text-sm">{formattedTime}</p>
        </div>
        {event.field_description && (
          <div className="flex-1 mt-4">
            <p className="line-clamp-5 text-sm text-gray-900">
              {stripHtml(event.field_description.value)}
            </p>
          </div>
        )}
        <div className="flex justify-end mt-4">
          <Link href={`/event/${event.id}/`} target="_blank">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition-colors"
            >
              Detail 詳情
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
