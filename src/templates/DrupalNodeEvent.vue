<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Layout>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-primary">
          {{ $page.drupalNodeEvent.title.toUpperCase() }}
        </h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>

                    <!-- Date Time -->
          <div
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Starting Time 活動開始時間
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div>
                <span
                  ><p class="font-bold">
                    {{ localStartingTime }}
                  </p>
                  <p>(In your time zone. 閣下所在時區）</p>
                </span>
                <span v-if="$page.drupalNodeEvent.field_time_zone">
                  <p class="font-bold">
                    {{ eventTimeZoneStartingTime }}</p> 
                    <p></p>(In the event local time
                    zone. 活動所在時區)
                  </p>
                </span>
              </div>
            </dd>
          </div>

          <!-- People row -->
          <div
            v-if="$page.drupalNodeEvent.field_speakers"
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Participants 嘉賓
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span
                v-html="$page.drupalNodeEvent.field_speakers.processed"
              ></span>
            </dd>
          </div>

          <!-- Organizers row -->
          <div
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt
              v-if="$page.drupalNodeEvent.field_organizers"
              class="text-sm font-medium text-gray-500"
            >
              Organizers 主協辦機構
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span
                v-html="$page.drupalNodeEvent.field_organizers.processed"
              ></span>
            </dd>
          </div>

          <!-- Event mode -->
          <div
            v-if="$page.drupalNodeEvent.field_event_mode"
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Mode 活動形式
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ $page.drupalNodeEvent.field_event_mode }}
            </dd>
          </div>

          <!-- Venue/address row -->
          <div
            v-if="$page.drupalNodeEvent.field_event_venue"
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Venue 地點
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div>
                <span>{{ $page.drupalNodeEvent.field_event_venue }}</span>
              </div>
            </dd>
          </div>

                    <!-- Event langauges -->
          <div
            v-if="$page.drupalNodeEvent.field_event_language"
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Langauges 語言
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ $page.drupalNodeEvent.field_event_language }}
            </dd>
          </div>

          <!-- Event description -->
          <div
            v-if="$page.drupalNodeEvent.field_description"
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Description 詳情
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span
                v-html="$page.drupalNodeEvent.field_description.processed"
              ></span>
            </dd>
          </div>

          <!-- Registration/ Record -->
          <div
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Registration & Video Recording 登記與錄影
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div>
                <span
                  ><p v-if="$page.drupalNodeEvent.field_registration">
                    Registration is required. 活動需要登記。
                  </p>
                  <p v-else>Registration is not required. 無需登記。</p>
                  <p v-if="$page.drupalNodeEvent.field_record">
                    The event is recorded. 活動過程將會錄影。
                  </p>
                  <p v-else>The event is not recorded. 活動過程不會錄影。</p>
                </span>
              </div>
            </dd>
          </div>

          <!-- Website -->
          <div
            class="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4
            sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Website 網頁
            </dt>
            <dt>
              <a
                :href="$page.drupalNodeEvent.field_event_website.uri"
                target="_blank"
              >
                <button
                  class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Visit the Event Website 前往網頁
                </button>
              </a>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  methods: {},
  computed: {
    localStartingTime: function() {
      return this.$DateTime
        .fromISO(this.$page.drupalNodeEvent.field_starting_time)
        .toLocaleString(this.$DateTime.DATETIME_FULL);
    },
    eventTimeZoneStartingTime: function() {
      return this.$DateTime
        .fromISO(this.$page.drupalNodeEvent.field_starting_time)
        .setZone(this.$page.drupalNodeEvent.field_time_zone)
        .toLocaleString(this.$DateTime.DATETIME_FULL);
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
  drupalNodeEvent(id: $id) {
    id
    title
    field_starting_time
    field_speakers {
      processed
    }
    field_organizers {
      processed
    }
    field_event_mode
    field_event_language
    field_event_record
    field_event_category
    field_time_zone
    field_event_website {
      uri
    }
    field_event_record
    field_registration
    field_event_language
    field_event_venue
    field_description {
      processed
    }
  }
}
</page-query>
