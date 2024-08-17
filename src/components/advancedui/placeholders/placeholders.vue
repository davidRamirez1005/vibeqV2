<template>
  <Pageheader heading="Placeholders" :maintitle='["Advanced-UI", "Placeholders"]' />
  <!-- Start:: row-1 -->
  <div class="row row-sm">
    <div class="col-xl-6">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <img class="card-img-top" src="/images/media/media-60.jpg" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make
                up
                the bulk of the card's content.</p>
              <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div class="card" aria-hidden="true">
            <img class="card-img-top" src="/images/media/media-61.jpg" alt="">
            <div class="card-body">
              <div class="h5 card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </div>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7 me-1"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4 me-1"></span>
                <span class="placeholder col-6"></span>
              </p>
              <a href="javascript:void(0);" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <showcodeCard :code="prism.animation" title="Animation">
            <p class="placeholder-glow mb-0">
              <span class="placeholder col-12"></span>
            </p>
            <p class="placeholder-wave mb-0">
              <span class="placeholder col-12"></span>
            </p>
          </showcodeCard>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-xl-12">
              <showcodeCard :code="prism.sizing" title="Sizing">
                <span class="placeholder col-12 placeholder-xl mb-1"></span>
                <span class="placeholder col-12 placeholder-lg"></span>
                <span class="placeholder col-12"></span>
                <span class="placeholder col-12 placeholder-sm"></span>
                <span class="placeholder col-12 placeholder-xs"></span>
              </showcodeCard>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <showcodeCard :code="prism.colors" title="Colors">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12 bg-primary"></span>
            <span class="placeholder col-12 bg-secondary"></span>
            <span class="placeholder col-12 bg-success"></span>
            <span class="placeholder col-12 bg-danger"></span>
            <span class="placeholder col-12 bg-warning"></span>
            <span class="placeholder col-12 bg-info"></span>
            <span class="placeholder col-12 bg-light"></span>
            <span class="placeholder col-12 bg-dark"></span>
          </showcodeCard>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row row-sm">
    <div class="col-xl-12">
      <showcodeCard :code="prism.width" title="Width">
        <span class="placeholder bg-primary col-6"></span>
        <span class="placeholder bg-primary w-75 d-block"></span>
        <span class="placeholder bg-primary" style="width: 25%;"></span>
      </showcodeCard>
    </div>
  </div>
  <!-- Start:: row-2 -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import showcodeCard from "@/shared/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/placeholder.js';

export default {
  components: { Pageheader, showcodeCard },
  data() {
    return {
      prism
    }
  },
};
</script>

<style scoped></style>
