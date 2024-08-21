<template>
    <div class="message__container">
      <div class="text__box">
        <div class="tw-max-h-50px tw-text-right">Usuario</div>
        <div class="tw-h-auto tw-bg-gray-400 tw-p-2 content__box">{{ message }}</div>
      </div>
      <div class="fw-h-15 fw-w-10">
        <div class="tw-h-12 tw-w-12 tw-bg-gray-500 tw-rounded-full tw-overflow-hidden">
          <img class=" tw-w-full tw-h-full tw-object-cover" src="" alt="">
        </div>
      </div>
    </div>
  </template>
  

<script setup>
  defineProps(["message"])
</script>
  
<style scoped>
  .message__container {
    display: flex;
    justify-content: flex-end;
    max-width: 45%;
    height: auto;
    gap: 10px;
    margin-left: auto;
  }
  
  .text__box {
    width: 100%;
    height: auto;
  }
  
  .content__box {
    border-radius: 10px 0px 10px 10px;
  }
</style>