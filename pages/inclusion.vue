<template>
  <div>
    <SectionTitle title-page="Inclusion" />
    <div>
      <SectionSummary :fillSection="4"/>
    </div>
  </div>
  
</template>

<script setup>

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 4;
});

</script>