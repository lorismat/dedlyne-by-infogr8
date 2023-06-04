<template>
  <div class="mb-10 w-screen max-w-screen-lg mx-auto">
    <div class="py-4 text-2xl font-bold flex justify-center">
      <TheTitle />
    </div>
    <div class="w-full">
      <div class="border-2 border-greenmedium shadow-xl rounded-xl">
        <TheHeader />
        <NuxtPage />
      </div>
    </div>
    <div class="py-2 flex justify-center">
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
const formObject = useState('activeformObjectPage', () => {
  const obj = {
    'companyName': 'Init',
    'companyNumber': 'Init'
  }
  return obj
});
</script>