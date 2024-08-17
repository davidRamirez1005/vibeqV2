<template>
  <!-- Row -->
  <Pageheader heading="OpenLayer" :maintitle='["Apps", "Maps", "OpenLayer"]' />
  <div class="row row-sm">
    <div class="col-lg-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Ol-map</h6>
            <p class="text-muted card-sub-title">
              This is the main container for all other Vue3 OpenLayers components and has
              one default slot to place them all.
            </p>
          </div>
          <div class="mapcontainer4">
            <div class="map">
              <Openlayermap />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Row -->
  <div class="row row-sm">
    <div class="col-lg-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">ol-view</h6>
            <p class="text-muted card-sub-title">
              A View object represents a simple 2D view of the map.
            </p>
          </div>
          <div class="mapcontainer">
            <div class="ht-300 overflow-hidden">
              <Openlayerviewmap />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">ol-Layer</h6>
            <p class="text-muted">shows how to add custom content on to the map.</p>
          </div>
          <div class="mapcontainer1">
            <div class="ht-300 overflow-hidden text-fixed-black">
              <Openlayer />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Row -->
  <div class="row row-sm">
    <div class="col-lg-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">ol-style-circle</h6>
            <p class="text-muted">Use it inside ol-style to style points as circles.</p>
          </div>
          <div class="mapcontainer1">
            <div class="ht-300 overflow-hidden">
              <Multipointview />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">ol-style-circle</h6>
            <p class="text-muted">Use it inside ol-style to style points as circles.</p>
          </div>
          <div class="mapcontainer1">
            <div class="ht-300 overflow-hidden">
              <Olinteraction />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import Openlayermap from "./Openlayermap.vue";
import Openlayerviewmap from "./openlayerviewmap.vue";
import Openlayer from "./openlayer.vue";
import Olinteraction from "./olinteraction.vue";
import Multipointview from "./multipointview.vue";
export default {
  components: {
    Pageheader,
    Openlayermap,
    Openlayerviewmap,
    Openlayer,
    Olinteraction,
    Multipointview,
  },
};
</script>

<style scoped></style>
