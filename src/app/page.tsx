import Link from "next/link";

const supportLinks = [
  {
    name: "Browse Events",
    href: "/events/",
    description: "Browse forthcoming Chinese studies events.",
    action: "Browse",
  },
  {
    name: "Search Events",
    href: "/search/",
    description:
      "Search past and future events with speakers, organizers, and description.",
    action: "Search",
  },
  {
    name: "Weekly Digest",
    href: "/weekly-digest/",
    description: "Keeping update with the weekly digest listing events.",
    action: "Subscribe",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative justify-center pb-32 bg-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-red-650" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl lg:text-4xl">
            International China Studies Events Clearing-house
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            The Fairbank Center for Chinese Studies at Harvard University
            provides the International China Studies Event Clearing-house as a
            service to the Chinese Studies community world-wide.
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
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
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
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
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
