<template>
  <div class="pb-4 pt-2 flex justify-center">
    <div class="flex">
      
      <!-- 
        <NuxtLink to="/">
          <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'blue'" :fill="fillSection == 1 ? '#333' : '#fff'" cx="75" cy="75" r="50" /></svg>
        </NuxtLink>
      -->

      <div to="/">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'#629642'" :fill="fillSection == 1 ? '#629642' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </div>
      <div to="/net-zero">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'#629642'" :fill="fillSection == 2 ? '#629642' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </div>
      <div to="/equality">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'#629642'" :fill="fillSection == 3 ? '#629642' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </div>
      <div to="/inclusion">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'#629642'" :fill="fillSection == 4 ? '#629642' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </div>
      <div to="/partnership">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'#629642'" :fill="fillSection == 5 ? '#629642' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </div>
      
      
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  fillSection: Number
})

</script>