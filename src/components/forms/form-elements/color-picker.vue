<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import showcodeCard from "@/shared/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/forms/formelements/colorpicker.js';
import { switcherStore } from '@/stores/switcher';
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'
import { ref, reactive } from "vue";
export default {
    setup() {
        const pureColor = ref("red");
        const iswidgetColor = ref("red");
        const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

        return { pureColor, gradientColor, iswidgetColor }
    },
    components: {
        Pageheader, showcodeCard, 'color-kit': ColorPicker
    },
    data() {
        return {
            prism,
            color: '#59c7f9',
            switcher: reactive(switcherStore()),
            suckerCanvas: null,
            suckerArea: [],
            isSucking: false,
        };
    },
    methods: {
        changeColor(color) {
            const { r, g, b, a } = color.rgba
            this.color = `rgba(${r}, ${g}, ${b}, ${a})`
        },
        openSucker(isOpen) {
            if (isOpen) {
                // ... canvas be created
                // this.suckerCanvas = canvas
                // this.suckerArea = [x1, y1, x2, y2]
            } else {
                // this.suckerCanvas && this.suckerCanvas.remove
            }
        },
        inputFocus(event: FocusEvent) {
            // this will get triggered on input field (hex and rgba) get focus
            // prop value will be FocusEvent object associated with the input
        },
        inputBlur(event: FocusEvent) {
            // this  will get triggeredon input field (hex and rgba) get out of focus (blur event)
            // prop value will be FocusEvent object associated with the input
        },
    },
};
</script>

<template>
    <Pageheader heading="Color Picker" :maintitle='["Forms", "Form Elements", "Color Picker"]' />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-4">
            <showcodeCard :code="prism.Vuecolorkit" title="Vue color kit">
                <div class="d-flex align-items-center justify-content-center">
                    <color-kit :theme="this.switcher.colortheme" :color="color" :sucker-hide="false"
                        :sucker-canvas="suckerCanvas" :sucker-area="suckerArea" @changeColor="changeColor"
                        @openSucker="openSucker" @inputFocus="inputFocus" @inputBlur="inputBlur" />
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-8">
            <div class="row">
                <div class="col-md-6 col-12">
                    <showcodeCard :code="prism.iswidget" title="vue3 Widget View">
                        <div class="mb-4">
                            <color-picker :isWidget="true" v-model:pureColor="iswidgetColor" useType="pure" lang="en" />
                        </div>
                    </showcodeCard>
                </div>
                <div class="col-md-6 col-12">
                    <div class="row">
                        <div class="col-12">
                            <showcodeCard :code="prism.vue3CircleWithDisabledAlphaColorPicker"
                                title="vue3 Circle with Disabled Alpha Color Picker">
                                <color-picker v-model:pureColor="pureColor" shape="circle" format="rgb" pickerType="chrome"
                                    useType="pure" :disableAlpha="true" />
                            </showcodeCard>
                        </div>
                        <div class="col-12">
                            <showcodeCard :code="prism.vue3GradientColorPicker" title="vue3 Gradient Color Picker">
                                <color-picker v-model:gradientColor="gradientColor" useType="both" lang="en" />
                            </showcodeCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
