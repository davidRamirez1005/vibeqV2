<template>
  <!-- Row -->
  <Pageheader heading="Settings" :maintitle='["Pages", "Settings"]' />
  <div class="row row-sm">
    <div class="col-lg-4 col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div>
            <h3 class="card-title fs-18">
              <label class="main-content-label fs-15">Settings</label>
            </h3>
          </div>
        </div>
        <div class="card-body">
          <div class="main-content-left main-content-left-mail">
            <div class="main-mail-menu">
              <nav class="nav main-nav-column ">
                <a class="nav-link thumb active" href="javascript:void(0)"><i class="fe fe-user"></i> Account
                </a>
                <a class="nav-link thumb" href="javascript:void(0)"><i class="fe fe-lock"></i> Privacy & Security</a>
                <a class="nav-link thumb" href="javascript:void(0)"><i class="fe fe-edit-2"></i> General</a>
                <a class="nav-link thumb" href="javascript:void(0)"><i class="fe fe-info"></i> Help & Support</a>
                <a class="nav-link thumb" href="javascript:void(0)"><i class="fe fe-mail"></i> Emails</a>
                <a class="nav-link thumb" href="javascript:void(0)"><i class="fe fe-flag"></i> Language & Region</a>
                <a class="nav-link thumb" href="javascript:void(0)"><i class="fe fe-bell"></i> Notifications</a>
                <a class="nav-link thumb" href="javascript:void(0)"><i class="fe fe-settings"></i> Blog</a>
              </nav>
            </div>
          </div>
        </div>
        <div class="card-footer px-4 rounded-0">
          <button class="btn btn-primary w-100">Save Changes</button>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-xl-9">
      <div class="row row-sm">
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex">
                    <div class="settings-main-icon me-4 mt-1">
                      <div class="avatar avatar-md bg-primary-transparent text-primary">
                        <i class="ti-home fs-18"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fs-14 d-flex text-dark fs-uppercase">Dashboard</h5>
                      <p class="fs-13 text-muted mb-0">
                        Dashboard Settings such as sidemenu,header and main page can be
                        Controlled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer rounded-0">
              <a href="javascript:void(0)" class="fs-14 mb-0 d-block d-sm-inline-flex">Go to Settings</a>
              <div class="form-check form-check-md form-switch float-end mb-0">
                <input class="form-check-input" type="checkbox" role="switch" id="switch-md1">
                <label class="form-check-label" for="switch-md1">Restore default</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex">
                    <div class="settings-main-icon me-4 mt-1">
                      <div class="avatar avatar-md bg-primary-transparent text-primary">
                        <i class="ti-layout-grid2 fs-18"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fs-14 d-flex text-dark fs-uppercase">Web Apps</h5>
                      <p class="fs-13 text-muted mb-0">
                        Web apps settings such as Apps,Elements,Advanced Ui & Mail can be
                        Controlled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer rounded-0">
              <a href="javascript:void(0)" class="fs-14 mb-0 d-block d-sm-inline-flex">Go to Settings</a>
              <div class="form-check form-check-md form-switch float-end mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch-md1" checked>
                                            <label class="form-check-label" for="switch-md1">Restore default</label>
                                        </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex">
                    <div class="settings-main-icon me-4 mt-1">
                      <div class="avatar avatar-md bg-primary-transparent text-primary">
                        <i class="ti-pencil fs-18"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fs-14 d-flex text-dark fs-uppercase">General</h5>
                      <p class="fs-13 text-muted mb-0">
                        General settings such as Icons,Charts,Ecommerce can be Controlled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer rounded-0">
              <a href="javascript:void(0)" class="fs-14 mb-0 d-block d-sm-inline-flex">Go to Settings</a>
              <div class="form-check form-check-md form-switch float-end mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch-md1" checked>
                                            <label class="form-check-label" for="switch-md1">Restore default</label>
                                        </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex">
                    <div class="settings-main-icon me-4 mt-1">
                      <div class="avatar avatar-md bg-primary-transparent text-primary">
                        <i class="ti-flag-alt-2 fs-18"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fs-14 d-flex text-dark fs-uppercase">
                        Language & Region
                      </h5>
                      <p class="fs-13 text-muted mb-0">
                        In this settings we can change the region and language manually.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer rounded-0">
              <a href="javascript:void(0)" class="fs-14 mb-0 d-block d-sm-inline-flex">Go to Settings</a>
              <div class="form-check form-check-md form-switch float-end mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch-md1">
                                            <label class="form-check-label" for="switch-md1">Restore default</label>
                                        </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex">
                    <div class="settings-main-icon me-4 mt-1">
                      <div class="avatar avatar-md bg-primary-transparent text-primary">
                        <i class="ti-bell fs-18"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fs-14 d-flex text-dark fs-uppercase">Notification</h5>
                      <p class="fs-13 text-muted mb-0">
                        Notification settings we can control the notification privacy and
                        security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer rounded-0">
              <a href="javascript:void(0)" class="fs-14 mb-0 d-block d-sm-inline-flex">Go to Settings</a>
              <div class="form-check form-check-md form-switch float-end mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch-md1" checked>
                                            <label class="form-check-label" for="switch-md1">Restore default</label>
                                        </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex">
                    <div class="settings-main-icon me-4 mt-1">
                      <div class="avatar avatar-md bg-primary-transparent text-primary">
                        <i class="ti-settings fs-18"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fs-14 d-flex text-dark fs-uppercase">Blog</h5>
                      <p class="fs-13 text-muted mb-0">
                        In this settings we can modify all Blog related settings in this
                        template.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer rounded-0">
              <a href="javascript:void(0)" class="fs-14 mb-0 d-block d-sm-inline-flex">Go to Settings</a>
              <div class="form-check form-check-md form-switch float-end mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch-md1">
                                            <label class="form-check-label" for="switch-md1">Restore default</label>
                                        </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex">
                    <div class="settings-main-icon me-4 mt-1">
                      <div class="avatar avatar-md bg-primary-transparent text-primary">
                        <i class="ti-lock fs-18"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fs-14 d-flex text-dark fs-uppercase">
                        Privacy & Security
                      </h5>
                      <p class="fs-13 text-muted mb-0">
                        In this we can control the privacy related settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer rounded-0">
              <a href="javascript:void(0)" class="fs-14 mb-0 d-block d-sm-inline-flex">Go to Settings</a>
              <div class="form-check form-check-md form-switch float-end mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch-md1">
                                            <label class="form-check-label" for="switch-md1">Restore default</label>
                                        </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex">
                    <div class="settings-main-icon me-4 mt-1">
                      <div class="avatar avatar-md bg-primary-transparent text-primary">
                        <i class="ti-info-alt fs-18"></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fs-14 d-flex text-dark fs-uppercase">Help & Support</h5>
                      <p class="fs-13 text-muted mb-0">
                        In this we can know about how to change settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer rounded-0">
              <a href="javascript:void(0)" class="fs-14 mb-0 d-block d-sm-inline-flex">Go to Settings</a>
              <div class="form-check form-check-md form-switch float-end mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" id="switch-md1" checked>
                                            <label class="form-check-label" for="switch-md1">Restore default</label>
                                        </div>
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
export default {
  components: { Pageheader },
};
</script>

<style scoped></style>
