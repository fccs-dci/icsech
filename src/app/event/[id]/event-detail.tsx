"use client";

import { DateTime } from "luxon";
import type { Event } from "@/lib/types";

function ClockIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function AlignLeftIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );
}

export default function EventDetail({ event }: { event: Event }) {
  const localStartingTime = DateTime.fromISO(
    event.field_starting_time
  ).toLocaleString(DateTime.DATETIME_FULL);

  const eventTimeZoneStartingTime = event.field_time_zone
    ? DateTime.fromISO(event.field_starting_time)
        .setZone(event.field_time_zone)
        .toLocaleString(DateTime.DATETIME_FULL)
    : null;

  const rows: {
    icon: React.ReactNode;
    label: string;
    content: React.ReactNode;
  }[] = [];

  // Date Time
  rows.push({
    icon: <ClockIcon />,
    label: "Starting Time 活動開始時間",
    content: (
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 rounded-lg bg-blue-50 p-3">
          <p className="font-bold text-sm">{localStartingTime}</p>
          <p className="text-xs text-gray-500 mt-1">(In your time zone. 閣下所在時區）</p>
        </div>
        {eventTimeZoneStartingTime && (
          <div className="flex-1 rounded-lg bg-amber-50 p-3">
            <p className="font-bold text-sm">{eventTimeZoneStartingTime}</p>
            <p className="text-xs text-gray-500 mt-1">(In the event local time zone. 活動所在時區)</p>
          </div>
        )}
      </div>
    ),
  });

  // Participants
  if (event.field_speakers) {
    rows.push({
      icon: <UsersIcon />,
      label: "Participants 嘉賓",
      content: (
        <div
          className="text-sm text-gray-900"
          dangerouslySetInnerHTML={{ __html: event.field_speakers.processed }}
        />
      ),
    });
  }

  // Organizers
  if (event.field_organizers) {
    rows.push({
      icon: <BuildingIcon />,
      label: "Organizers 主協辦機構",
      content: (
        <div
          className="text-sm text-gray-900"
          dangerouslySetInnerHTML={{ __html: event.field_organizers.processed }}
        />
      ),
    });
  }

  // Event mode
  if (event.field_event_mode) {
    rows.push({
      icon: <MonitorIcon />,
      label: "Mode 活動形式",
      content: <span className="text-sm text-gray-900">{event.field_event_mode}</span>,
    });
  }

  // Venue
  if (event.field_event_venue) {
    rows.push({
      icon: <MapPinIcon />,
      label: "Venue 地點",
      content: <span className="text-sm text-gray-900">{event.field_event_venue}</span>,
    });
  }

  // Languages
  if (event.field_event_language) {
    rows.push({
      icon: <GlobeIcon />,
      label: "Languages 語言",
      content: <span className="text-sm text-gray-900">{event.field_event_language}</span>,
    });
  }

  // Description
  if (event.field_description) {
    rows.push({
      icon: <AlignLeftIcon />,
      label: "Description 詳情",
      content: (
        <div
          className="text-sm text-gray-900"
          dangerouslySetInnerHTML={{ __html: event.field_description.processed }}
        />
      ),
    });
  }

  // Registration & Video Recording
  rows.push({
    icon: <ClipboardIcon />,
    label: "Registration & Video Recording 登記與錄影",
    content: (
      <div className="text-sm text-gray-900">
        {event.field_registration ? (
          <p>Registration is required. 活動需要登記。</p>
        ) : (
          <p>Registration is not required. 無需登記。</p>
        )}
        {event.field_event_record ? (
          <p>The event is recorded. 活動過程將會錄影。</p>
        ) : (
          <p>The event is not recorded. 活動過程不會錄影。</p>
        )}
      </div>
    ),
  });

  // Website
  if (event.field_event_website?.uri) {
    rows.push({
      icon: <LinkIcon />,
      label: "Website 網頁",
      content: (
        <a
          href={event.field_event_website.uri}
          target="_blank"
          rel="noreferrer"
        >
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
            Visit the Event Website 前往網頁
          </button>
        </a>
      ),
    });
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-primary">
          {event.title.toUpperCase()}
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {rows.map((row, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt className="text-sm font-medium text-gray-500 flex items-center gap-2">
                {row.icon}
                {row.label}
              </dt>
              <dd className="mt-1 sm:mt-0 sm:col-span-2">
                {row.content}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
