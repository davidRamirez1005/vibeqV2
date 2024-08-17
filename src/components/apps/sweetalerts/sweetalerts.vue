<template>
  <Pageheader heading="Sweetalert" :maintitle='["Apps", "Sweetalert"]' />
  <div class="sidemenu-height">
    <div class="row row-sm">
      <div class="col-sm-6 col-md-6 col-xl-3">
        <div class="card custom-card text-center">
          <div class="card-body">
            <div>
              <h6 class="main-content-label mb-1">Basic Alert</h6>
              <p class="text-muted card-sub-title">A Basic Message</p>
            </div>

            <Basicalert />
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-xl-3">
        <div class="card custom-card text-center">
          <div class="card-body">
            <div>
              <h6 class="main-content-label mb-1">Internet</h6>
              <p class="text-muted card-sub-title">A title with a text under</p>
            </div>
            <Internetalert />
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-xl-3">
        <div class="card custom-card text-center">
          <div class="card-body">
            <div>
              <h6 class="main-content-label mb-1">Success alert</h6>
              <p class="text-muted card-sub-title">A Success Message</p>
            </div>

            <Successalert class="btn ripple btn-primary" id="swal-success" />
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-xl-3">
        <div class="card custom-card text-center">
          <div class="card-body">
            <div>
              <h6 class="main-content-label mb-1">Warning alert</h6>
              <p class="text-muted card-sub-title">A warning message</p>
            </div>

            <Warningalert class="btn ripple btn-primary" id="swal-warning" />
          </div>
        </div>
      </div>
    </div>
    <!-- End Row -->

    <!-- Row -->
    <div class="row row-sm">
      <div class="col-sm-6 col-md-6 col-xl-3">
        <div class="card custom-card text-center">
          <div class="card-body">
            <div>
              <h6 class="main-content-label mb-1">Html Description Alert</h6>
              <p class="text-muted card-sub-title">By Htmldescriptionalert</p>
            </div>

            <Htmldescriptionalert class="btn ripple btn-primary" id="swal-para" />
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-xl-3">
        <div class="card custom-card text-center">
          <div class="card-body">
            <div>
              <h6 class="main-content-label mb-1">Image alert</h6>
              <p class="text-muted card-sub-title">A message with custom Image</p>
            </div>

            <Coustomimage class="btn ripple btn-primary" />
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-xl-3">
        <div class="card custom-card text-center">
          <div class="card-body">
            <div>
              <h6 class="main-content-label mb-1">A custom positioned dialog</h6>
              <p class="text-muted card-sub-title">A custom positioned dialog</p>
            </div>

            <Timealert />
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-xl-3">
        <div class="card custom-card text-center">
          <div class="card-body">
            <div>
              <h6 class="main-content-label mb-1">Long content inside:</h6>
              <p class="text-muted card-sub-title">
                A modal window with a long content inside:
              </p>
            </div>

            <Modalsweetalert />
          </div>
        </div>
      </div>
    </div>
    <!-- End Row -->
  </div>
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import Basicalert from "./basicalert.vue";
import Warningalert from "./Warningalert.vue";
import Successalert from "./successalert.vue";
import Internetalert from "./internetalert.vue";
import Htmldescriptionalert from "./htmldescriptionalert.vue";
import Coustomimage from "./coustomimage.vue";
import Timealert from "./Timealert.vue";
import Modalsweetalert from "./modalsweetalert.vue";
export default {
  components: {
    Pageheader,
    Basicalert,
    Warningalert,
    Successalert,
    Internetalert,
    Htmldescriptionalert,
    Coustomimage,
    Timealert,
    Modalsweetalert,
  },
};
</script>

<style scoped></style>
