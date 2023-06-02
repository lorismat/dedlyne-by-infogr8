<template>
  <div class="text-center uppercase py-6 text-greenmedium text-xl">
    {{ titlePage }}
  </div>  
</template>

<script setup>

const props = defineProps({
  titlePage: String
})

</script>