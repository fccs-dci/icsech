<template>
  <Layout>
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

    allData: function() {
      return this.$page.events.edges;
    },
    filteredResult: function() {
      return this.allData.filter((item) => {
        let start = new Date();
        let firstDate = new Date("2020-01-01T00:00:00");
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
