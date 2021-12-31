// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { DateTime } from "luxon";
import InstantSearch from "vue-instantsearch";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // Use Luxon.js library to create
  Vue.prototype.$DateTime = DateTime;
  // Use InstantSearch
  Vue.use(InstantSearch);
  // Filter to strip HTML
  Vue.filter("stripHTML", function(value) {
    const div = document.createElement("div");
    div.innerHTML = value;
    const text = div.textContent || div.innerText || "";
    return text;
  });
}
