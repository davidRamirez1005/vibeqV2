<template>
  <!-- Row -->
  <Pageheader heading="Blog-Post" :maintitle='["Apps", "Blog", "Blog-Post"]' />
  <div class="row row-sm">
    <div class="col-lg-12 col-md-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="form-group">
            <label class="form-label fw-medium">Title</label>
            <input type="text" class="form-control" value="Title" />
          </div>
          <div class="form-group">
            <label class="form-label fw-medium">Category</label>
            <Selectoptions :options="options" placeholder="Choose one"
              class="icons_select2" id="language" name="language" :value="value" />
          </div>
          <div class="form-group">
            <label class="form-label fw-medium">Type</label>
            <div class="d-md-flex ad-post-details">
              <label class="custom-control custom-radio mb-2 me-4">
                <input type="radio" class="form-check-input" name="radios2" value="option1" />
                <span class="custom-control-label ms-1">Image</span>
              </label>
              <label class="custom-control custom-radio mb-2 me-4">
                <input type="radio" class="form-check-input" name="radios2" value="option2" checked="" />
                <span class="custom-control-label ms-1">Video</span>
              </label>
              <label class="custom-control custom-radio mb-2 me-4">
                <input type="radio" class="form-check-input" name="radios2" value="option3" />
                <span class="custom-control-label ms-1">Audio</span>
              </label>
              <label class="custom-control custom-radio mb-2">
                <input type="radio" class="form-check-input" name="radios2" value="option4" />
                <span class="custom-control-label ms-1">Text</span>
              </label>
            </div>
          </div>
          <div class="ql-wrapper ql-wrapper-demo mb-3">
            <label class="form-label fw-medium">Post Description</label>
            <vue-editor v-model="content"></vue-editor>
          </div>
          <label class="form-label fw-medium">Upload File</label>
          <div >
                <DropZone class="p-4 border rounded-6 mb-4 form-group" :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />
          </div>
          <div class="form-group mb-0">
            <label class="">Upload Video URL</label>
            <input type="text" class="form-control" placeholder="https://videos.com"
              value="https://www.youtube.com/embed/tMWkeBIohBs" />
          </div>
        </div>
        <div class="card-footer mb-1">
          <a href="javascript:void(0)" class="btn btn-primary me-2">Post</a>
          <a href="javascript:void(0)" class="btn btn-danger">Cancel</a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import Selectoptions from "@/shared/UI/selectoptions.vue";
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
export default {
  components: { Pageheader, Selectoptions },
  data() {
    return {
      value: null,
      options: ["Fashion", "Marketing", "Business", "Health", "Science", "Life Style"],
      content : ''
    };
  },
};
</script>

<style scoped></style>
