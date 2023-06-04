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
        type="radio"
        label="Do you Do you use any measurement packages, or belong to organisations promoting sustainability? an Anti-Slavery policy?"
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

const btnString = `
  <a href='/inclusion' class='underline p-2 text-greenmedium hover:no-underline'>Previous</a>
`

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 5;

  const formkitWrapper = document.querySelector('.input-wrapper-submit');
  formkitWrapper.insertAdjacentHTML('afterbegin', btnString);
});

const submitted = ref(false)
const submitHandler = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
  await navigateTo('/submitted')
}

</script>