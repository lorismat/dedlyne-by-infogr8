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
          v-model="firstName"
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
          v-model="lastName"
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
          v-model="telephone"
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
          v-model="email"
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
          v-model="companyNumber"
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
          v-model="businessCreationDate"
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
          v-model="businessDescription"
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
          v-model="submissionDate"
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
          v-model="postCode"
          type="text"
          label="Post Code"
          placeholder="38003"
          validation="matches:/^[0-9]{5}$/"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          v-model="city"
          type="text"
          label="City/Town"
          placeholder="Berlin"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

        <FormKit
          v-model="flatNumber"
          type="text"
          label="House/Flat Number"
          placeholder="4"
          validation="length:1,4|matches:/^[0-9]*$/"
          inner-class="formkit-inner-special"
          wrapper-class="formkit-wrapper-special"
          label-class="formkit-label-other"
        />

      </div>
      
    </FormKit>

    <div>
      <SectionSummary :fillSection="1" />
    </div>

  </div>
</template>

<script setup>
import { createInput } from '@formkit/vue'
import RadioComponent from '~/components/RadioComponent.vue'

const firstName = ref('');
const lastName = ref('');
const telephone = ref('');
const email = ref('');
const companyName = ref('');
const companyNumber = ref('');
const businessCreationDate = ref('');
const businessDescription = ref('');
const submissionDate = ref('');
const postCode = ref('');
const city = ref('');
const flatNumber = ref('');

const formObject = useState('activeformObjectPage');

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 1;
});

const submitted = ref(false)
const submitHandler = async () => {

  // update all values
  formObject.value.firstName = firstName;
  formObject.value.lastName = lastName;
  formObject.value.telephone = telephone;
  formObject.value.email = email;
  formObject.value.companyName = companyName;
  formObject.value.companyNumber = companyNumber;
  formObject.value.businessCreationDate = businessCreationDate;
  formObject.value.businessDescription = businessDescription;
  formObject.value.submissionDate = submissionDate;
  formObject.value.postCode = postCode;
  formObject.value.city = city;
  formObject.value.flatNumber = flatNumber;

  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true;
  await navigateTo('/net-zero')
}

</script>
