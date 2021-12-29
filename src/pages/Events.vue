<template>
  <Layout>
    <!-- -->
    <div>
      <div class="relative bg-red-800">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-y-3 lg:grid-cols-3">
            <!-- past record switcher -->
            <div class="grid grid-cols-1 gap-2">
              <div>
                <span>
                  <input
                    class="form-checkbox h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-red-600"
                    type="checkbox"
                    :value="pastRecords"
                    @click="pastRecords = $event.target.checked"
                    id="pastRecordCheck"
                  />
                  <label
                    class="form-check-label inline-block text-white text-sm px-1"
                    for="pastRecordCheck"
                    >Include past events?
                  </label>
                </span>
              </div>

              <!-- Dropdown menu:  -->
            </div>
          </div>

          <!-- search -->
          <div class="grid">
            <input
              id="search"
              v-model="searchTerm"
              class="input relative py-2 px-3 rounded-lg focus-within:ring-red-500 focus-within:border-white"
              type="text"
              placeholder="Search people, organizers, and event description. (English only at this moment.)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Rendering cards with the data -->
    <div
      class="grid grid-cols-1 gap-4 justify-middle sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        class="container col-auto"
        v-for="event in sortedResult"
        key="event.node.id"
      >
        <Card
          :id="event.node.id"
          :title="event.node.title"
          :starting_time="event.node.field_starting_time"
          :description="event.node.field_description"
          :mode="event.node.field_mode"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import Card from "~/components/Card.vue";
import FlexSearch from "flexsearch";

export default {
  components: {
    Card,
  },
  data() {
    return {
      searchTerm: "",
      pastRecords: false,
      search: null,
    };
  },
  computed: {
    // Results

    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 2) return this.allData;
      const results = this.search.search({
        query: searchTerm,
      });
      console.log(results);
      return results;
    },
    allData: function() {
      return this.$page.events.edges;
    },
    filteredResult: function() {
      return this.searchResults.filter((item) => {
        let start = new Date();
        let firstDate = new Date("2020-01-01T00:00:00");
        if (this.pastRecords) {
          return start.setTime(firstDate.getTime());
        }
        let eventDate = new Date(item.node.field_starting_time);
        if (eventDate >= start) {
          return true;
        }
      });
    },
    sortedResult: function() {
      return this.filteredResult.sort(
        (a, b) =>
          new Date(a.node.field_starting_time) -
          new Date(b.node.field_starting_time)
      );
    },
    paginationInfo: function() {
      return this.sortedResult.count();
    },
  },
  async mounted() {
    // Some flexsearch options, and helper functions
    const { flexsearch, loadIndex } = this.$flexsearch;
    // Create a flexsearch instance, and load our config options, plus our custom tokenizer function
    const search = new FlexSearch({
      ...flexsearch,
      tokenize: function(str) {
        const cjkItems = str.replace(/[\x00-\x7F]/g, "").split("");
        const asciiItems = str.replace(/[^\x00-\x7F]/g, "").split(/\W+/);
        return cjkItems.concat(asciiItems);
      },
    });
    // Make search available on this
    this.search = search;
    // Load our index data into flexsearch
    await loadIndex(search);
  },
};
</script>

<page-query>
query {
  events: allDrupalNodeEvent(sort: [{ by: "date", order: ASC}]) {
    edges {
      node {
        id
        title
        field_starting_time
        field_speakers {
          processed
          value
        }
        field_organizers {
          processed
          value
        }
        field_event_mode
        field_event_category
        field_registration
        field_description {
          processed
          value
        }
      }
    }
  }
}

</page-query>
