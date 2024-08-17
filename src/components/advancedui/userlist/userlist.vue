<template>
  <Pageheader heading="User List" :maintitle='["Advanced-UI", "User List"]' />

  <!--Row-->
  <div class="row row-sm">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
      <div class="card custom-card">
        <div class="card-header border-bottom-0 pb-0 d-block">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label class="main-content-label mb-0 pt-1">User Table</label>
                                    <div class="ms-auto float-end">
                                        <div class="">
                                            <a href="javascript:void(0);" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fe fe-more-horizontal"></i></a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="javascript:void(0);">Today</a>
                                                <a class="dropdown-item" href="javascript:void(0);">Last Week</a>
                                                <a class="dropdown-item" href="javascript:void(0);">Last Month</a>
                                                <a class="dropdown-item" href="javascript:void(0);">Last Year</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="fs-12 text-gray-5 mt-0 mb-2">Example of Spruha Simple Table. <a href="javascript:void(0);" class="text-primary">Learn more</a></p>
                            </div>
        <div class="card-body">
          <div class="table-responsive border userlist-table">
            <table class="table card-table table-striped table-vcenter text-nowrap mb-0">
              <thead>
                <tr>
                  <th class="wd-lg-8p"><span>User</span></th>
                  <th class="wd-lg-20p"><span></span></th>
                  <th class="wd-lg-20p"><span>Created</span></th>
                  <th class="wd-lg-20p"><span>Status</span></th>
                  <th class="wd-lg-20p"><span>Email</span></th>
                  <th class="wd-lg-20p">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/1.jpg">
                    </div>
                  </td>
                  <td>Megan Peters</td>
                  <td>08/06/2020</td>
                  <td class="text-center">
                    <span class="label text-muted d-flex"
                      ><span class="dot-label bg-gray-300 me-1"></span>Inactive</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">mila@kunis.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/2.jpg">
                    </div>
                  </td>
                  <td>George Clooney</td>
                  <td>12/06/2020</td>
                  <td class="text-center">
                    <span class="label text-success d-flex"
                      ><span class="dot-label bg-success me-1"></span>Active</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">marlon@brando.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/3.jpg">
                    </div>
                  </td>
                  <td>Ryan Gossling</td>
                  <td>14/06/2020</td>
                  <td class="text-center">
                    <span class="label text-danger d-flex"
                      ><span class="dot-label bg-danger me-1"></span> Banned</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">jack@nicholson</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/1.jpg">
                    </div>
                  </td>
                  <td>Emma Watson</td>
                  <td>16/06/2020</td>
                  <td class="text-center">
                    <span class="label text-warning d-flex"
                      ><span class="dot-label bg-warning me-1"></span>Pending</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">jack@nicholsonm</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/12.jpg">
                    </div>
                  </td>
                  <td>Mila Kunis</td>
                  <td>18/06/2020</td>
                  <td class="text-center">
                    <span class="label text-muted d-flex"
                      ><span class="dot-label bg-gray-300 me-1"></span>Inactive</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">mila@kunis.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/4.jpg">
                    </div>
                  </td>
                  <td>Phil Watson</td>
                  <td>23/06/2020</td>
                  <td class="text-center">
                    <span class="label text-success d-flex"
                      ><span class="dot-label bg-success me-1"></span>active</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">phil@watson.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/5.jpg">
                    </div>
                  </td>
                  <td>Sonia Robertson</td>
                  <td>25/06/2020</td>
                  <td class="text-center">
                    <span class="label text-success d-flex"
                      ><span class="dot-label bg-success me-1"></span>active</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">robertson@sonia.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/7.jpg">
                    </div>
                  </td>
                  <td>Adam Hamilton</td>
                  <td>31/06/2020</td>
                  <td class="text-center">
                    <span class="label text-danger d-flex"
                      ><span class="dot-label bg-danger me-1"></span>Banned</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">mila@kunis.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/9.jpg">
                    </div>
                  </td>
                  <td>Leah Morgan</td>
                  <td>02/07/2020</td>
                  <td class="text-center">
                    <span class="label text-warning d-flex"
                      ><span class="dot-label bg-warning me-1"></span>pending</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">morganleah@.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/11.jpg">
                    </div>
                  </td>
                  <td>Amelia McDonald</td>
                  <td>08/07/2020</td>
                  <td class="text-center">
                    <span class="label text-success d-flex"
                      ><span class="dot-label bg-success me-1"></span>active</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">amelia23@kunis.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="avatar-md">
                        <img alt="avatar" class="rounded-circle me-2" src="/images/faces/6.jpg">
                    </div>
                  </td>
                  <td>Paul Molive</td>
                  <td>12/07/2020</td>
                  <td class="text-center">
                    <span class="label text-success d-flex"
                      ><span class="dot-label bg-success me-1"></span>active</span
                    >
                  </td>
                  <td>
                    <a href="javascript:;">paul45@kunis.com</a>
                  </td>
                  <td class="btn-list">
                    <a href="javascript:;" class="btn btn-sm btn-primary btn-icon">
                      <i class="fe fe-search fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-info btn-icon">
                      <i class="fe fe-edit-2 fs-13"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-danger btn-icon">
                      <i class="fe fe-trash fs-13"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul class="pagination mt-4 mb-0 float-end">
            <li class="page-item page-prev disabled">
              <a class="page-link" href="javascript:;" tabindex="-1">Prev</a>
            </li>
            <li class="page-item active"><a class="page-link" href="javascript:;">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
            <li class="page-item page-next">
              <a class="page-link" href="javascript:;">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- COL END -->
  </div>
  <!-- row closed  -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";

export default {
  components: { Pageheader },
};
</script>

<style scoped></style>
