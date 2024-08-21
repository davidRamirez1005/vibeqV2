import { createApp } from "vue";
import "./style.scss";
import "./assets/css/stylesGlobal.css";
import router from './router/index.js'
import App from "./App.vue";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import VueGoodTablePlugin from "vue-good-table-next";
import "vue3-openlayers/dist/vue3-openlayers.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Lightbox from "vue-easy-lightbox";
import "vue-good-table-next/dist/vue-good-table-next.css";
import "simplebar/dist/simplebar.min.css";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/solarized-light.css";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "vue3-colorpicker/style.css";
import InputColorPicker from "vue-native-color-picker";
import ColorPicker from "@oysterlee/vue-color-picker";
// import Vue3Autocounter from "vue3-autocounter";
import VueCountdown from "@chenfengyuan/vue-countdown";
import { VueEditor } from "vue3-editor";
import { createPinia } from 'pinia';
import Datepicker1 from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';
import { vMaska } from "maska";
import DropZone from "dropzone-vue";
import 'dropzone-vue/dist/dropzone-vue.common.css';
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

const app = createApp(App);
app.component(VueCountdown.name, VueCountdown);
const pinia = createPinia()
app.use(ColorPicker);
app.use(VueHighlightJS);
app.use(InputColorPicker);
app.use(CKEditor);
app.directive("maska", vMaska)
app.component("simplebar", simplebar);
app.component("VueEditor", VueEditor);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(DropZone);
app.use(router);
app.use(Vue3ColorPicker);
app.use(OpenLayersMap);
app.component("Datepicker1", Datepicker1);
app.use(VueSweetalert2);
app.use(pinia)
app.use(Lightbox);
// app.component("jsVectorMap", jsVectorMap);
app.use(VueGoodTablePlugin);
app.mount("#app");

