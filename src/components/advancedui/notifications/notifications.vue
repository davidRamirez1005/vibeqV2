<template>
  <!-- Row -->
  <Pageheader heading="Notification" :maintitle='["AdvancedU-UI", "Notification"]' />
  <div class="row">
    <div class="col-md-12">
      <!-- div -->
      <div class="card custom-card mg-b-20">
        <div class="card-body">
          <div class="main-content-label mg-b-5">Basic</div>
          <p class="text-muted card-sub-title">
            It is Very Easy to Customize and it uses in website apllication.
          </p>
          <div class="example border-0 p-0">
            <div class="btn-list">
              <button class="btn btn-primary mg-t-5" @click="Multilinetoast">
                sample
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card custom-card mg-b-20">
        <div class="card-body">
          <div class="main-content-label mg-b-5">Position Notification</div>
          <p class="text-muted card-sub-title">
            It is Very Easy to Customize and it uses in website apllication.
          </p>

          <div class="example border-0 p-0">
            <div class="btn-list" id="el">
              <button class="btn btn-light mg-t-5" @click="ToastTop">
                Top
              </button>
              <button class="btn btn-light mg-t-5" @click="ToastCenter">
                Center
              </button>
              <button class="btn btn-light mg-t-5" @click="ToastRight">
                Right
              </button>

              <button class="btn btn-light mg-t-5" @click="ToastLeft">
                Left
              </button>
              <button class="btn btn-light mg-t-5" @click="ToastBottomRight">
                Bottom
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card custom-card mg-b-20">
        <div class="card-body">
          <div class="main-content-label mg-b-5">Notification Types</div>
          <p class="text-muted card-sub-title">
            It is Very Easy to Customize and it uses in website apllication.
          </p>
          <div class="example border-0 p-0">
            <div class="btn-list">
              <button class="btn btn-dark mg-t-5" @click="ToastDefault">Default</button>
              <button class="btn btn-success mg-t-5" @click="ToastSuccess">
                Success
              </button>
              <button class="btn btn-danger mg-t-5" @click="ToastError">
                Error</button>
              <button class="btn btn-warning mg-t-5" @click="ToastWarning">
                Warning
              </button>
              <button class="btn btn-info mg-t-5" @click="ToastInfo">Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  components: { Pageheader },
  methods: {
    ToastTop() {
      toast("ToastTop !", {
        position: toast.POSITION.TOP_LEFT,
        closeButton: true,
        hideProgressBar: true,
      });
    },
    ToastCenter() {
      toast("ToastCenter !", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
      });
    },
    ToastRight() {
      toast("ToastRight", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    },
    ToastBottomRight() {
      toast("ToastBottomRight!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
      });
    },
    ToastLeft() {
      toast("ToastLeft!", {
        position: toast.POSITION.BOTTOM_LEFT,
        hideProgressBar: true,
      });
    },
    ToastSuccess() {
      toast.success("ToastSuccess!", {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
      });
    },
    ToastWarning() {
      toast.warning("ToastWarning!", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    },
    ToastError() {
      toast.error("Custom Style Notification with css class!", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
      });
    },
    ToastDefault() {
      toast.dark("ToastDefault!", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      });
    },
    ToastInfo() {
      toast.info("ToastInfo!", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
      });
    },


    Multilinetoast() {
      toast("Default Notification !");
    },
  },
};
</script>

<style scoped></style>
