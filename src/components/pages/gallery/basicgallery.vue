<template>
  <ul id="lightgallery" class="list-unstyled row mb-0">
    <li v-for="(src, index) in imgs" :key="index" class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-3">
      <a class="glightbox card" data-responsive="/images/media/jobs-landing/blog/1.jpg"
      data-src="/images/media/jobs-landing/blog/1.jpg"
      data-sub-html="<h4>Gallery Image 1</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
       @click="() => showImg(index)">
      <img :src="src" class="img-responsive" />
      </a>
    </li>

    <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide">
    </vue-easy-lightbox>
  </ul>
</template>

<script>
import image1 from "/images/media/jobs-landing/blog/1.jpg";
import image2 from "/images/media/jobs-landing/blog/2.jpg";
import image3 from "/images/media/jobs-landing/blog/3.jpg";
import image4 from "/images/media/jobs-landing/blog/1.jpg";
import image5 from "/images/media/jobs-landing/blog/5.jpg";
import image6 from "/images/media/jobs-landing/blog/2.jpg";
import image7 from "/images/media/jobs-landing/blog/3.jpg";
import image8 from "/images/media/jobs-landing/blog/4.jpg";
import image9 from "/images/media/jobs-landing/blog/9.jpg";
export default {
  name: "App",
  data() {
    return {
      visible: false,
      index: 0, // default: 0
      imgs: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image9,
        image8,
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    handleNext() {
      this.index >= this.imgs.length - 1 ? (this.index = 0) : (this.index += 1);
    },
    handlePrev() {
      this.index <= 0 ? (this.index = this.imgs.length - 1) : (this.index -= 1);
    },
  },
  mounted() {
    window.addEventListener("keyup", (event) => {
      if (event.keyCode === 37) this.handlePrev();
      if (event.keyCode === 39) this.handleNext();
    });
  },
};
</script>

<style scoped></style>
