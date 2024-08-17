<template><canvas id="chartPie"></canvas></template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "Donut",
  mounted() {
     Chart.defaults.borderColor = "rgba(142, 156, 173,0.1)", Chart.defaults.color = "#8c9097";  
    var ctx = document.getElementById("chartDonut");

    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };
    const myChart = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
      
    });
    myChart;
  },
};
</script>

<style setup>
#chartPie {
  height: 280px !important;
  width: 300px !important;
  margin: 0 auto;
}
</style>
