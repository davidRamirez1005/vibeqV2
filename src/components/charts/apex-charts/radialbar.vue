<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicseries,
  basicoptions,
  multipleseries,
  multipleoptions,
  customseries,
  customoptions,
  gradientseries,
  gradientoptions,
  strokedseries,
  strokedoptions,
  imageseries,
  imageoptions,
  circularseries,
  circularoptions
} from '@/data/apexcharts/apexchart-radialbar.js';
import apexchart from "@/shared/UI/apexcharts.vue";



export default {
  
  components: {
    Pageheader,
    apexchart,
  },
  data() {
    return {
      basicseries: basicseries,
      basicoptions: basicoptions,
      multipleseries: multipleseries,
      multipleoptions: multipleoptions,
      customseries: customseries,
      customoptions: customoptions,
      gradientseries: gradientseries,
      gradientoptions: gradientoptions,
      strokedseries: strokedseries,
      strokedoptions: strokedoptions,
      imageseries: imageseries,
      imageoptions: imageoptions,
      circularseries: circularseries,
      circularoptions: circularoptions,
    };
  },
};
</script>

<template>
  
  <Pageheader heading="Radial Bar" :maintitle='["Charts", "Apexcharts", "Radial Bar"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Pie Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="basicseries" :options="basicoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Multiple Radialbar Chart</div>
        </div>
        <div class="card-body px-1">
          <apexchart height="350" type="radialBar" :series="multipleseries" :options="multipleoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Circle Chart - Custom Angle</div>
        </div>
        <div class="card-body px-0">
          <apexchart height="350" type="radialBar" :series="customseries" :options="customoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Gradient Circle Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="gradientseries" :options="gradientoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Stroked Circular Gauge</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="strokedseries" :options="strokedoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Circle Chart With Image</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="imageseries" :options="imageoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Semi Circular Gauge</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="circularseries" :options="circularoptions"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

