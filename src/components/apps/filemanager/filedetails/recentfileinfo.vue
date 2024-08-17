<template>
    <div class="row row-sm">
        <div class="col-6 col-md-3" data-responsive="/images/media/jobs-landing/blog/1.jpg" data-src="/images/media/jobs-landing/blog/1.jpg"
            data-sub-html="<h4>Gallery Image 1</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
            v-for="(src, index) in imgs" :key="index" @click="() => showImg(index)">
            <div class="card custom-card">
                <img :src="src" class="img-responsive rounded-3" />
            </div>
        </div>

        <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide">
        </vue-easy-lightbox>
    </div>
</template>
  
<script>
import image1 from "/images/files/jpg/1.jpg";
import image2 from "/images/files/jpg/2.jpg";
import image3 from "/images/files/jpg/3.jpg";
import image4 from "/images/files/jpg/4.jpg";
import image5 from "/images/files/jpg/5.jpg";
import image6 from "/images/files/jpg/6.jpg";
import image7 from "/images/files/jpg/7.jpg";
import image8 from "/images/files/jpg/8.jpg";
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
  
<style scoped>

</style>
  