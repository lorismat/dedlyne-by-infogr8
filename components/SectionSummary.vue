<template>
  <div class="p-12 flex justify-center">
    <div class="flex">

      <NuxtLink to="/">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'blue'" :fill="fillSection == 1 ? '#333' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </NuxtLink>
      <NuxtLink to="/net-zero">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'blue'" :fill="fillSection == 2 ? '#333' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </NuxtLink>
      <NuxtLink to="/equality">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'blue'" :fill="fillSection == 3 ? '#333' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </NuxtLink>
      <NuxtLink to="/inclusion">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'blue'" :fill="fillSection == 4 ? '#333' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </NuxtLink>
      <NuxtLink to="/partnership">
        <svg class="w-6 m-1" viewBox="0 0 150 150"><circle :stroke-width="12" :stroke="'blue'" :fill="fillSection == 5 ? '#333' : '#fff'" cx="75" cy="75" r="50" /></svg>
      </NuxtLink>
      
      
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  fillSection: Number
})

</script>