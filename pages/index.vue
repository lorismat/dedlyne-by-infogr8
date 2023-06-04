<template>
  <div class="">
    <SectionTitle title-page="Company Details" />

    <FormKit
      incomplete-message=" "
      type="form"
      submit-label="Go to Net Zero"
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
          type="text"
          label="First Name"
          validation="required"
          placeholder="John"
          help="* required"
          help-class="formkit-help"
          wrapper-class="formkit-wrapper-special"
          inner-class="formkit-inner-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="text"
          label="Last Name"
          validation="required"
          help="* required"
          help-class="formkit-help"
          placeholder="Doe"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="tel"
          label="Telephone"
          placeholder="xxx-xxx-xxxx"
          validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
          validation-visibility="dirty"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="email"
          label="Email Address"
          help="* required"
          help-class="formkit-help"
          validation="required|email"
          placeholder="example@gmail.com"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          v-model="companyName"
          type="text"
          label="Company"
          placeholder="Name Corp."
          validation="required"
          help="* required"
          help-class="formkit-help"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="text"
          label="Company Number"
          placeholder="589903097512"
          validation="length:0,8|matches:/^[0-9]*$/"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <!-- 
          validation="required|date_before:2023-01-01"
        -->

        <FormKit
          type="date"
          label="Business Creation Date"
          validation="required"
          help="* required"
          help-class="formkit-help"
          validation-visibility="dirty"
          value=""
          :classes="{
            input: ''
          }"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="text"
          label="Business Description"
          validation="required|length:0,300"
          help="* required"
          help-class="formkit-help"
          placeholder="Description."
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="date"
          label="Submission Date"
          validation="required"
          help="* required"
          help-class="formkit-help"
          value=""
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="text"
          label="Post Code"
          placeholder="38003"
          validation="matches:/^[0-9]{5}$/"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="text"
          label="City/Town"
          placeholder="Berlin"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          type="text"
          label="House/Flat Number"
          placeholder="4"
          validation="length:1,4|matches:/^[0-9]*$/"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

      </div>

      <!-- 

      <div class="grid grid-cols-2 ">
        <FormKit
          type="textarea"
          label="Business Description"
          validation="required|length:0,300"
          rows="2"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          help=""
          :wrapper-class="{
            'textarea-wrapper': true,
          }"
        />
      
        <div></div>

      </div>

      <div class="px-12 py-4 grid grid-cols-2 ">
        <FormKit
          type="text"
          label="Post Code"
          placeholder="38003"
          validation="matches:/^[0-9]{5}$/"
        />

        <FormKit
          type="text"
          label="City/Town"
          placeholder="Berlin"
        />

        <FormKit
          type="text"
          label="House/Flat Number"
          placeholder="4"
          validation="length:1,4|matches:/^[0-9]*$/"
        />

      </div>

      -->
      

    </FormKit>

    <div>
      <SectionSummary :fillSection="1" />
    </div>

  </div>
</template>

<script setup>
import { createInput } from '@formkit/vue'
import RadioComponent from '~/components/RadioComponent.vue'

const companyName = ref('');

const formObject = useState('activeformObjectPage');

console.log(formObject.value.companyName);

watch(() => companyName.value, (newValue, oldValue) => {
  formObject.value.companyName = companyName;
  console.log(formObject.value.companyName);
})

// importing custom input
const values = ref({})
const radioInput = createInput(RadioComponent)

// https://formkit.com/inputs/form

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 1;
});

const submitted = ref(false)
const submitHandler = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
  await navigateTo('/net-zero')
}

</script>
