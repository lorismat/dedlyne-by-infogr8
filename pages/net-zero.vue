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
        v-model="netZeroQ1"
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
          v-model="netZeroTargetDate"
          type="text"
          label="What is the Target Date? (Year)"
          placeholder="2029"
          validation="required|length:4|matches:/^[0-9\s]*$/"
          inner-class="formkit-inner-special formkit-message-spec"
          wrapper-class="formkit-fieldset"
          label-class="formkit-label-other"

          
          
        />

        <!-- 
          <FormKit
          v-model="netZeroTargetDate" 
          type="date"
          label="What is the Target Date? (Year)"
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
        -->


        


        <FormKit
        v-model="netZeroQ2"
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
        v-model="netZeroQ3"
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
        v-model="netZeroQ4"
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
        v-model="netZeroQ5"
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
        v-model="netZeroQ6"
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
        v-model="netZeroQ7"
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
        v-model="netZeroQ8"
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
        v-model="netZeroQ9"
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
        v-model="netZeroProvide"
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

const netZeroQ1 = ref('no');
const netZeroTargetDate = ref('');
const netZeroQ2 = ref('no');
const netZeroQ3 = ref('no');
const netZeroQ4 = ref('no');
const netZeroQ5 = ref('no');
const netZeroQ6 = ref('no');
const netZeroQ7 = ref('no');
const netZeroQ8 = ref('no');
const netZeroQ9 = ref('no');
const netZeroProvide = ref('spherics.io');

const btnString = `
    <div id='toIndex' class='cursor-pointer underline p-2 text-greenmedium hover:no-underline'>Previous</div>
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

  // update all values
  formObject.value.netZeroQ1 = netZeroQ1;
  formObject.value.netZeroTargetDate = netZeroTargetDate;
  formObject.value.netZeroQ2 = netZeroQ2;
  formObject.value.netZeroQ3 = netZeroQ3;
  formObject.value.netZeroQ4 = netZeroQ4;
  formObject.value.netZeroQ5 = netZeroQ5;
  formObject.value.netZeroQ6 = netZeroQ6;
  formObject.value.netZeroQ7 = netZeroQ7;
  formObject.value.netZeroQ8 = netZeroQ8;
  formObject.value.netZeroQ9 = netZeroQ9;
  formObject.value.netZeroProvide = netZeroProvide;


  await new Promise((r) => setTimeout(r, 600))
  submitted.value = true
  await navigateTo('/equality')
}

</script>