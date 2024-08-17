<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicseries,
  basicoptions,
  datetimeseries,
  datetimeoptions,
  scatterseries,
  scatteroptions
} from '@/data/apexcharts/apexchart-scatter.js';
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
      datetimeseries: datetimeseries,
      datetimeoptions: datetimeoptions,
      scatterseries: scatterseries,
      scatteroptions: scatteroptions,
    };
  },
};
</script>

<template>
  
  <Pageheader heading="Scatter" :maintitle='["Charts", "Apexcharts", "Scatter"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Scatter Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="scatter" :series="basicseries" :options="basicoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Datetime Scatter Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="scatter" :series="datetimeseries" :options="datetimeoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Image Fill Scatter Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="scatter" :series="scatterseries" :options="scatteroptions"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

