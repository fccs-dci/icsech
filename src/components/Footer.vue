<!-- https://tailwindui.com/components/marketing/sections/footers -->
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class=" bg-white fixed-bottom bottom-0 inset-x-0">
    <p class="mt-2 mb-2 text-center text-base text-red-900">
      &copy; 2020-{{ getYear }}
      <a href="https://fairbank.fas.harvard.edu" target="_blank"
        >Fairbank Center for Chinese Studies</a
      >. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  computed: {
    getYear: function() {
      let today = new Date();
      return today.getFullYear();
    },
  },
};
</script>
