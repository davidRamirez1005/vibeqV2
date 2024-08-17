<template>
  <button @click="showAlert" class="btn ripple btn-primary" id="swal-basic">
    Click me
  </button>
</template>

<script>
import imag1 from "/images/faces/10.jpg";
export default {
  methods: {
    showAlert() {
      this.$swal({
        title: "Well!",
        text: "Modal with a custom image.",
        imageUrl: imag1,
        imageWidth: 'auto',
        imageHeight: 'auto',
        imageAlt: "Custom image",
      });
    },
  },
};
</script>
