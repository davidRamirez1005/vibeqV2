<template>
  <Pageheader heading="Add Product" :maintitle='["E-commerce", "Add product"]' />
  <div class="row row-sm">
    <div class="col-lg-12 col-md-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="form-group">
            <label class="fw-medium form-label">Product Name</label>
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="form-group">
            <label class="fw-medium form-label">Category</label>
            <Selectoptions :options="options" placeholder="Choose one" 
              id="currency" name="currency" :value="value" />
          </div>
          <div class="form-group">
            <label class="fw-medium form-label">Price</label>
            <input type="text" class="form-control" placeholder="Price" />
          </div>
          <div class="ql-wrapper ql-wrapper-demo mb-3">
            <label class="fw-medium form-label">Product Description</label>
            <div id="quillEditor">
              <vue-editor v-model="content"></vue-editor>
            </div>
          </div>
          <label class="fw-medium form-label">Upload Product</label>
          <DropZone class="p-4" :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />

        </div>
        <div class="card-footer mb-1">
          <a href="javascript:void(0)" class="btn btn-primary me-2">Add Product</a>
          <a href="javascript:void(0)" class="btn btn-danger">Cancel</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import Selectoptions from "@/shared/UI/selectoptions.vue";
export default {
  components: {
    Pageheader,
    Selectoptions,
  },
  data() {
    return {
      value: null,
      options: ["festival", "Wedding", " Casual Wear", "Party Wear"],
      content: '',
    };
  },
};
</script>

<style scoped></style>
