<template>
  <Pageheader heading="Avatars" :maintitle='["Elements", "Avatars"]' />
  <!-- Start::row-1 -->
  <div class="row row-sm">
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
      <showcodeCard title="Stacked Avatars
      <p class='subtitle text-muted fs-12 fw-normal'>
              Group of avatars stacked together.
            </p>" :code="prism.stackedAvatars">
        <div class="avatar-list-stacked">
          <span class="avatar">
            <img src="/images/faces/2.jpg" alt="img">
          </span>
          <span class="avatar">
            <img src="/images/faces/8.jpg" alt="img">
          </span>
          <span class="avatar">
            <img src="/images/faces/2.jpg" alt="img">
          </span>
          <span class="avatar">
            <img src="/images/faces/10.jpg" alt="img">
          </span>
          <span class="avatar">
            <img src="/images/faces/4.jpg" alt="img">
          </span>
          <span class="avatar">
            <img src="/images/faces/13.jpg" alt="img">
          </span>
          <a class="avatar bg-primary text-fixed-white" href="javascript:void(0);">
            +8
          </a>
        </div>
      </showcodeCard>
    </div>
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
      <showcodeCard title='Rounded Stacked Avatars
              <p class="subtitle text-muted fs-12 fw-normal">
                Group of avatars stacked together.
              </p>' :code="prism.roundedStackedAvatars">
        <div class="avatar-list-stacked">
          <span class="avatar avatar-rounded">
            <img src="/images/faces/2.jpg" alt="img">
          </span>
          <span class="avatar avatar-rounded">
            <img src="/images/faces/8.jpg" alt="img">
          </span>
          <span class="avatar avatar-rounded">
            <img src="/images/faces/2.jpg" alt="img">
          </span>
          <span class="avatar avatar-rounded">
            <img src="/images/faces/10.jpg" alt="img">
          </span>
          <span class="avatar avatar-rounded">
            <img src="/images/faces/4.jpg" alt="img">
          </span>
          <span class="avatar avatar-rounded">
            <img src="/images/faces/13.jpg" alt="img">
          </span>
          <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
            +8
          </a>
        </div>
      </showcodeCard>
    </div>
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
      <showcodeCard title="Avatars" :code="prism.avatars">
        <span class="avatar me-2 avatar-radius-0">
          <img src="/images/faces/1.jpg" alt="img">
        </span>
        <span class="avatar me-2">
          <img src="/images/faces/2.jpg" alt="img">
        </span>
        <span class="avatar me-2 avatar-rounded">
          <img src="/images/faces/3.jpg" alt="img">
        </span>
      </showcodeCard>
    </div>
  </div>
  <!-- End::row-1 -->

  <!-- Start::row-2 -->
  <div class="row row-sm">
    <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
      <showcodeCard title='Avatar Sizes
              <p class="subtitle text-muted fs-12 fw-normal">
                Avatars of different sizes
              </p>' :code="prism.avatarSizes">
        <span class="avatar avatar-xs me-2">
          <img src="/images/faces/4.jpg" alt="img">
        </span>
        <span class="avatar avatar-sm me-2">
          <img src="/images/faces/5.jpg" alt="img">
        </span>
        <span class="avatar avatar-md me-2">
          <img src="/images/faces/6.jpg" alt="img">
        </span>
        <span class="avatar avatar-lg me-2">
          <img src="/images/faces/7.jpg" alt="img">
        </span>
        <span class="avatar avatar-xl me-2">
          <img src="/images/faces/8.jpg" alt="img">
        </span>
        <span class="avatar avatar-xxl me-2">
          <img src="/images/faces/9.jpg" alt="img">
        </span>
      </showcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
      <showcodeCard title='Avatar With Icons
            <p class="subtitle text-muted fs-12 fw-normal">
              Avatar contains icons to perform respective action.
            </p>' :code="prism.avatarWithIcons">
        <span class="avatar avatar-xs me-2 avatar-rounded">
          <img src="/images/faces/2.jpg" alt="img">
          <a href="javascript:void(0);" class="badge bg-success rounded-pill avatar-badge"><i
              class="fs-10 fe fe-camera"></i></a>
        </span>
        <span class="avatar avatar-sm me-2 avatar-rounded">
          <img src="/images/faces/3.jpg" alt="img">
          <a href="javascript:void(0);" class="badge rounded-pill bg-secondary avatar-badge"><i
              class="fs-10 fe fe-edit"></i></a>
        </span>
        <span class="avatar avatar-md me-2 avatar-rounded">
          <img src="/images/faces/14.jpg" alt="img">
          <a href="javascript:void(0);" class="badge rounded-pill bg-warning avatar-badge"><i
              class="fs-10 fe fe-plus"></i></a>
        </span>
        <span class="avatar avatar-lg me-2 avatar-rounded">
          <img src="/images/faces/13.jpg" alt="img">
          <a href="javascript:void(0);" class="badge rounded-pill bg-info avatar-badge"><i
              class="fs-10 fe fe-edit"></i></a>
        </span>
        <span class="avatar avatar-xl me-2 avatar-rounded">
          <img src="/images/faces/15.jpg" alt="img">
          <a href="javascript:void(0);" class="badge rounded-pill bg-success avatar-badge"><i
              class="fs-10 fe fe-camera"></i></a>
        </span>
        <span class="avatar avatar-xxl me-2 avatar-rounded">
          <img src="/images/faces/9.jpg" alt="img">
          <a href="javascript:void(0);" class="badge rounded-pill bg-danger avatar-badge"><i
              class="fs-10 fe fe-plus"></i></a>
        </span>
      </showcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
      <showcodeCard title='Avatar With Online Status Indicators
              <p class="subtitle text-muted fs-12 fw-normal">
                avatars having online status indicator.
              </p>' :code="prism.avatarWithOnlineStatus">
        <span class="avatar avatar-xs me-2 online avatar-rounded">
          <img src="/images/faces/8.jpg" alt="img">
        </span>
        <span class="avatar avatar-sm online me-2 avatar-rounded">
          <img src="/images/faces/10.jpg" alt="img">
        </span>
        <span class="avatar avatar-md me-2 online avatar-rounded">
          <img src="/images/faces/12.jpg" alt="img">
        </span>
        <span class="avatar avatar-lg me-2 online avatar-rounded">
          <img src="/images/faces/13.jpg" alt="img">
        </span>
        <span class="avatar avatar-xl me-2 online avatar-rounded">
          <img src="/images/faces/14.jpg" alt="img">
        </span>
        <span class="avatar avatar-xxl me-2 online avatar-rounded">
          <img src="/images/faces/15.jpg" alt="img">
        </span>
      </showcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
      <showcodeCard title='Avatar With Ofline Status Indicators
              <p class="subtitle text-muted fs-12 fw-normal">
                avatars having a offline status indicator.
              </p>' :code="prism.avatarWithOfflineStatus">
        <span class="avatar avatar-xs me-2 offline avatar-rounded">
          <img src="/images/faces/2.jpg" alt="img">
        </span>
        <span class="avatar avatar-sm offline me-2 avatar-rounded">
          <img src="/images/faces/3.jpg" alt="img">
        </span>
        <span class="avatar avatar-md me-2 offline avatar-rounded">
          <img src="/images/faces/4.jpg" alt="img">
        </span>
        <span class="avatar avatar-lg me-2 offline avatar-rounded">
          <img src="/images/faces/5.jpg" alt="img">
        </span>
        <span class="avatar avatar-xl me-2 offline avatar-rounded">
          <img src="/images/faces/6.jpg" alt="img">
        </span>
        <span class="avatar avatar-xxl me-2 offline avatar-rounded">
          <img src="/images/faces/7.jpg" alt="img">
        </span>
      </showcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
      <showcodeCard title='Avatars With Number Badges
              <p class="subtitle text-muted fs-12 fw-normal">
                Avatar numbers indicates the no. of unread notififactions/messages.
              </p>' :code="prism.avatarWithNumberBadge">
        <span class="avatar avatar-xs me-2 avatar-rounded">
          <img src="/images/faces/2.jpg" alt="img">
          <span class="badge rounded-pill bg-primary avatar-badge">2</span>
        </span>
        <span class="avatar avatar-sm me-2 avatar-rounded">
          <img src="/images/faces/3.jpg" alt="img">
          <span class="badge rounded-pill bg-secondary avatar-badge">5</span>
        </span>
        <span class="avatar avatar-md me-2 avatar-rounded">
          <img src="/images/faces/14.jpg" alt="img">
          <span class="badge rounded-pill bg-warning avatar-badge">1</span>
        </span>
        <span class="avatar avatar-lg me-2 avatar-rounded">
          <img src="/images/faces/13.jpg" alt="img">
          <span class="badge rounded-pill bg-info avatar-badge">7</span>
        </span>
        <span class="avatar avatar-xl me-2 avatar-rounded">
          <img src="/images/faces/15.jpg" alt="img">
          <span class="badge rounded-pill bg-success avatar-badge">3</span>
        </span>
        <span class="avatar avatar-xxl me-2 avatar-rounded">
          <img src="/images/faces/9.jpg" alt="img">
          <span class="badge rounded-pill bg-danger avatar-badge">9</span>
        </span>
      </showcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
      <showcodeCard title='Avatar With Initials
              <p class="subtitle text-muted fs-12 fw-normal">
                Avatar contains intials when user profile doesnt exist. </p>' :code="prism.avatarWithInitials">
        <span class="avatar avatar-xs m-2 bg-primary">
          xs
        </span>
        <span class="avatar avatar-sm m-2 bg-secondary">
          SM
        </span>
        <span class="avatar avatar-md m-2 bg-warning">
          MD
        </span>
        <span class="avatar avatar-lg m-2 bg-danger">
          LG
        </span>
        <span class="avatar avatar-xl m-2 bg-success">
          XL
        </span>
        <span class="avatar avatar-xxl m-2 bg-info">
          XXL
        </span>
      </showcodeCard>
    </div>
  </div>
  <!-- End::row-2 -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import showcodeCard from "@/shared/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/avatars.js';
export default { components: { Pageheader, showcodeCard }, data() { return { prism } } };
</script>

<style scoped></style>
