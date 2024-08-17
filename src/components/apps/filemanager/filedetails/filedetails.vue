<template>
  <Pageheader heading="File-Details" :maintitle='["Apps", "File Manager", "File-Details"]' />

  <div class="row row-sm">
    <div class="col-xl-8 col-lg-12 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-body px-4 pt-4">
          <a href="javascript:;"><img src="/images/media/jobs-landing/blog/15.jpg" alt="img"
              class="rounded-3 w-100" /></a>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <h5 class="mb-3">File details :</h5>
          <div class="">
            <div class="row">
              <div class="col-xl-12">
                <div class="table-responsive">
                  <table class="table mb-0 border-top table-bordered text-nowrap">
                    <tbody>
                      <tr>
                        <th scope="row">File-name</th>
                        <td>image.jpg</td>
                      </tr>
                      <tr>
                        <th scope="row">File-size</th>
                        <td>12.45mb</td>
                      </tr>
                      <tr>
                        <th scope="row">uploaded-date</th>
                        <td>01-12-2020</td>
                      </tr>
                      <tr>
                        <th scope="row">uploaded-by</th>
                        <td>prityy abodh</td>
                      </tr>
                      <tr>
                        <th scope="row">image-width</th>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <th scope="row">image-height</th>
                        <td>600</td>
                      </tr>
                      <tr>
                        <th scope="row">File-formate</th>
                        <td>jpg</td>
                      </tr>
                      <tr>
                        <th scope="row">File-location</th>
                        <td>storage/photos/image.jpg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-8 col-lg-12 col-md-12">
      <div class="">
        <div class="h-100">
          <div id="owl-demo2" class="owl-carousel owl-carousel-icons2 mb-3 mt-3">
            <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="2000" :wrap-around="true">
              <Slide v-for="slide in owlCarouselData" :key="slide">
                <div class="item me-3">
                    <div class="card custom-card overflow-hidden mb-2">
                      <a href="javascript:;">
                        <img :src="slide.src" />
                      </a>
                      <div class="card-footer bd-t-0 py-3">
                        <div class="d-flex">
                          <div>
                            <h6 class="mb-0">221.jpg</h6>
                          </div>
                          <div class="ms-auto">
                            <h6 class="text-muted mb-0">120 KB</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <h5 class="mb-3">Recent Files</h5>
          <Recentfileinfo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import img1 from "/images/files/jpg/4.jpg";
import img2 from "/images/files/jpg/2.jpg";
import img6 from "/images/files/jpg/8.jpg";
import img5 from "/images/files/jpg/5.jpg";
import img7 from "/images/files/jpg/7.jpg";
import img9 from "/images/files/jpg/9.jpg";
import img10 from "/images/files/jpg/1.jpg";
import img8 from "/images/files/jpg/6.jpg";
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import Recentfileinfo from './recentfileinfo.vue'
export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
    Recentfileinfo,
    Pageheader
  },
  data: () => ({
    // carousel settings

    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    owlCarouselData: [
      {
        id: 1,
        src: img10,
        name: "Bitcoin BTC",
        value: 1.343434,
      },
      {
        id: 2,
        src: img9,
        name: "Ethereum ETH",
        value: 3.763674,
      },
      {
        id: 3,
        src: img1,
        name: "Ripple  XRP",
        value: 12.53647,
      },
      {
        id: 4,
        src: img7,
        name: "litecoin  LTC",
        value: 3.635387,
      },
      {
        id: 5,
        src: img5,
        name: "Dash DASH",
        value: 3.635387,
      },
      {
        id: 6,
        src: img6,
        name: "Monero  XMR",
        value: 5.34578,
      },
      {
        id: 7,
        src: img2,
        name: "Neo  NEO",
        value: 4.435456,
      },
      {
        id: 8,
        src: img8,
        name: "Steem STEEM",
        value: 2.345467,
      },
    ],

    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
});
</script>

<style scoped>
.carousel__next {
  display: none;
}

.carousel__prev {
  display: none;
}
</style>
