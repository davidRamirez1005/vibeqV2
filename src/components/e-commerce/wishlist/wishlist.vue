<template>
  <Pageheader heading="Wishlist" :maintitle='["Ecommerce", "Wishlist"]' />
  <!--Row-->
  <div class="row row-sm" id="wishlist">
    <div class="col-md-12 col-lg-12 col-xl-12">
      <div class="row row-sm">
        <div v-for="(wishlist, index) in wishListData" :key="'event' + index"
          class="col-md-6 col-lg-4 col-xxl-3 col-sm-6 alert mb-0">
          <div class="card custom-card">
            <div class="p-0">
              <div class="product-grid">
                <div class="product-image">
                  <router-link :to="`${url}ecommerce/products-details`" class="image">
                    <img class="pic-1" alt="product-image-1" :src="wishlist.img" />
                  </router-link>
                  <a class="wishlist-icon" href="javascript:void(0)" @click="removeFromWishList(wishlist)"><i
                      class="fe fe-trash"></i></a>
                </div>
                <div class="product-content">
                  <div class="d-flex">
                    <div>
                      <h3 class="title"><a href="javascript:void(0)">{{ wishlist.title }}</a></h3>
                    </div>
                    <div class="price text-end ms-auto pb-0">
                      <span class="old-price">${{ wishlist.oldPrice }}</span>
                      <span class="fs-18">${{ wishlist.newPrice }}</span>
                    </div>
                  </div>
                  <div>

                    <star-rating :inline="true" :read-only="true" :star-size="15" :show-rating="false"
                      :rating="wishlist.rating"></star-rating>
                    <a href="javascript:void(0);" class="me-4 text-muted align-middle"> ({{ wishlist.reviews }})</a>
                  </div>
                  <div class="mt-3 d-grid">
                    <router-link :to="`${url}ecommerce/cart`" class="btn btn-block btn-primary">
                      <i class="fe fe-shopping-cart me-2"></i>Add to Cart
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="javascript:void(0)">Prev</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="javascript:void(0)">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
          <li class="page-item">
            <a class="page-link" href="javascript:void(0)">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <!-- row closed  -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import { wishListData } from "./wishlistData";
import StarRating from 'vue-star-rating';
export default {
  components: { Pageheader, StarRating }, data() {
    return {
      wishListData,
      url: import.meta.env.BASE_URL,
    }
  },
  methods: {
    removeFromWishList(item) {
      this.wishListData = this.wishListData.filter(items => items.id !== item.id)
    }
  },
};
</script>

<style scoped></style>
