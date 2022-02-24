<template>
  <div class="flex w-full h-full">
    <div class="block py-4 px-8 bg-white shadow-lg rounded-lg my-10">
      <div class="justify-start border-b border-red-800 w-full">
        <h3 class="text-primary font-semibold">
          {{ title.toUpperCase() }}
        </h3>
      </div>
      <div v-if="speakers">
        <p class="text-gray-800 text-sm">
          {{ speakers.value.toUpperCase() | stripHTML }}
        </p>
      </div>
      <div>
        <p class="text-gray-500 text-sm">
          {{
            this.$DateTime
              .fromISO(starting_time)
              .toLocaleString(this.$DateTime.DATETIME_FULL)
          }}
        </p>
      </div>
      <div v-if="description">
        <p class="line-clamp-5 text-sm text-gray-900 mt-4">
          {{ description.value | stripHTML }}
        </p>
      </div>
      <div class="flex justify-end mt-4">
        <g-link :to="{ path: '/event/' + id }" target="_blank"
          ><button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-primary shadow-sm text-sm font-medium rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
          >
            Detail 詳情
          </button>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "starting_time", "speakers", "description"],
  filters: {
    stripHTML: function(string) {
      return string.replace(/<\/?[^>]+>/gi, "").replace(/&nbsp;/gi, "");
    },
  },
};
</script>
