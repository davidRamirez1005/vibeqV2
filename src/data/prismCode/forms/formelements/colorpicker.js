export let
    Vuecolorkit = {
        script: `<color-kit :theme="this.switcher.colortheme" :color="color" :sucker-hide="false"
    :sucker-canvas="suckerCanvas" :sucker-area="suckerArea" @changeColor="changeColor"
    @openSucker="openSucker" @inputFocus="inputFocus" @inputBlur="inputBlur" />`
    },
    iswidget = {
        script: `<color-picker :isWidget="true" v-model:pureColor="iswidgetColor" useType="pure" lang="en" />`
    },
    vue3CircleWithDisabledAlphaColorPicker = {
        script: `<color-picker v-model:pureColor="pureColor" shape="circle" format="rgb" pickerType="chrome" useType="pure"
    :disableAlpha="true" />` },
    vue3GradientColorPicker = { script: `<color-picker v-model:gradientColor="gradientColor" useType="both" lang="en" />` },
    vuetifyColorPicker = {
        script: `<div>
    <v-color-picker></v-color-picker>
</div>
<div>
    <v-color-picker show-swatches></v-color-picker>
</div>
<div>
    <v-color-picker hide-canvas show-swatches></v-color-picker>
</div>` };