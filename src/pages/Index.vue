<template>
  <Layout>
    <div class="bg-white">
      <!-- Header -->
      <div class="relative justify-center pb-32 bg-primary">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-red-650" aria-hidden="true" />
        </div>
        <div
          class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
        >
          <h1
            class="text-2xl font-extrabold tracking-tight text-white md:text-3xl lg:text-4xl"
          >
            International Chinese Studies Events Clearing-house
          </h1>
          <p class="mt-6 max-w-3xl text-xl text-gray-300">
            The Fairbank Center for Chinese Studies at Harvard University
            provides the International Chinese Studies Event Clearing-house as a
            service to the Chinese Studies community world-wide.
          </p>
        </div>
      </div>

      <!-- Overlapping cards -->
      <section
        class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 class="sr-only" id="contact-heading">Different features</h2>
        <div
          class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8"
        >
          <div
            v-for="link in supportLinks"
            :key="link.name"
            class="flex flex-col bg-white rounded-2xl shadow-xl"
          >
            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
              <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <g-link
                :to="link.href"
                class="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >{{ link.action
                }}<span aria-hidden="true"> &rarr;</span></g-link
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
const supportLinks = [
  {
    name: "Browse Events",
    href: "/events",
    description: "Browse forthcoming Chinese studies events.",
    action: "Browse",
  },
  {
    name: "Search Events",
    href: "/search",
    description:
      "Search past and future events with speakers, organizers, and description.",
    action: "Search",
  },
  {
    name: "Weekly Digest",
    href: "/weekly-digest",
    description: "Keeping update with the weekly digest listing events.",
    action: "Subscribe",
  },
];

export default {
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      supportLinks,
    };
  },
};
</script>
