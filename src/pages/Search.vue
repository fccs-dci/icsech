<template>
  <Layout>
    <div>
      <ais-instant-search
        :search-client="searchClient"
        index-name="dev_DRUPALEVENTS"
        class="text-xs"
        :stalled-search-delay="2000"
      >
        <ais-search-box />
        <ais-powered-by class="justify-end" />
        <div class="grid grid-cols-1">
          <div>
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
