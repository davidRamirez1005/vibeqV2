<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicseries,
  basicoptions,
  multiseries,
  multioptions,
  distributedseries,
  distributedoptions,
  treemapseries,
  treemapoptions
} from '@/data/apexcharts/apexchart-treemap.js';
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
      multiseries: multiseries,
      multioptions: multioptions,
      distributedseries: distributedseries,
      distributedoptions: distributedoptions,
      treemapseries: treemapseries,
      treemapoptions: treemapoptions,
    };
  },
};
</script>

<template>
  
  <Pageheader heading="Treemap" :maintitle='["Charts", "Apexcharts", "Treemap"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Treemap Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="treemap" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Multi Dimensional Treemap Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="treemap" :options="multioptions" :series="multiseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Distributed Treemap Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="treemap" :options="distributedoptions" :series="distributedseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Treemap with color ranges</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="treemap" :options="treemapoptions" :series="treemapseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

