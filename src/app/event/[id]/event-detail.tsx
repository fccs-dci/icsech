"use client";

import { DateTime } from "luxon";
import type { Event } from "@/lib/types";

export default function EventDetail({ event }: { event: Event }) {
  const localStartingTime = DateTime.fromISO(
    event.field_starting_time
  ).toLocaleString(DateTime.DATETIME_FULL);

  const eventTimeZoneStartingTime = event.field_time_zone
    ? DateTime.fromISO(event.field_starting_time)
        .setZone(event.field_time_zone)
        .toLocaleString(DateTime.DATETIME_FULL)
    : null;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-primary">
          {event.title.toUpperCase()}
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {/* Date Time */}
          <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Starting Time 活動開始時間
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div>
                <span>
                  <p className="font-bold">{localStartingTime}</p>
                  <p>(In your time zone. 閣下所在時區）</p>
                </span>
                {eventTimeZoneStartingTime && (
                  <span>
                    <p className="font-bold">{eventTimeZoneStartingTime}</p>
                    <p>(In the event local time zone. 活動所在時區)</p>
                  </span>
                )}
              </div>
            </dd>
          </div>

          {/* Participants */}
          {event.field_speakers && (
            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Participants 嘉賓
              </dt>
              <dd
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                dangerouslySetInnerHTML={{
                  __html: event.field_speakers.processed,
                }}
              />
            </div>
          )}

          {/* Organizers */}
          {event.field_organizers && (
            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Organizers 主協辦機構
              </dt>
              <dd
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                dangerouslySetInnerHTML={{
                  __html: event.field_organizers.processed,
                }}
              />
            </div>
          )}

          {/* Event mode */}
          {event.field_event_mode && (
            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Mode 活動形式
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {event.field_event_mode}
              </dd>
            </div>
          )}

          {/* Venue */}
          {event.field_event_venue && (
            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Venue 地點
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {event.field_event_venue}
              </dd>
            </div>
          )}

          {/* Languages */}
          {event.field_event_language && (
            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Languages 語言
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {event.field_event_language}
              </dd>
            </div>
          )}

          {/* Description */}
          {event.field_description && (
            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Description 詳情
              </dt>
              <dd
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                dangerouslySetInnerHTML={{
                  __html: event.field_description.processed,
                }}
              />
            </div>
          )}

          {/* Registration & Video Recording */}
          <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Registration &amp; Video Recording 登記與錄影
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div>
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
            </dd>
          </div>

          {/* Website */}
          {event.field_event_website?.uri && (
            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Website 網頁
              </dt>
              <dd>
                <a
                  href={event.field_event_website.uri}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Visit the Event Website 前往網頁
                  </button>
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
