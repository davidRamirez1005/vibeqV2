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
      this.$swal(" Vue world!!!");
    },
  },
};
</script>
