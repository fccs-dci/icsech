<template>
  <Layout>
    <div>
      <ais-instant-search
        :search-client="searchClient"
        index-name="dev_DRUPALEVENTS"
        class="text-xs"
      >
        <ais-search-box />
        <div class="grid grid-cols-1">
          <div class="flex justify-center py-2">
            <ais-numeric-menu attribute="starting_time" :items="timeItems">
              <template v-slot="{ items, refine, createURL, sendEvent }">
                <div
                  class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
                >
                  <legend class="sr-only">Time range</legend>
                  <div v-for="item in items" :key="item.value">
                    <input
                      type="radio"
                      :style="{ fontWeight: item.isRefined ? 'bold' : '' }"
                      @click.prevent="refine(item.value)"
                      class="focus:ring-red-500 bg-white focus:bg-red-500 h-4 w-4 text-red-600 border-gray-300"
                    />
                    {{ item.label }}
                  </div>
                </div>
              </template>
            </ais-numeric-menu>
          </div>
          <div class="col-span-2">
            <ais-hits>
              <template v-slot:item="{ item }">
                <g-link
                  :to="{ path: '/event/' + item.objectID }"
                  target="_blank"
                >
                  <div class="grid">
                    <div class="grid-cols-1">
                      <h2 class="text-primary text-lg">{{ item.title }}</h2>
                    </div>
                    <div class="grid-cols-2">
                      <p class="text-gray-500" text-sm>
                        {{ item.organizers.value }}
                      </p>
                      <p>
                        {{ item.speakers.value }}
                      </p>
                    </div>
                  </div></g-link
                >
              </template>
            </ais-hits>
            <ais-pagination class="flex justify-center" />
          </div>
        </div>
      </ais-instant-search>
    </div>
  </Layout>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite-min.css";

export default {
  data() {
    return {
      searchClient: algoliasearch(
        "COIVUY7A28",
        "d35f214bf1152c30583045b4f4955e2c"
      ),
      timeItems: [
        {
          label: "Next 7 days",
          start: this.$DateTime.now().toMillis(),
          end: this.$DateTime
            .now()
            .plus({ days: 7 })
            .toMillis(),
        },
        {
          label: "Next 30 days",
          start: this.$DateTime.now().toMillis(),
          end: this.$DateTime
            .now()
            .plus({ days: 30 })
            .toMillis(),
        },
        {
          label: "All future events",
          start: this.$DateTime.now().toMillis(),
          end: this.$DateTime
            .now()
            .plus({ years: 30 })
            .toMillis(),
        },
        { label: "All past events", end: this.$DateTime.now().toMillis() },
      ],
    };
  },
  methods: {
    getStaticValues: (items) => {
      const staticValues = "All future events";
      return staticValues.map((value) => {
        const item = items.find((item) => item.label === value);
        return (
          item || {
            label: value,
          }
        );
      });
    },
  },
};
</script>
