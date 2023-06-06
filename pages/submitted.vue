<template>
  <div>
    <SectionTitle title-page="Confirmation" />
  </div>

  <div class="mx-20 mb-20">
    <div class="w-full shadow-md  border-greenmedium border rounded-lg">
      <div class="uppercase text-center bg-greenmedium rounded-t-md text-white p-4">
        details
      </div>
      <div class="my-2">
        <div v-for="el in arrToShow" class="w-full flex justify-between px-4 py-2 border-b border-gray-300">
          <div class="text-gray-600 capitalize">
            {{ el.field }}
          </div>
          <div class="font-bold">
            {{ el.value }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-20">
    <div class="w-full shadow-md  border-greenmedium border rounded-lg">
      <div class="text-md text-center bg-greenmedium rounded-t-md text-white p-4 flex justify-between">
        <div class="uppercase">
          Results
        </div>
        <div>
          Submitted: <span class="font-bold text-sm">{{ todayDate }}</span>
        </div>
      </div>
      <div class="p-10 text-gray-500">
        Description Results.
      </div>

      <div class="py-2 text-gray-500">
        <div class="flex justify-center">
          <div id="plot-overall" class="plot-big">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 justify-items-center">
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


    </div>
  </div>

  <div id='toPartnership' class='py-12 text-center cursor-pointer underline p-2 text-greenmedium hover:no-underline'>
    Previous
  </div>

</template>

<script setup>
import * as echarts from 'echarts';

const todayDate = ref(new Date().toLocaleDateString());
const formObject = useState('activeformObjectPage');
const activePage = useState('activePage');

console.log(formObject.value.firstName);
/*
  <!-- 

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

  -->
*/

const arrToShow = [
  {
    "field": 'first name',
    "value": formObject.value.firstName
  },
  {
    "field": 'last name',
    "value": formObject.value.lastName
  },
  {
    "field": 'telephone',
    "value": formObject.value.telephone
  },
  {
    "field": 'email',
    "value": formObject.value.email
  },
  {
    "field": 'company name',
    "value": formObject.value.companyName
  },
  {
    "field": 'company number',
    "value": formObject.value.companyNumber
  },
  {
    "field": 'business creation date',
    "value": formObject.value.businessCreationDate
  },
  {
    "field": 'business description',
    "value": formObject.value.description
  },
  {
    "field": 'submission date',
    "value": formObject.value.submissionDate
  },
  {
    "field": 'post code',
    "value": formObject.value.postCode
  },
  {
    "field": 'city',
    "value": formObject.value.city
  },
  {
    "field": 'flat number',
    "value": formObject.value.flatNumber
  },
]

onMounted(() => {
  activePage.value = 0;

  document.getElementById("toPartnership").addEventListener ("click", myFunction, false);
  async function myFunction() {
    await navigateTo('/partnership')
  }

  drawGraph('plot-overall', 'Overall', 2049);
  drawGraph('plot-net-zero', 'Net Zero Dedlyne', 2055);
  drawGraph('plot-inclusion', 'Inclusion Dedlyne', 2049);
  drawGraph('plot-equality', 'Societal Dedlyne', 2055);
  drawGraph('plot-partnership', 'Partnership Dedlyne', 2104);
});
</script>