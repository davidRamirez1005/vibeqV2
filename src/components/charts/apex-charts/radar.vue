<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicseries,
  basicoptions,
  multipleseries,
  multipleoptions,
  polygnseries,
  polygnoptions
} from '@/data/apexcharts/apexchart-radar.js';
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
      polygnseries: polygnseries,
      polygnoptions: polygnoptions,
    };
  },
};
</script>

<template>
  
  <Pageheader heading="Radar" :maintitle='["Charts", "Apexcharts", "Radar"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Radar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radar" :series="basicseries" :options="basicoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Radar Chart-Multiple Series</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radar" :series="multipleseries" :options="multipleoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Radar Chart Poygon Fill</div>
        </div>
        <div class="card-body px-0">
          <apexchart height="350" type="radar" :series="polygnseries" :options="polygnoptions"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

