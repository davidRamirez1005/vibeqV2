<template>
  <Pageheader heading="Chartjs" :maintitle='[" Charts", "Chartjs"]' />
  <!-- Row -->
  <div class="row row-sm">
    <div class="col-lg-6 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Line Chart</h6>
            <p class="text-muted card-sub-title">
              Below is the basic line chart example.
            </p>
          </div>
          <div class="chartjs-wrapper-demo">
            <Linechartinfo />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Bar Chart1</h6>
            <p class="text-muted card-sub-title">Below is the basic bar chart example.</p>
          </div>
          <div class="chartjs-wrapper-demo">
            <Barchart id="chartBar1" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Row -->
  <div class="row row-sm">
    <div class="col-lg-6 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Bar Chart2</h6>
            <p class="text-muted card-sub-title">Below is the basic bar chart example.</p>
          </div>
          <div class="chartjs-wrapper-demo">
            <!-- <canvas id="chartBar2"></canvas> -->
            <Barchart2 id="chartBar2" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Area Chart</h6>
            <p class="text-muted card-sub-title">
              Below is the basic area chart example.
            </p>
          </div>
          <div class="chartjs-wrapper-demo">
            <Areachart id="chartArea" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Row -->
  <div class="row row-sm">
    <div class="col-lg-6 col-md-12">
      <div class="card custom-card overflow-hidden"><div class="card-header"> 
          <div>
            <h6 class="main-content-label mb-1">Doughnut Chart</h6>
            <p class="text-muted card-sub-title">
              Below are an example of data in a Doughnut chart.
            </p>
          </div>
        </div>
        <div class="card-body px-0">  
          <div class="chartjs-wrapper-demo">
            <!-- <canvas ></canvas> -->
            <Donut id="chartPie" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Pie Chart</h6>
            <p class="text-muted card-sub-title">
              Below are an example of data in a pie chart.
            </p>
          </div>
          <div class="chartjs-wrapper-demo">
            <!-- <canvas id="chartDonut"></canvas> -->
            <Piachart id="chartDonut" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Row -->
  <div class="row row-sm">
    <div class="col-lg-6 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Radar Chart</h6>
            <p class="text-muted card-sub-title">
              Below are an example of data in a radar chart.
            </p>
          </div>
          <div class="chartjs-wrapper-demo">
            <Radarchart id="chartRadar" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Polar Chart</h6>
            <p class="text-muted card-sub-title">
              Below are an example of data in a polar chart.
            </p>
          </div>
          <div class="chartjs-wrapper-demo">
            <Polarchart id="chartPolar" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import Barchart from "./barchart.vue";
import Linechartinfo from "./linechartinfo.vue";
import Barchart2 from "./barchart2.vue";
import Areachart from "./areachart.vue";
import Donut from "./donut.vue";
import Piachart from "./piachart.vue";
import Radarchart from "./radarchart.vue";
import Polarchart from "./polarchart.vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: {
    Bar,
    Pageheader,
    Barchart,
    Linechartinfo,
    Barchart2,
    Areachart,
    Donut,
    Piachart,
    Radarchart,
    Polarchart,
  },
  data() {
    return {
      heading: "ChartJs Charts",
      maintitle: "Charts",
      subtitle: "ChartJs Charts",
    };
  },
};
</script>

<style scoped></style>
