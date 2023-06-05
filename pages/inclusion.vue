<template>
  <div>
    <SectionTitle title-page="Inclusion" />


    <FormKit
      incomplete-message=" "
      type="form"
      submit-label="Go to Partnership"
      :submit-attrs="{
        inputClass: 'input-button-submit bg-greenmedium',
        wrapperClass: 'input-wrapper-submit',
        help: '',
        ignore: false
      }"
       @submit="submitHandler"
    >


    <div class="px-12 py-4 grid grid-cols-1 ">

      <FormKit
      v-model="inclusionHighest"
        help=" "
        help-class="formkit-help-percentage"
        placeholder="Description."
        inner-class="formkit-inner-salary"
        wrapper-class="formkit-wrapper-special-percentage"
        label-class="formkit-label-other"
        type="number"
        label="How much does your highest paid employee earn per annum (including overtime and bonuses)? "
        value="0"
        step="1"
        validation="min:0|required"
      />


      <FormKit
      v-model="inclusionLowest"
        help=" "
        help-class="formkit-help-percentage"
        placeholder="Description."
        inner-class="formkit-inner-salary"
        wrapper-class="formkit-wrapper-special-percentage"
        label-class="formkit-label-other"
        type="number"
        label="How much does your lowest paid employee earn per annum (including overtime and bonuses)?"
        value="0"
        step="1"
        validation="min:0|required"
      />

    </div>

    <div class="px-12 py-4 grid grid-cols-2 ">

      <FormKit
      v-model="inclusionQ1"
        type="radio"
        label="Do you have an Anti-Slavery policy?"
        :options="{
          yes: 'Yes',
          no: 'No',
        }"
        :value="'no'"
        inner-class="formkit-inner-radio"
        wrapper-class="formkit-wrapper-radio"
        fieldset-class="formkit-fieldset-radio"
        options-class="formkit-options-radio"
        legend-class="formkit-label-other"
        decorator-class="formkit-decorator-radio"
      />

      <FormKit
      v-model="inclusionQ2"
        type="radio"
        label="Can you provide your Anti-Slavery statement? (If Yes) "
        :options="{
          yes: 'Yes',
          no: 'No',
        }"
        :value="'no'"
        inner-class="formkit-inner-radio"
        wrapper-class="formkit-wrapper-radio"
        fieldset-class="formkit-fieldset-radio"
        options-class="formkit-options-radio"
        legend-class="formkit-label-other"
        decorator-class="formkit-decorator-radio"
      />

      <FormKit
      v-model="inclusionQ3"
        type="radio"
        label="Are you a Living Wage Employer?"
        :options="{
          yes: 'Yes',
          no: 'No',
        }"
        :value="'no'"
        inner-class="formkit-inner-radio"
        wrapper-class="formkit-wrapper-radio"
        fieldset-class="formkit-fieldset-radio"
        options-class="formkit-options-radio"
        legend-class="formkit-label-other"
        decorator-class="formkit-decorator-radio"
      />

      <FormKit
      v-model="inclusionQ4"
        type="radio"
        label="Can you provide evidence of your Living Wage Employer status? (If yes to the above)"
        :options="{
          yes: 'Yes',
          no: 'No',
        }"
        :value="'no'"
        inner-class="formkit-inner-radio"
        wrapper-class="formkit-wrapper-radio"
        fieldset-class="formkit-fieldset-radio"
        options-class="formkit-options-radio"
        legend-class="formkit-label-other"
        decorator-class="formkit-decorator-radio"
      />
    </div>


    </FormKit>


    <div>
      <SectionSummary :fillSection="4"/>
    </div>
  </div>
  
</template>

<script setup>

const formObject = useState('activeformObjectPage');


const btnString = `
    <div id='toEquality' class='cursor-pointer underline p-2 text-greenmedium hover:no-underline'>Previous</div>
`

const inclusionHighest = ref('0');
const inclusionLowest = ref('0');
const inclusionQ1 = ref('no');
const inclusionQ2 = ref('no');
const inclusionQ3 = ref('no');
const inclusionQ4 = ref('no');

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 4;

  const formkitWrapper = document.querySelector('.input-wrapper-submit');
  formkitWrapper.insertAdjacentHTML('afterbegin', btnString);

  document.getElementById ("toEquality").addEventListener ("click", myFunction, false);
  async function myFunction() {
    await navigateTo('/equality')
  }
});

const submitted = ref(false)
const submitHandler = async () => {

  // update all values
  formObject.value.inclusionHighest = inclusionHighest;
  formObject.value.inclusionLowest = inclusionLowest;
  formObject.value.inclusionQ1 = inclusionQ1;
  formObject.value.inclusionQ2 = inclusionQ2;
  formObject.value.inclusionQ3 = inclusionQ3;
  formObject.value.inclusionQ4 = inclusionQ4;

  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
  await navigateTo('/partnership')
}

</script>