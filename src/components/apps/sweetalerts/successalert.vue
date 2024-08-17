<template>
  <button @click="showAlert" class="btn ripple btn-primary" id="swal-basic">
    Click me
  </button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      this.$swal("Good job!", "You clicked the button!", "success");
    },
  },
};
</script>
