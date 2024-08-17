<template>
  <!-- Start::row-1 -->

  <swiper 
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '1400': {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }" 
     :loop="true" :autoplay="true" :modules="modules" :spaceBetween="10">
    <swiper-slide>
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex no-block align-items-center justify-content-between">
            <div>
              <span class="text-muted fs-13 mb-3">Bitcoin BTC</span>
              <h3 class="m-0 mt-2">1.343434</h3>
            </div>
            <div class="mt-auto">
              <img src="/images/svgs/crypto-currencies/btc.svg" class="wd-30 hd-30" alt="">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex no-block align-items-center justify-content-between">
            <div>
              <span class="text-muted fs-13 mb-3">Ethereum ETH</span>
              <h3 class="m-0 mt-2">3.763674</h3>
            </div>
            <div class="mt-auto">
              <img src="/images/svgs/crypto-currencies/eth.svg" class="wd-30 hd-30" alt="">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex no-block align-items-center justify-content-between">
            <div>
              <span class="text-muted fs-13 mb-3">Ripple XRP</span>
              <h3 class="m-0 mt-2">12.53647</h3>
            </div>
            <div class="mt-auto">
              <img src="/images/svgs/crypto-currencies/xrp.svg" class="wd-30 hd-30" alt="">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex no-block align-items-center justify-content-between">
            <div>
              <span class="text-muted fs-13 mb-3">litecoin LTC</span>
              <h3 class="m-0 mt-2">3,635387</h3>
            </div>
            <div class="mt-auto">
              <img src="/images/svgs/crypto-currencies/ltc.svg" class="wd-30 hd-30" alt="">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex no-block align-items-center justify-content-between">
            <div>
              <span class="text-muted fs-13 mb-3">Dash DASH</span>
              <h3 class="m-0 mt-2">3,635387</h3>
            </div>
            <div class="mt-auto">
              <img src="/images/svgs/crypto-currencies/dash.svg" class="wd-30 hd-30" alt="">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex no-block align-items-center justify-content-between">
            <div>
              <span class="text-muted fs-13 mb-3">Monero XMR</span>
              <h3 class="m-0 mt-2">5,34578</h3>
            </div>
            <div class="mt-auto">
              <img src="/images/svgs/crypto-currencies/xmr.svg" class="wd-30 hd-30" alt="">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex no-block align-items-center justify-content-between">
            <div>
              <span class="text-muted fs-13 mb-3">Neo NEO</span>
              <h3 class="m-0 mt-2">4,435456</h3>
            </div>
            <div class="mt-auto">
              <img src="/images/svgs/crypto-currencies/neo.svg" class="wd-30 hd-30" alt="">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex no-block align-items-center justify-content-between">
            <div>
              <span class="text-muted fs-13 mb-3">Steem STEEM</span>
              <h3 class="m-0 mt-2">2,345467</h3>
            </div>
            <div class="mt-auto">
              <img src="/images/svgs/crypto-currencies/steem.svg" class="wd-30 hd-30" alt="">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <!--End::row-1 -->
</template>

<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay, FreeMode } from 'swiper/modules';
export default defineComponent({
  components: {
    Swiper, SwiperSlide
  },

  setup() {
    return {
      modules: [Autoplay, FreeMode],
    };
  },
});
</script>
<style scoped></style>
