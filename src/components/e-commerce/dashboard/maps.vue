<template>
    <ol-map class="ht-300"
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 320px"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />
  
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-map>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    setup() {
      const center = ref([40, 40]);
      const projection = ref("EPSG:4326");
      const zoom = ref(0);
      const rotation = ref(0);
      return {
        center,
        projection,
        zoom,
        rotation,
      };
    },
  };
  </script>
  
  <style scoped></style>
  