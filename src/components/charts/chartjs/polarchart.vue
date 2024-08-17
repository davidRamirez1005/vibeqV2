<template>
  <canvas id="chartLine" height="300" width="400"></canvas>

</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "Polarchart",
  mounted() {
     Chart.defaults.borderColor = "rgba(142, 156, 173,0.1)", Chart.defaults.color = "#8c9097";
    const ctx = document.getElementById("chartPolar");
    const myChart = new Chart(ctx, {
      type: "polarArea",
      data: {
        datasets: [
          {
            data: [18, 15, 9, 6, 19],
            backgroundColor: [
              "#6259ca",
              "#53caed",
              "#01b8ff",
              "#f16d75",
              "#29ccbb",
            ],
            hoverBackgroundColor: [
              "#6259ca",
              "#53caed",
              "#01b8ff",
              "#f16d75",
              "#29ccbb",
            ],
            borderColor: "transparent",
          },
        ],
        labels: ["Data1", "Data2", "Data3", "Data4"],
      },
      options: {
        scales: {          
          r:{
            grid: {
              color: "rgba(119, 119, 142, 0.2)",
            },
            angleLines: { color: "rgba(119, 119, 142, 0.2)" },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: "#77778e",
          },
        },
      },
    });
    myChart;
  },
};
</script>

<style scoped></style>
