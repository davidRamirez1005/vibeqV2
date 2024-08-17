<template>
  <!-- Row -->
  <Pageheader heading="Orders" :maintitle='["Ecommerce", "Orders"]' />
  <div class="row row-sm">
    <div class="col-md-12 col-lg-12">
      <div class="card custom-card">
        <div class="card-header border-bottom-0 pb-0">
          <div>
            <div class="d-flex">
              <label class="main-content-label my-auto pt-2">All Orders</label>
            </div>
          </div>
        </div>
        <div class="card-body">
          <Orderdatatable />
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import Orderdatatable from "./orderdatatable.vue";
export default { components: { Pageheader, Orderdatatable } };
</script>

<style scoped></style>
