<template>
  <button @click="showAlert" class="btn ripple btn-primary" id="swal-basic">
    Click me
  </button>
</template>
<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="javascript:;">Why do I have this issue?</a>',
      });
    },
  },
};
</script>
