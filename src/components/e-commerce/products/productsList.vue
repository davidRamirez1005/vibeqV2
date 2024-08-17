<template>
  <div class="card custom-card">
    <div class="p-0 ">
      <div class="product-grid">
        <div class="product-image">
          <a href="javascript:;" class="image">
            <img class="pic-1" alt="product-image-1" :src="item.img1" />
            <img class="pic-2" alt="product-image-2" :src="item.img2" />
          </a>
          <router-link :to="`${url}ecommerce/wishlist`" class="product-like-icon" href="javascript:;"><i
              class="far fa-heart"></i></router-link>
          <span v-if="item.discount" :class="item.dicountBadge" class="product-discount-label">{{ item.discount }}</span>
          <div class="product-link">
            <router-link :to="`${url}ecommerce/cart`">
              <i class="fa fa-shopping-cart"></i>
              <span>Add to cart</span>
            </router-link>
            <router-link :to="`${url}ecommerce/products-details`">
              <i class="fas fa-eye"></i>
              <span>Quick View</span>
            </router-link>
          </div>
        </div>
        <div class="product-content">
          <h3 class="title"><a href="javascript:;">{{ item.title }}</a></h3>
          <div class="price">
            <span class="old-price">${{ item.oldPrice }}</span><span class="text-danger">${{ item.newPrice }}</span>
          </div>
          <ul class="rating">

            <star-rating :inline="true" :read-only="true" :star-size="20" :show-rating="false"
              :rating="item.rating"></star-rating>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import StarRating from 'vue-star-rating';
export default {
  props: ["item"],
  components: {
    StarRating
  },
  data() {
    return {
      url: import.meta.env.BASE_URL,
    }
  }
};
</script>
<style scoped></style>
