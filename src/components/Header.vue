<!-- https://tailwindui.com/components/marketing/elements/headers -->
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class=" bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="
          w-full
          py-4
          flex
          items-center
          justify-between
          border-b border-white
          lg:border-none
        "
      >
        <div class="flex items-center">
          <g-link to="/">
            <span class="sr-only">Event Database</span>
            <g-image
              class="h-20 w-auto"
              src="~/assets/FC-PrimaryLogo-Red-2x.png"
              alt="Fairbank Center logo"
            />
          </g-link>
          <div class="hidden ml-10 space-x-8 lg:block">
            <g-link
              v-for="link in navigation"
              :key="link.name"
              :to="link.href"
              class="text-base font-medium text-red-800 hover:text-primary"
            >
              {{ link.name }}
            </g-link>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <g-link
          v-for="link in navigation"
          :key="link.name"
          :to="link.href"
          class="text-base font-medium text-red-800 hover:text-primary"
        >
          {{ link.name }}
        </g-link>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: "About 緣起", href: "/about/" },
  { name: "Browse 瀏覽", href: "/events/" },
  { name: "Search 搜尋", href: "/search/" },
  { name: "Digest 週報", href: "/weekly-digest/" },
  { name: "Submit 登記活動", href: "/submit/" },
];

export default {
  data() {
    return {
      navigation,
    };
  },
};
</script>
