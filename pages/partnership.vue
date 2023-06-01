<template>
  <div>
    <SectionTitle title-page="Partnership" />
    <div>
      <SectionSummary :fillSection="5" />
    </div>
  </div>
</template>

<script setup>

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 5;
});

</script>