<template>
  <!-- Row -->
  <Pageheader heading="Blog Page" :maintitle='["Apps", "Blog", "Blog Page"]' />
  <div class="row row-sm">
    <div class="col-xl-6 col-lg-12 col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="px-4 pt-4">
            <router-link :to="`${url}apps/blog/blog-details`"><img src="/images/media/jobs-landing/blog/7.jpg" alt="img"
                class="rounded-lg w-100 rounded-2" /></router-link>
        </div>
        <div>
            <div class="p-4">
                <div class="item-card-desc d-md-flex mb-3">
                    <a href="javascript:void(0);" class="d-flex me-3 mb-2"><span class="fe fe-calendar text-muted me-2 fs-18"></span><div class="mt-0 mt-0 text-dark">20-Mar-2021</div></a>
                    <a href="javascript:void(0);" class="d-flex mb-2"><span class="fe fe-user text-muted me-2 fs-18"></span><div class="mt-0 mt-0 text-dark">Dennis Mark</div></a>
                    <div class="ms-auto mb-2">
                        <a class="me-0 d-flex" href="javascript:void(0);"><span class="fe fe-message-square text-muted me-2 fs-18"></span><div class="mt-0 mt-0 text-dark">6 Comments</div></a>
                    </div>
                </div>
                <a href="javascript:void(0);" class="mt-4"><h5 class="fw-medium">Excepteur  occaecat cupidatat</h5></a>
                <p class="mb-0">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
            </div>
            <div class="border-top">
                <div class="p-4">
                    <div class="avatar-list-stacked">
                        <span class="avatar avatar-rounded avatar-md">
                            <img src="/images/faces/12.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded avatar-md">
                            <img src="/images/faces/7.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded avatar-md">
                            <img src="/images/faces/5.jpg" alt="img">
                        </span>
                        <span class="avatar avatar-rounded avatar-md">
                            <img src="/images/faces/6.jpg" alt="img">
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-lg-12 col-md-12">
      <div class="card custom-card">
      <div class="card-body p-3">
        <div class="row g-0 blog-list">
          <div class="col-xl-5 col-lg-12 col-md-12">
            <div class="card-body p-0">
              <div class="item-card-img">
                <router-link :to="`${url}apps/blog/blog-details`">
                  <img class="card-img-left h-130 w-100 rounded-start" src="/images/media/jobs-landing/blog/8.jpg"
                    alt="" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-12 col-md-12">
            <div class="card-body p-2 px-4">
              <router-link :to="`${url}apps/blog/blog-details`">
                <h5 class="fw-semibold mt-3">
                  Circumstances Certain claims
                </h5>
              </router-link>
              <p class="">
                I of human happiness. sint occaecat ccaecat cupidatat non proident, sunt
                in culpa qui officia cupidatat non proident, sunt in culpa qui officia
                deserunt No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure.
              </p>
              <div class="media py-2 mt-0 border-top"></div>
              <div class="item-card-desc d-flex gap-1">
                <div class="avatar-md avatar online flex-shrink-0">
                  <img alt="avatar" class="rounded-circle" src="/images/faces/2.jpg" />
                </div>
                <div class="main-contact-body">
                  <h6>Abigail Johnson</h6>
                  <span class="phone">2 days ago</span>
                </div>
                <div class="ms-auto mb-2">
                  <a class="me-0 d-flex" href="javascript:;"><span
                      class="fe fe-message-square text-muted me-2 fs-18"></span>
                    <div class="mt-0 mt-0 text-dark">6 Comments</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="card custom-card">
      <div class="card-body p-3">
        <div class="row g-0 blog-list">
          <div class="col-xl-5 col-lg-12 col-md-12">
            <div class="card-body p-0">
              <div class="item-card-img">
                <router-link :to="`${url}apps/blog/blog-details`">
                  <img class="card-img-left h-130 w-100 rounded-start op-8" src="/images/media/jobs-landing/blog/10.jpg"
                    alt="" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-12 col-md-12">
            <div class="card-body p-2 px-4">
              <router-link :to="`${url}apps/blog/blog-details`">
                <h5 class="fw-semibold mt-3">Teri Dactyl Certain</h5>
              </router-link>
              <p class="">
                I of human happiness. sint occaecat ccaecat cupidatat non proident, sunt
                in culpa qui officia cupidatat non proident, sunt in culpa qui officia
                deserunt No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure.
              </p>
              <div class="media py-2 mt-0 border-top"></div>
              <div class="item-card-desc d-flex gap-1">
                <div class="avatar-md avatar online flex-shrink-0">
                  <img alt="avatar" class="rounded-circle" src="/images/faces/4.jpg" />
                </div>
                <div class="main-contact-body">
                  <h6>Christian Lerio</h6>
                  <span class="phone">3 days ago</span>
                </div>
                <div class="ms-auto mb-2">
                  <a class="me-0 d-flex" href="javascript:;"><span
                      class="fe fe-message-square text-muted me-2 fs-18"></span>
                    <div class="mt-0 mt-0 text-dark">5 Comments</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="card custom-card">
      <div class="card-body p-3">
        <div class="row g-0 blog-list">
          <div class="col-xl-5 col-lg-12 col-md-12">
            <div class="card-body p-0">
              <div class="item-card-img">
                <router-link :to="`${url}apps/blog/blog-details`">
                  <img class="card-img-left h-130 w-100 rounded-start op-9" src="/images/media/jobs-landing/blog/9.jpg"
                    alt="" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-12 col-md-12">
            <div class="card-body p-2 px-4">
              <router-link :to="`${url}apps/blog/blog-details`">
                <h5 class="fw-semibold mt-3">
                  Circumstances Certain claims
                </h5>
              </router-link>
              <p class="">
                I of human happiness. sint occaecat ccaecat cupidatat non proident, sunt
                in culpa qui officia cupidatat non proident, sunt in culpa qui officia
                deserunt No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure.
              </p>
              <div class="media py-2 mt-0 border-top"></div>
              <div class="item-card-desc d-flex gap-1">
                <div class="avatar-md avatar online flex-shrink-0">
                  <img alt="avatar" class="rounded-circle" src="/images/faces/5.jpg" />
                </div>
                <div class="main-contact-body">
                  <h6>Christian Lerio</h6>
                  <span class="phone">3 days ago</span>
                </div>
                <div class="ms-auto mb-2">
                  <a class="me-0 d-flex" href="javascript:;"><span
                      class="fe fe-message-square text-muted me-2 fs-18"></span>
                    <div class="mt-0 mt-0 text-dark">2 Comments</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Row -->
  <div class="row row-sm">
    <div class="col-xl-3 col-md-6">
      <div class="card custom-card">
        <router-link :to="`${url}apps/blog/blog-details`">
          <img class="card-img-top w-100 blog-img" src="/images/media/jobs-landing/blog/14.jpg" alt="" />
        </router-link>
        <div class="card-body">
          <h5 class="main-content-label mb-3 fs-16">Excepteur occaecat cupidatat</h5>
          <p class="card-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <a class="btn btn-sm ripple btn-primary" href="javascript:;">Read More<i class="fe fe-arrow-right mx-1"></i></a>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card custom-card">
        <router-link :to="`${url}apps/blog/blog-details`"><img class="card-img-top w-100 blog-img"
            src="/images/media/jobs-landing/blog/11.jpg" alt="" /></router-link>
        <div class="card-body">
          <h5 class="main-content-label mb-3 fs-16">Teri Dactyl Certain</h5>
          <p class="card-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <a class="btn btn-sm ripple btn-primary" href="javascript:;">Read More<i class="fe fe-arrow-right mx-1"></i></a>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card custom-card">
        <router-link :to="`${url}apps/blog/blog-details`"><img class="card-img-top w-100 blog-img op-9"
            src="/images/media/jobs-landing/blog/12.jpg" alt="" /></router-link>
        <div class="card-body">
          <h5 class="main-content-label mb-3 fs-16">Circumstances Certain claims</h5>
          <p class="card-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <a class="btn btn-sm ripple btn-primary" href="javascript:;">Read More<i class="fe fe-arrow-right mx-1"></i></a>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card custom-card">
        <router-link :to="`${url}apps/blog/blog-details`"><img class="card-img-top w-100 blog-img op-9"
            src="/images/media/jobs-landing/blog/13.jpg" alt="" /></router-link>
        <div class="card-body">
          <h5 class="main-content-label mb-3 fs-16">The standard chunk of Lorem</h5>
          <p class="card-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <a class="btn btn-sm ripple btn-primary" href="javascript:;">Read More<i class="fe fe-arrow-right mx-1"></i></a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Row -->
  <div class="row row-sm">
    <div class="col-lg-6">
      <div class="card card-aside custom-card">
        <router-link :to="`${url}apps/blog/blog-details`" class="card-aside-column cover-image rounded-start-11 blogBg5"></router-link>
        <div class="card-body">
          <router-link :to="`${url}apps/blog/blog-details`">
            <span class="main-content-label fs-16">Blog Title</span>
          </router-link>
          <div class="mt-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </div>
          <div class="d-flex align-items-center pt-3 mt-auto">
            <div class="main-img-user avatar avatar-sm me-3">
              <router-link :to="`${url}pages/profile`"><img src="/images/faces/1.jpg" class="w-10 rounded-circle"
                  alt="avatar-img" /></router-link>
            </div>
            <div>
              <router-link :to="`${url}pages/profile`" class="text-default">Alica Nestle</router-link>
              <small class="d-block text-muted">15 mintues ago</small>
            </div>
            <div class="ms-auto text-muted">
              <a href="javascript:void(0)" class="icon d-none d-md-inline-block ms-3"><i
                  class="far fa-heart me-1"></i></a>
              <a href="javascript:void(0)" class="icon d-none d-md-inline-block ms-3"><i class="far fa-thumbs-up"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card card-aside custom-card">
        <div class="card-body">
          <router-link :to="`${url}apps/blog/blog-details`">
            <span class="main-content-label fs-16">Blog Title</span>
          </router-link>
          <div class="mt-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </div>
          <div class="d-flex align-items-center pt-3 mt-auto">
            <div class="main-img-user avatar avatar-sm me-3">
              <router-link :to="`${url}pages/profile`"><img src="/images/faces/2.jpg" class="w-10 rounded-circle"
                  alt="avatar-img" /></router-link>
            </div>
            <div>
              <router-link :to="`${url}pages/profile`" class="text-default">Alica Nestle</router-link>
              <small class="d-block text-muted">15 mintues ago</small>
            </div>
            <div class="ms-auto text-muted">
              <a href="javascript:void(0)" class="icon d-none d-md-inline-block ms-3"><i
                  class="far fa-heart me-1"></i></a>
              <a href="javascript:void(0)" class="icon d-none d-md-inline-block ms-3"><i class="far fa-thumbs-up"></i></a>
            </div>
          </div>
        </div>
        <router-link :to="`${url}apps/blog/blog-details`" class="blogBg6 card-aside-column cover-image rounded-end-11"
></router-link>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";

export default {
  components: { Pageheader },
  data() {
    return {
      url: import.meta.env.BASE_URL,
    }
  }
};
</script>

<style scoped></style>
