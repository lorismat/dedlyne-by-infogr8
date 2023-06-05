<template>
  <div>
    <SectionTitle title-page="Confirmation" />
  </div>

  <div class="my-2 p-4 border-b-2 border-gray-500">
    {{ formObject.firstName }}
    {{ formObject.lastName }}
    {{ formObject.telephone }}
    {{ formObject.email }}
    {{ formObject.companyName }}
    {{ formObject.companyNumber }}
    {{ formObject.businessCreationDate }}
    {{ formObject.businessDescription }}
    {{ formObject.submissionDate }}
    {{ formObject.postCode }}
    {{ formObject.city }}
    {{ formObject.flatNumber }}
  </div>

  <div class="my-2 p-4 border-b-2 border-gray-500">
    {{ formObject.netZeroQ1 }}
    {{ formObject.netZeroTargetDate }}
    {{ formObject.netZeroQ2 }}
    {{ formObject.netZeroQ3 }}
    {{ formObject.netZeroQ4 }}
    {{ formObject.netZeroQ5 }}
    {{ formObject.netZeroQ6 }}
    {{ formObject.netZeroQ7 }}
    {{ formObject.netZeroQ8 }}
    {{ formObject.netZeroQ9 }}
    {{ formObject.netZeroProvide }}
  </div>

  <div class="my-2 p-4 border-b-2 border-gray-500">
    {{ formObject.equalityPercentage }}
    {{ formObject.equalityQ1 }}
    {{ formObject.equalityQ2 }}
  </div>

  <div class="my-2 p-4 border-b-2 border-gray-500">
    {{ formObject.inclusionHighest }}
    {{ formObject.inclusionLowest }}
    {{ formObject.inclusionQ1 }}
    {{ formObject.inclusionQ2 }}
    {{ formObject.inclusionQ3 }}
    {{ formObject.inclusionQ4 }}
  </div>

  <div class="my-2 p-4 border-b-2 border-gray-500">
    {{ formObject.partnershipQ1 }}
    {{ formObject.partnershipQ2 }}
  </div>

  <div class="my-20 p-4">
    <div class="text-2xl py-4">
      Results
    </div>

    <div>
      Submission Date: <span class="font-bold">{{ todayDate }}</span>
    </div>

    

    <div class="flex justify-center">

      <div id="plot-overall" class="plot-big">
      </div>

    </div>

    <div class="grid grid-cols-2 gap-2">

      <div id="plot-net-zero" class="plot">
      </div>

      <div id="plot-inclusion" class="plot">
      </div>

      <div id="plot-equality" class="plot">
      </div>

      <div id="plot-partnership" class="plot">
      </div>

    </div>
    
  </div>

  <div id='toPartnership' class='pb-12 text-center cursor-pointer underline p-2 text-greenmedium hover:no-underline'>
    Previous
  </div>

</template>

<script setup>
import * as echarts from 'echarts';

const todayDate = ref(new Date().toLocaleDateString());
const formObject = useState('activeformObjectPage');
const activePage = useState('activePage');

onMounted(() => {
  activePage.value = 0;

  document.getElementById("toPartnership").addEventListener ("click", myFunction, false);
  async function myFunction() {
    await navigateTo('/')
  }

  drawGraph('plot-overall', 'Overall', 2049);
  drawGraph('plot-net-zero', 'Net Zero Dedlyne', 2055);
  drawGraph('plot-inclusion', 'Inclusion Dedlyne', 2049);
  drawGraph('plot-equality', 'Societal Dedlyne', 2055);
  drawGraph('plot-partnership', 'Partnership Dedlyne', 2104);
});
</script>