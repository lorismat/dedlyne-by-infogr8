<template>
  <div>
    <SectionTitle title-page="Confirmation" />
  </div>

  <div>
    {{ formObject.companyName }}
  </div>
</template>

<script setup>

const formObject = useState('activeformObjectPage');

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 0;
});
</script>