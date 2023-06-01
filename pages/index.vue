<template>
  <div>
    <SectionTitle title-page="Company Information" />

    <FormKit
      type="form"
      submit-label="Go to Net Zero"
      :submit-attrs="{
        inputClass: 'my-input-class',
        wrapperClass: 'my-wrapper-class',
        'data-theme': `dark`,
        help: 'My button help text',
        ignore: false
      }"
       @submit="submitHandler"
    >
      
      <div class="p-4 grid grid-cols-2 gap-2">

        <FormKit
          type="text"
          label="First Name"
          validation="required"
          
        />

        <FormKit
          type="text"
          label="Last Name"
          validation="required"
          
        />

        <FormKit
          type="tel"
          label="Telephone"
          placeholder="xxx-xxx-xxxx"
          validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
          validation-visibility="dirty"
        />

        <FormKit
          type="email"
          label="Email Address"
          validation="required|email"
          placeholder="example@gmail.com"
        />

        <FormKit
          type="date"
          value="2011-01-01"
          label="Business Creation Date"
          validation="required|date_before:2023-01-01"
          validation-visibility="dirty"
        />

        <FormKit
          type="textarea"
          label="Business Description"
          validation="length:0,300"
          rows="6"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          help="Max 300 characters."
        />

        <FormKit
          type="date"
          value="2023-01-01"
          label="Submission Date"
          validation="required"
        />

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
          validation="required"
        />

        <FormKit
          type="text"
          label="House/Flat Number"
          placeholder="4"
          validation="length:1,4|matches:/^[0-9]*$/"
        />
      </div>

    </FormKit>

    <div>
      <SectionSummary :fillSection="1" />
    </div>
  </div>
</template>

<script setup>

// https://formkit.com/inputs/form

const activePage = useState('activePage');
onMounted(() => {
  activePage.value = 1;
});

const submitted = ref(false)

const submitHandler = async () => {
  console.log('submit click')
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
  console.log('submitted')

  await navigateTo('/net-zero')
}


</script>

<style>
.formkit-wrapper { 
  display: flex;
  align-content: center;
  align-items: baseline;
 }
.formkit-label {
  padding: 10px;
}
</style>