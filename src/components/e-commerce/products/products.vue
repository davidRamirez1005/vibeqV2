<template>
  <Pageheader heading="Products" :maintitle='["Ecommerce", "Products"]' />
  <div class="row row-sm">
    <div class="col-md-8 col-lg-8 col-xl-9">
      <div class="row row-sm">
        <div class="col-md-6 col-lg-6 col-xl-4 col-sm-6" v-for="(item, index) in productsData" :key="'event' + index">
          <productsList :item="item" />
        </div>
      </div>
      <nav>
        <div class="mt-3">
        </div>
      </nav>
    </div>
    <div class="col-md-4 col-lg-4 col-xl-3">
      <div class="card custom-card">
        <div class="card-body">
          <div class="row row-sm">
            <div class="col-sm-12">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search ..." />
                <span class="input-group-append">
                  <button class="btn ripple btn-primary" type="button">Search</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-sm">
        <div class="col-md-12 col-lg-12">
          <div class="card custom-card">
            <div class="card-header custom-card-header">
              <h6 class="main-content-label mb-3">Categories</h6>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="form-label">Mens</label>
                <Selectoptions :options="mensOptions" placeholder="Choose one"
                  class="" id="currency" name="currency"
                  :value="mensValue" />
              </div>
              <div class="form-group">
                <label class="form-label">Women</label>
                <Selectoptions :options="womenOptions" placeholder="Choose one"
                  class="" id="currency" name="currency"
                  :value="womenValue" />
              </div>
              <div class="form-group">
                <label class="form-label">Baby & Kids</label>
                <Selectoptions :options="babyOptions" placeholder="Choose one"
                  class="" id="currency" name="currency"
                  :value="babyValue" />
              </div>
              <div class="form-group">
                <label class="form-label">Electronics</label>
                <Selectoptions :options="electronicsOptions" placeholder="Choose one"
                  class="" id="currency" name="currency"
                  :value="electronicsValue" />
              </div>
              <div class="form-group">
                <label class="form-label">Sport,Books & More </label>
                <Selectoptions :options="sportsOptions" placeholder="Choose one"
                  class="" id="currency" name="currency"
                  :value="sportsValue" />
              </div>
              <div class="form-group">
                <label class="form-label">Price</label>
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="radio" name="Radio" id="Radio-md1" checked="">
                  <label class="form-check-label" for="Radio-md1">
                    Under $25
                  </label>
                </div>
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="radio" name="Radio" id="Radio-md2">
                  <label class="form-check-label" for="Radio-md2">
                    $25 to $50
                  </label>
                </div>
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="radio" name="Radio" id="Radio-md3">
                  <label class="form-check-label" for="Radio-md3">
                    $50 to $100
                  </label>
                </div>
                <div class="form-check form-check-md">
                  <input class="form-check-input" type="radio" name="Radio" id="Radio-md4">
                  <label class="form-check-label" for="Radio-md4">
                    Other (specify)
                  </label>
                </div>
              </div>
              <a class="btn ripple btn-primary d-grid" href="javascript:;">Apply Filter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import productsList from "./productsList.vue";
import Selectoptions from "@/shared/UI/selectoptions.vue";
import {
  productsData, mensOptions,
  mensValue,
  womenOptions,
  womenValue,
  electronicsOptions,
  electronicsValue,
  babyOptions,
  babyValue,
  sportsOptions,
  sportsValue
} from './productsData.js'
export default {
  components: {
    Pageheader,
    productsList,
    Selectoptions,
  },
  data() {
    return {
      productsData,
      mensOptions,
      mensValue,
      womenOptions,
      womenValue,
      electronicsOptions,
      electronicsValue,
      babyOptions,
      babyValue,
      sportsOptions,
      sportsValue,
    };
  },
};
</script>
