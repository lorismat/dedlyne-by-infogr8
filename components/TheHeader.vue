<template>
  <header class="p-4">
    <nav>
      <ul class="flex justify-between">
        <li :class="activePage == 1 ? activePageClass : basicPageClass"><NuxtLink class="p-2" to="/">Company Information</NuxtLink></li>
        <li :class="activePage == 2 ? activePageClass : basicPageClass"><NuxtLink class="p-2" to="/net-zero">Net Zero</NuxtLink></li>
        <li :class="activePage == 3 ? activePageClass : basicPageClass"><NuxtLink class="p-2" to="/equality">Equality</NuxtLink></li>
        <li :class="activePage == 4 ? activePageClass : basicPageClass"><NuxtLink class="p-2" to="/inclusion">Inclusion</NuxtLink></li>
        <li :class="activePage == 5 ? activePageClass : basicPageClass"><NuxtLink class="p-2" to="/partnership">Partnership</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

const activePageClass = "border-b-2 border-black cursor-pointer hover:transparent";
const basicPageClass = "border-b-2 border-transparent hover:border-black cursor-pointer";

const activePage = useState('activePage', () => 1 );
watch(() => activePage.value, (newValue, oldValue) => {
  console.log(newValue);
})

</script>

<style>

</style>