<template>
  <ol-map style="height: 100%">
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

    <ol-overlay :position="[40, 40]">
      <template v-slot="slotProps">
        <div class="overlay-content">
          View point<br />
          Position: {{ slotProps.position }}
        </div>
      </template>
    </ol-overlay>
  </ol-map>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
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

<style scoped>
.overlay-content {
  background: #ecdede;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
  padding: 15px 20px;
  font-size: 15px;
}
</style>
