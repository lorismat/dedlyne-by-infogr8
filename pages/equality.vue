<template>
  <div>
    <SectionTitle title-page="Equality" />
    <div>
      <SectionSummary :fillSection="3"/>
    </div>
  </div>
</template>

<script setup>

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 3;
});

</script>