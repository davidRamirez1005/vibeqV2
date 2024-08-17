<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import showcodeCard from "@/shared/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/forms/formeditor.js';

export default {

    components: {
        Pageheader, showcodeCard
    },
    data() {
        return {
            prism,
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["image", "code-block"]
            ],
            content: '<h2>This is Default Editor Example</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Sed id semper risus in hendrerit gravida. Neque sodales ut etiam sit amet nisl purus. Elit sed vulputate mi sit amet mauris commodo quis. Platea dictumst quisque sagittis purus sit amet. Dui accumsan sit amet nulla facilisi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Metus aliquam eleifend mi in nulla posuere.</p><ol><li>Write text select and edit with multiple options.</li><li>This is quill bubble editor.</li><li>Easy to customize and flexible.</li></ol><p>Tempor nec feugiat nisl pretium fusce.Nibh tellus molestie nunc non blandit massa.Tellus in metus vulputate eu scelerisque.Blandit massa enim nec dui nunc.Cras pulvinar mattis nunc sed.Et egestas quis ipsum suspendisse ultrices gravida dictum.Mi sit amet mauris commodo quis.Urna neque viverra justo nec ultrices dui sapien.Interdum velit euismod in pellentesque massa placerat.Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris.At imperdiet dui accumsan sit amet.Placerat vestibulum lectus mauris ultrices.Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.Consequat nisl vel pretium lectus quam id leo in.</p>',
            content1: '<h2>This is  custom Toolbar Example</h2><ol><li>Write text select and edit with multiple options.</li><li>This is quill bubble editor.</li><li>Easy to customize and flexible.</li></ol><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Sed id semper risus in hendrerit gravida. Neque sodales ut etiam sit amet nisl purus. Elit sed vulputate mi sit amet mauris commodo quis. Platea dictumst quisque sagittis purus sit amet. Dui accumsan sit amet nulla facilisi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Metus aliquam eleifend mi in nulla posuere.</p><p>Tempor nec feugiat nisl pretium fusce.Nibh tellus molestie nunc non blandit massa.Tellus in metus vulputate eu scelerisque.Blandit massa enim nec dui nunc.Cras pulvinar mattis nunc sed.Et egestas quis ipsum suspendisse ultrices gravida dictum.Mi sit amet mauris commodo quis.Urna neque viverra justo nec ultrices dui sapien.Interdum velit euismod in pellentesque massa placerat.Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris.At imperdiet dui accumsan sit amet.Placerat vestibulum lectus mauris ultrices.Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.Consequat nisl vel pretium lectus quam id leo in.</p>'
        };
    },
};
</script>

<template>
    <Pageheader heading="form-editor" :maintitle='["Forms", "form-editor"]' />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.defaultEditor" title="Default Editor">
                <vue-editor v-model="content"></vue-editor>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.customToolbar" title="Custom Toolbar">
                <vue-editor v-model="content1" :editorToolbar="customToolbar"></vue-editor>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>
