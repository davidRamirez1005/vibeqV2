<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  basicseries,
  basicoptions,
  syncedseries,
  syncedoptions,
  brushseries,
  brushoptionsBar,
  categoryseries,
  categoryoptions,
  lineComboseries,
  lineCombooptions
} from '@/data/apexcharts/apexchart-candlestick.js';
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
      syncedseries: syncedseries,
      syncedoptions: syncedoptions,
      brushseries: brushseries,
      brushoptionsBar: brushoptionsBar,
      categoryseries: categoryseries,
      categoryoptions: categoryoptions,
      lineComboseries: lineComboseries,
      lineCombooptions: lineCombooptions,
    };
  },
};
</script>

<template>
  
  <Pageheader heading="CandleStick" :maintitle='["Charts", "Apexcharts", "CandleStick"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Candlestick Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="candlestick" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Candlestick Synced With Brush Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="185" type="candlestick" :options="syncedoptions" :series="syncedseries"></apexchart>
          <apexchart height="150" type="bar" :options="brushoptionsBar" :series="brushseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Candlestick With Cateory X-axis</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="candlestick" :options="categoryoptions" :series="categoryseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Candlestick With Line Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="lineCombooptions" :series="lineComboseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

