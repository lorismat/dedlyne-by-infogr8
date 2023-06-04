<template>
  <div class="">
    <SectionTitle title-page="Net Zero" />

    <FormKit
      incomplete-message=" "
      type="form"
      submit-label="Go to Equality"
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
          type="radio"
          label="Do you have an agreed Net Zero target for carbon emissions?"
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
          type="date"
          label="What is the Target Date?"
          validation="required"
          help="* required"
          
          validation-visibility="dirty"
          value=""
          :classes="{
            input: ''
          }"
          help-class="formkit-help-special-date"
          inner-class="formkit-inner-select"
          wrapper-class="formkit-wrapper-special-date"
          label-class="formkit-label-other-select"
          messages-class="formkit-messages-special-date"
        />


        <FormKit
          type="radio"
          label="Do you use renewable energy sources? "
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
          type="radio"
          label="Can you provide recent evidence of billing?"
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
          type="radio"
          label="Have you calculated your Scope3 carbon footprint? "
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
          type="radio"
          label="Can you provide evidence of your estimated Scope3 emissions? "
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
          type="radio"
          label="Have you calculated your Scope2 carbon footprint? "
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
          type="radio"
          label="Can you provide evidence of your estimated Scope2 emissions? "
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
          type="radio"
          label="Have you calculated your Scope1 carbon footprint? "
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
          type="radio"
          label="Can you provide evidence of your estimated Scope1 emissions? "
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
          type="select"
          label="Can you provide evidence of measurement or accreditation of emissions from one of the following?"
          :options="[
            'spherics.io',
            'normative.io',
            'sage.com',
            'quentic.com',
            'planetmark.com',
            'ghgprotocol.com',
            'ecologi.com',
            'sciencebasedtargets.org',
          ]"
          label-class="formkit-label-other-select"
          inner-class="formkit-inner-select"
          wrapper-class="formkit-wrapper-special-select"
        />

    </div>

    </FormKit>

    <div>
      <SectionSummary :fillSection="2" />
    </div>
    
  </div>
</template>

<script setup>

const formObject = useState('activeformObjectPage');
console.log(formObject.value.companyName);

const btnString = `
    <div id='toIndex' class='underline p-2 text-greenmedium hover:no-underline'>Previous</div>
`
const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 2;
  const formkitWrapper = document.querySelector('.input-wrapper-submit');
  formkitWrapper.insertAdjacentHTML('afterbegin', btnString);
  document.getElementById ("toIndex").addEventListener ("click", myFunction, false);
  async function myFunction() {
    await navigateTo('/')
  }
});

const submitted = ref(false)
const submitHandler = async () => {
  await new Promise((r) => setTimeout(r, 600))
  submitted.value = true
  await navigateTo('/equality')
}

</script>