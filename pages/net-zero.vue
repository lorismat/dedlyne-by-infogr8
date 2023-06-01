<template>
  <div>
    <SectionTitle title-page="Net Zero" />
    <div>
      <SectionSummary :fillSection="2" />
    </div>
  </div>
</template>

<script setup>

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 2;
});

</script>