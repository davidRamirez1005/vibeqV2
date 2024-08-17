<template>
  <button @click="showAlert" class="btn ripple btn-primary" id="swal-basic">
    Click me
  </button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>
