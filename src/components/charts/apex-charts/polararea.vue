<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicseries,
  basicoptions,
  monochromeseries,
  monochromeoptions
} from '@/data/apexcharts/apexchart-polararea.js';
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
      monochromeseries: monochromeseries,
      monochromeoptions: monochromeoptions,
    };
  },
};
</script>

<template>
  
  <Pageheader heading="Polararea" :maintitle='["Charts", "Apexcharts", "Polararea"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Polar Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="polarArea" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Polar Area Monochrome Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="polarArea" :options="monochromeoptions" :series="monochromeseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

