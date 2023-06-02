<template>
  <header class="pb-4">
    <nav>
      <ul class="grid justify-items-stretch grid-cols-5 text-center">
        <!-- 
          <li :class="activePage == 1 ? activePageClass : basicPageClass"><NuxtLink class="p-2" to="/">Company Information</NuxtLink></li>
        -->
        <li :style="{ 'border-radius':'10px 0px 0px 0px'}" :class="activePage == 1 ? activePageClass : basicPageClass"><div class="p-4" to="/">Company Information</div></li>
        <li :style="{ 'border-radius':'0px'}" :class="activePage == 2 ? activePageClass : basicPageClass"><div class="p-4" to="/net-zero">Net Zero</div></li>
        <li :style="{ 'border-radius':'0px'}" :class="activePage == 3 ? activePageClass : basicPageClass"><div class="p-4" to="/equality">Equality</div></li>
        <li :style="{ 'border-radius':'0px'}" :class="activePage == 4 ? activePageClass : basicPageClass"><div class="p-4" to="/inclusion">Inclusion</div></li>
        <li :style="{ 'border-radius':'0px 10px 0px 0px'}" :class="activePage == 5 ? activePageClass : basicPageClass"><div class="p-4" to="/partnership">Partnership</div></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

const activePageClass = "border-b-2 text-white bg-greenmedium border-greenmedium hover:transparent";
// const basicPageClass = "border-b-2 border-transparent hover:border-black cursor-pointer";
const basicPageClass = "border-b-2 text-greenmedium border-greenmedium";

const activePage = useState('activePage', () => 1 );
watch(() => activePage.value, (newValue, oldValue) => {
  console.log(newValue);
})

</script>