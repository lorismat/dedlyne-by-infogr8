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

const btnString = `
  <a href='/net-zero' class='underline p-2 text-greenmedium hover:no-underline'>Previous</a>
`

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 3;
  const formkitWrapper = document.querySelector('.input-wrapper-submit');
  formkitWrapper.insertAdjacentHTML('afterbegin', btnString);
});

const submitted = ref(false)
const submitHandler = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
  await navigateTo('/inclusion')
}

</script>