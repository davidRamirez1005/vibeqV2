<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicseries,
  basicoptions,
  simpleseries,
  simpleoptions,
  monochromeseries,
  monochromeoptions,
  graidnetseries,
  graidnetoptions,
  patternedseries,
  patternedoptions,
  imageseries,
  imageoptions,
  updatingseries,
  updatingoptions
} from '@/data/apexcharts/apexchart-pie.js';
import apexchart from "@/shared/UI/apexcharts.vue";


export default {
  components: {
    Pageheader,
    apexchart,
  },
  data() {
    return {
      basicseries,
      basicoptions,
      simpleseries,
      simpleoptions,
      monochromeseries,
      monochromeoptions,
      graidnetseries,
      graidnetoptions,
      patternedseries,
      patternedoptions,
      imageseries,
      imageoptions,
      updatingseries,
      updatingoptions,
    };
  },
};
</script>

<template>
  
  <Pageheader heading="Pie" :maintitle='["Charts", "Apexcharts", "Pie"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Pie Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="pie" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Simple Donut Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="donut" :options="simpleoptions" :series="simpleseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Updating Donut Chart</div>
        </div>
        <div class="card-body px-0">
          <apexchart height="350" type="donut" :options="updatingoptions" :series="updatingseries">
          </apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Monochrome Pie Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="320" type="pie" :options="monochromeoptions" :series="monochromeseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Gradient Donut Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="donut" :options="graidnetoptions" :series="graidnetseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Donut Chart With Patterns</div>
        </div>
        <div class="card-body">
          <apexchart height="310" type="donut" :options="patternedoptions" :series="patternedseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Image Filled Pie Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="pie" :options="imageoptions" :series="imageseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

