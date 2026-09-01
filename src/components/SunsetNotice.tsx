"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sunset announcement shown on every visit to the landing page.
 * Closes with the button, the Escape key, or a click on the backdrop.
 */
export default function SunsetNotice() {
  const [open, setOpen] = useState(true);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sunset-title"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border-t-8 border-primary"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-8 sm:px-10 text-gray-800 text-base leading-7 space-y-4">
          <h2
            id="sunset-title"
            className="text-2xl font-extrabold tracking-tight text-primary"
          >
            An announcement about the Clearing-house
          </h2>

          <p>Dear users,</p>
          <p>
            Thank you for using the International China Studies Events
            Clearing-house.
          </p>
          <p>
            The Clearing-house was created during the COVID-19 pandemic, when
            scholars and institutions urgently needed new ways to share and
            discover information about online events. Over the past six years,
            it has helped members of the international China studies community
            find lectures, conferences, workshops, and other academic
            opportunities.
          </p>
          <p>
            Since then, technology and communication practices have changed
            considerably. Scholars now have many more ways to discover and share
            event information, and the Clearing-house has reached the end of its
            useful life. I have therefore decided to sunset the project.
          </p>
          <p>
            The public website will remain available as an archive and a record
            of the project, but it will no longer be updated and no new events
            or information will be added.
          </p>
          <p>
            Thank you for using and supporting the Clearing-house over the
            years. I hope it has served as a useful resource for you and the
            wider China studies community.
          </p>
          <p>Best wishes,</p>
          <p className="leading-6">
            Kwok-leong Tang
            <br />
            Creator and Maintainer
            <br />
            International China Studies Events Clearing-house
          </p>
        </div>

        <div className="sticky bottom-0 flex justify-end px-6 py-4 sm:px-10 bg-gray-50 border-t border-gray-200 rounded-b-2xl">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition-colors"
          >
            Continue to the archive
          </button>
        </div>
      </div>
    </div>
  );
}
