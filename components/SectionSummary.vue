<template>
  <div class="p-12 flex justify-center">
    <div class="flex">
      <svg class="w-4 m-1" viewBox="0 0 100 100"><circle :fill="fillSection == 1 ? 'blue' : 'green'" cx="50" cy="50" r="50" /></svg>
      <svg class="w-4 m-1" viewBox="0 0 100 100"><circle :fill="fillSection == 2 ? 'blue' : 'green'" cx="50" cy="50" r="50" /></svg>
      <svg class="w-4 m-1" viewBox="0 0 100 100"><circle :fill="fillSection == 3 ? 'blue' : 'green'" cx="50" cy="50" r="50" /></svg>
      <svg class="w-4 m-1" viewBox="0 0 100 100"><circle :fill="fillSection == 4 ? 'blue' : 'green'" cx="50" cy="50" r="50" /></svg>
      <svg class="w-4 m-1" viewBox="0 0 100 100"><circle :fill="fillSection == 5 ? 'blue' : 'green'" cx="50" cy="50" r="50" /></svg>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  fillSection: Number
})

</script>