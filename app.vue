<template>
  <div class="mb-10 w-screen max-w-screen-lg mx-auto">
    <div class="py-4 text-2xl font-bold flex justify-center">
      <TheTitle />
    </div>
    <div class="w-full">
      <div class="border-2 border-greenmedium shadow-xl rounded-xl">
        <TheHeader />
        <NuxtPage />
      </div>
    </div>
  </div>
  
</template>

<style>

:root {
  --tw-ring-color: green !important;
}

.text-over {
  color: #9ca3af !important;
}

.img {
  max-width: 160px;
}

.text-red-500 {
  color: #E86D84;
}

.placeholder-gray-400 {
  color: #9ca3af;
}

.text-gray-700 {
  color: #111;
}

.textarea-wrapper {
  justify-content: end;
}

textarea {
  resize: none;
}

.input-wrapper-submit {
  justify-content: center;
  display: flex;
}

.formkit-messages {
  display: flex;
  justify-content: end;
}

.input-button-submit {
  border-radius: 14px;
}

.formkit-inner-special {
  width: 250px;
  border-radius: 14px;
  border: 0.5px solid #629642;
  outline: none;
}

.formkit-inner-radio {
}

.formkit-options-radio {
  padding: 10px 0px;
  display: inline-flex;
}

.formkit-wrapper-special { 
  display: flex;
  align-content: center;
  align-items: baseline;
  justify-content: end;
}

.formkit-wrapper-special-date { 
  display: block;
}


.formkit-messages-special-date {
  display: flex;
  justify-content: flex-start;
}

.formkit-wrapper-radio { 
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: end;
  padding: 0px 0px 0px 10px;
}

.formkit-fieldset-radio {
  border: none !important;
  display: inline-flex;
}

.ring-1 {
  --tw-ring-offset-shadow: none !important;
  --tw-ring-shadow: none !important;
  box-shadow:none !important;
}

.formkit-label-radio {
  padding: 10px 0px;
  font-weight:400;
  color: #333;
}

.formkit-decorator-radio {
  outline: 1px solid #629642;
  padding: 0px 10px;
  background: #fff;
  color: #fff;
}

[data-checked="true"] {
  color: #629642 !important;
}


.formkit-label-other {
  padding: 0px 10px;
  font-weight:400;
  color: #333;
}

.ring-blue-500 {
  background-color: #629642 !important;
  color: #629642 !important;
  fill: #629642 !important;
  stroke: #629642 !important;
}

.text-blue-500 {
  background-color: #629642 !important;
  color: #629642 !important;
  fill: #629642 !important;
  stroke: #629642 !important;
}

.peer:checked ~ .peer-checked\:text-blue-500 {
  --tw-text-opacity: 1;
  color: #629642;
  color: #629642;
}

</style>