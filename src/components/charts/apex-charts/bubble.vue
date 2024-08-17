<script lang="ts">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import { series, Chartoptions, bubble3Dseries, bubble3DChartoptions } from '@/data/apexcharts/apexchart-bubble.js';
import apexchart from "@/shared/UI/apexcharts.vue";


export default {
  components: {
    Pageheader,
    apexchart,
  },
  data() {
    return {
      series: series, Chartoptions: Chartoptions, bubble3Dseries: bubble3Dseries, bubble3DChartoptions: bubble3DChartoptions
    };
  },
};
</script>

<template>
  
  <Pageheader heading="Bubble" :maintitle='["Charts", "Apexcharts", "Bubble"]' />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Simple Bubble Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bubble" :options="Chartoptions" :series="series"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">3D Bubble Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bubble" :options="bubble3DChartoptions" :series="bubble3Dseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

