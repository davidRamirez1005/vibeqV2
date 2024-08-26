<template>

    <div class="message__container">
        <div class=" fw-h-15 fw-w-10">

            <div class=" tw-h-12 tw-w-12 tw-bg-orange-500 tw-rounded-full">
                <img class=" tw-object-cover tw-h-full tw-w-full tw-overflow-hidden" src="" alt="">
            </div>

        </div>

        <div class="text__box">
            <div class=" tw-max-h-50px ">Bot</div>
            <div class=" tw-h-auto tw-bg-indigo-300 tw-p-2 content__box">{{ message }}</div>
        </div>
    </div>

</template>

<script setup>
    defineProps(["message"])
</script>

<style scoped>

.message__container {
    display: flex;
    max-width: 45%;
    height: auto;
    gap: 10px
}

.text__box {
    width: 100%;
    height: auto;
}

.content__box {
    border-radius: 0px 10px 10px 10px;

}


</style>