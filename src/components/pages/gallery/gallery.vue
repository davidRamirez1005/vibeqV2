<template>
  <Pageheader heading="Gallery" :maintitle='["Pages","Gallery"]' />
  <!-- Row -->
  <div class="row row-sm">
    <div class="col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Light Gallery</h6>
            <p class="text-muted card-sub-title">
              A customizable, modular, responsive, lightbox gallery plugin for
            </p>
          </div>

          <Basicgallery />
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import Basicgallery from "./basicgallery.vue";
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
export default { components: { Basicgallery, Pageheader } };
</script>

<style scoped></style>
