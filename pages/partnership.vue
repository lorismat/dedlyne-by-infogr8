<template>
  <div>
    <SectionTitle title-page="Partnership" />

    <FormKit
      incomplete-message=" "
      type="form"
      submit-label="Submit"
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
      v-model="partnershipQ1"
        type="radio"
        label="Do you use any measurement packages, or belong to organisations promoting sustainability? an Anti-Slavery policy?"
        :options="{
          yes: 'Yes',
          no: 'No',
        }"
        :value="'no'"
        inner-class="formkit-inner-radio"
        wrapper-class="formkit-wrapper-radio"
        fieldset-class="formkit-fieldset-radio-wide"
        options-class="formkit-options-radio"
        legend-class="formkit-label-other"
        decorator-class="formkit-decorator-radio"
      />


      <FormKit
      v-model="partnershipQ2"
        type="radio"
        label="Do you ask any / all of the above questions of the businesses you buy goods or services from?"
        :options="{
          yes: 'Yes',
          no: 'No',
        }"
        :value="'no'"
        inner-class="formkit-inner-radio"
        wrapper-class="formkit-wrapper-radio"
        fieldset-class="formkit-fieldset-radio-wide"
        options-class="formkit-options-radio"
        legend-class="formkit-label-other"
        decorator-class="formkit-decorator-radio"
      />

      </div>

    </FormKit>
    <div>
      <SectionSummary :fillSection="5" />
    </div>
  </div>
</template>

<script setup>

const formObject = useState('activeformObjectPage');

const btnString = `
    <div id='toInclusion' class='cursor-pointer underline p-2 text-greenmedium hover:no-underline'>Previous</div>
`

const partnershipQ1 = ref('no');
const partnershipQ2 = ref('no');

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 5;
  const formkitWrapper = document.querySelector('.input-wrapper-submit');
  formkitWrapper.insertAdjacentHTML('afterbegin', btnString);

  document.getElementById ("toInclusion").addEventListener ("click", myFunction, false);
  async function myFunction() {
    await navigateTo('/inclusion')
  }
});

const submitted = ref(false)
const submitHandler = async () => {

  // update all values
  formObject.value.partnershipQ1 = partnershipQ1;
  formObject.value.partnershipQ2 = partnershipQ2;


  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
  await navigateTo('/submitted')
}

</script>