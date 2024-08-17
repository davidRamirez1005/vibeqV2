<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicSeries, basicChartoptions, scatterseries, scatterChartoptions, horizontalChartoptions, horizontalseries
} from "@/data/apexcharts/apexchart-boxplot.js";
import apexchart from "@/shared/UI/apexcharts.vue";

export default {
  components: {
    Pageheader,
    apexchart,
  },
  data() {
    return {
      basicSeries: basicSeries, basicChartoptions: basicChartoptions, scatterseries: scatterseries, scatterChartoptions: scatterChartoptions, horizontalChartoptions: horizontalChartoptions, horizontalseries: horizontalseries
    };
  },
};
</script>

<template>
  
  <Pageheader heading="BoxPlot" :maintitle='["Charts", "Apexcharts", "BoxPlot"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Boxplot Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="boxPlot" :options="basicChartoptions" :series="basicSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Boxplot With Scatter Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="boxPlot" :options="scatterChartoptions" :series="scatterseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Horizontal Boxplot Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="boxPlot" :options="horizontalChartoptions" :series="horizontalseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

