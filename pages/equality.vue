<template>
  <div>
    <SectionTitle title-page="Equality" />

    <FormKit
      incomplete-message=" "
      type="form"
      submit-label="Go to Inclusion"
      :submit-attrs="{
        inputClass: 'input-button-submit bg-greenmedium',
        wrapperClass: 'input-wrapper-submit',
        help: '',
        ignore: false
      }"
       @submit="submitHandler"
    >

    <div class="px-12 py-4 grid grid-cols-2 ">

      <FormKit
      v-model="equalityPercentage"
        help=""
        help-class="formkit-help-percentage"
        placeholder="Description."
        inner-class="formkit-inner-percentage"
        wrapper-class="formkit-wrapper-special-percentage"
        label-class="formkit-label-other"
        type="number"
        label="What percetage of your Management Team self-identify as women?"
        value="50"
        step="1"
        validation="max:100|min:0|required"
      />

      <div></div>

      <FormKit
      v-model="equalityQ1"
        type="radio"
        label="Do you provide Equality and Inclusion training for your staff?"
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
      v-model="equalityQ2"
        type="radio"
        label="Do you have a Gender Pay Gap policy?"
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
      <SectionSummary :fillSection="3"/>
    </div>
  </div>
</template>

<script setup>

const formObject = useState('activeformObjectPage');

const btnString = `
  <div id='toNetZero' class='cursor-pointer underline p-2 text-greenmedium hover:no-underline'>Previous</div>
`

const equalityPercentage = ref('50');
const equalityQ1 = ref('no');
const equalityQ2 = ref('no');

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 3;
  const formkitWrapper = document.querySelector('.input-wrapper-submit');
  formkitWrapper.insertAdjacentHTML('afterbegin', btnString);

  document.getElementById ("toNetZero").addEventListener ("click", myFunction, false);
  async function myFunction() {
    await navigateTo('/net-zero')
  }

});

const submitted = ref(false)
const submitHandler = async () => {

  // update all values
  formObject.value.equalityPercentage = equalityPercentage;
  formObject.value.equalityQ1 = equalityQ1;
  formObject.value.equalityQ2 = equalityQ2;

  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
  await navigateTo('/inclusion')
}

</script>