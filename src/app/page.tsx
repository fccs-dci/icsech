import Link from "next/link";
import SunsetNotice from "@/components/SunsetNotice";

const supportLinks = [
  {
    name: "Browse Events",
    href: "/events/",
    description: "Browse the archive of China studies events from 2020 to 2026, newest first.",
    action: "Browse",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    name: "Search Events",
    href: "/search/",
    description:
      "Search the archive by title, speakers, organizers, and description.",
    action: "Search",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    name: "About the Project",
    href: "/about/",
    description: "Read how the Clearing-house began in 2020 and why it was sunset in 2026.",
    action: "Read more",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <SunsetNotice />

      {/* Hero */}
      <div className="relative justify-center pb-32 bg-gradient-to-br from-primary to-red-950">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl lg:text-4xl">
            International China Studies Events Clearing-house
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            From 2020 to 2026, the Fairbank Center for Chinese Studies at
            Harvard University provided the International China Studies Events
            Clearing-house as a service to the China studies community
            world-wide. The project has now ended. This site remains online as
            an archive and is no longer updated.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Different features
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl hover:-translate-y-1 transition-transform"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="mb-4">{link.icon}</div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link
                  href={link.href}
                  className="text-base font-medium text-primary hover:text-red-900"
                >
                  {link.action}
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
