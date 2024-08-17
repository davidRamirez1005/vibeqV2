<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicseries,
  basicoptions,
  multipleseries,
  multipleoptions,
  areaseries,
  areaoptions,
  columnseries,
  columnoptions
} from '@/data/apexcharts/apexchart-mixed.js';
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
      areaseries: areaseries,
      areaoptions: areaoptions,
      columnseries: columnseries,
      columnoptions: columnoptions,
    };
  },
};
</script>

<template>
  
  <Pageheader heading="Mixed" :maintitle='["Charts", "Apexcharts", "Mixed"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Line & Column Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Multiple Y-Axis Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="multipleoptions" :series="multipleseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Line & Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="areaoptions" :series="areaseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Line,Column & Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="columnoptions" :series="columnseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

