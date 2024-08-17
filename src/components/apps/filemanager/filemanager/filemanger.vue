<template>
  <Pageheader heading="File-Manager" :maintitle='["Apps", "File Manager", "File-Manager"]' />
  <div class="row row-sm">
    <div class="col-lg-4 col-xxl-3">
      <div class="card custom-card">
        <div class="card-body text-center">
          <div class="d-grid">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
              Add New File
            </button>
          </div>
        </div>
        <div class="card-body tab-list-items py-3">
          <div class="main-content-left main-content-left-mail">
            <div class="main-mail-menu">
              <nav class="nav main-nav-column mg-b-20">
                <a class="nav-link active" href="javascript:;">
                  <i class="fe fe-video"></i> Video <span>30 MB</span>
                </a>
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-image"></i> Images <span>21 MB</span>
                </a>
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-music"></i> Music <span>14 MB</span>
                </a>
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-download"></i>Download <span>8 MB</span>
                </a>
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-file-text"></i> Docs <span>16 MB</span>
                </a>

                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-grid"></i> More <span>19 MB</span>
                </a>
              </nav>
            </div>
            <!-- main-mail-menu -->
          </div>
        </div>
        <div class="card-body py-3">
          <div class="">
            <div class="main-mail-menu">
              <label class="main-content-label main-content-label-sm">Label</label>
              <nav class="nav main-nav-column">
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-folder fe fe-folder fs-10 bg-primary p-2 br-5"></i>
                  Social
                </a>
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-folder fe fe-folder fs-10 bg-info p-2 br-5 text-fixed-white"></i>
                  Promotions
                </a>
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-folder fe fe-folder fs-10 bg-success p-2 br-5"></i>
                  Updates
                </a>
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-folder fe fe-folder fs-10 bg-danger p-2 br-5"></i>
                  Settings
                </a>
                <a class="nav-link" href="javascript:;">
                  <i class="fe fe-folder fe fe-folder fs-10 bg-secondary p-2 br-5"></i>
                  Google Drive
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-xxl-9">
      <div class="text-dark mb-2 ms-1 fs-20 fw-semibold">All Folders</div>
      <!-- Row -->
      <div class="text-muted mb-2 fs-16">Recent Files</div>
      <div class="row">
        <div class="col-xxl-3 col-lg-6 col-md-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex">
                <div class="media align-items-center pos-relative">
                  <span class="fs-16 lh--7 my-auto"><i
                      class="bg-primary-transparent p-2 rounded-50 fe fe-image fs-18 me-2"></i></span>
                  <div class="media-body ms-3">
                    Image
                    <p class="fs-11 mg-b-0 fs-gray-500">Last Opened 32 mins ago</p>
                  </div>
                </div>
                <div class="float-end ms-auto pos-absolute r-5 t-15">
                  <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-start">
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i>open</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-lg-6 col-md-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex">
                <div class="media align-items-center pos-relative">
                  <span class="fs-16 lh--7 my-auto"><i
                      class="bg-primary-transparent p-2 rounded-50 fe fe fe-smartphone fs-18 me-2"></i></span>
                  <div class="media-body ms-3">
                    APK
                    <p class="fs-11 mg-b-0 fs-gray-500">Last Opened 1 hrs ago</p>
                  </div>
                </div>
                <div class="float-end ms-auto pos-absolute r-5 t-15">
                  <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-start">
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i>open</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-lg-6 col-md-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex">
                <div class="media align-items-center pos-relative">
                  <span class="fs-16 lh--7 my-auto"><i
                      class="bg-primary-transparent p-2 rounded-50 fe fe-video fs-18 me-2"></i></span>
                  <div class="media-body ms-3">
                    Video
                    <p class="fs-11 mg-b-0 fs-gray-500">Last Opened 28 min ago</p>
                  </div>
                </div>
                <div class="float-end ms-auto pos-absolute r-5 t-15">
                  <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-start">
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i>open</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-lg-6 col-md-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex">
                <div class="media align-items-center pos-relative">
                  <span class="fs-16 lh--7 my-auto"><i
                      class="bg-primary-transparent p-2 rounded-50 fe fe-file-text fs-18 me-2"></i></span>
                  <div class="media-body ms-3">
                    Documents
                    <p class="fs-11 mg-b-0 fs-gray-500">Last Opened 1 hrs ago</p>
                  </div>
                </div>
                <div class="float-end ms-auto pos-absolute r-5 t-15">
                  <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-start">
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i>open</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-lg-6 col-md-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex">
                <div class="media align-items-center pos-relative">
                  <span class="fs-16 lh--7 my-auto"><i
                      class="bg-primary-transparent p-2 rounded-50 fe fe-music fs-18 me-2"></i></span>
                  <div class="media-body ms-3">
                    Music
                    <p class="fs-11 mg-b-0 fs-gray-500">Last Opened 2 hrs ago</p>
                  </div>
                </div>
                <div class="float-end ms-auto pos-absolute r-5 t-15">
                  <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-start">
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i>open</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-lg-6 col-md-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex">
                <div class="media align-items-center pos-relative">
                  <span class="fs-16 lh--7 my-auto"><i
                      class="bg-primary-transparent p-2 rounded-50 fe fe-file-text fs-18 me-2"></i></span>
                  <div class="media-body ms-3">
                    PDF
                    <p class="fs-11 mg-b-0 fs-gray-500">Last Opened 1 hrs ago</p>
                  </div>
                </div>
                <div class="float-end ms-auto pos-absolute r-5 t-15">
                  <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-start">
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i>open</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-lg-6 col-md-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex">
                <div class="media align-items-center pos-relative">
                  <span class="fs-16 lh--7 my-auto"><i
                      class="bg-primary-transparent p-2 rounded-50 fe fe-image fs-18 me-2"></i></span>
                  <div class="media-body ms-3">
                    Image
                    <p class="fs-11 mg-b-0 fs-gray-500">Last Opened 32 mins ago</p>
                  </div>
                </div>
                <div class="float-end ms-auto pos-absolute r-5 t-15">
                  <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-start">
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i>open</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-lg-6 col-md-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex">
                <div class="media align-items-center pos-relative">
                  <span class="fs-16 lh--7 my-auto"><i
                      class="bg-primary-transparent p-2 rounded-50 fe fe fe-smartphone fs-18 me-2"></i></span>
                  <div class="media-body ms-3">
                    APK
                    <p class="fs-11 mg-b-0 fs-gray-500">Last Opened 1 hrs ago</p>
                  </div>
                </div>
                <div class="float-end ms-auto pos-absolute r-5 t-15">
                  <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-start">
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i>open</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                    <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-muted mb-2 fs-16">Folders and Files</div>
      <div class="row">
        <div class="col-xxl-3 col-md-4 col-sm-6">
          <div class="card custom-card border p-0 shadow-none">
            <div class="d-flex align-items-center px-4 pt-2">
              <label class="custom-control custom-checkbox mb-0">
                <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                <span class="custom-control-label"></span>
              </label>
              <div class="float-end ms-auto">
                <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-start">
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 text-center">
              <router-link :to="`${url}apps/filemanager/filemanagerlist`" class="open-file">
                <div class="file-manger-icon">
                  <img src="/images/files/png/4.png" alt="img" class="br-7" />
                </div>
                <h6 class="mb-1 fw-semibold mt-0 text-dark">videos</h6>
                <span class="text-muted">4.23gb</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-md-4 col-sm-6">
          <div class="card custom-card border p-0 shadow-none">
            <div class="d-flex align-items-center px-4 pt-2">
              <label class="custom-control custom-checkbox mb-0">
                <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                <span class="custom-control-label"></span>
              </label>
              <div class="float-end ms-auto">
                <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-start">
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 text-center">
              <a href="javascript:;" class="open-file">
                <div class="file-manger-icon">
                  <img src="/images/files/png/6.png" alt="img" class="br-7" />
                </div>
                <h6 class="mb-1 fw-semibold mt-0 text-dark">document.pdf</h6>
                <span class="text-muted">23kb</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-md-4 col-sm-6">
          <div class="card custom-card border p-0 shadow-none">
            <div class="d-flex align-items-center px-4 pt-2">
              <label class="custom-control custom-checkbox mb-0">
                <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                <span class="custom-control-label"></span>
              </label>
              <div class="float-end ms-auto">
                <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-start">
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 text-center">
              <a href="javascript:;" class="open-file">
                <div class="file-manger-icon">
                  <img src="/images/files/png/5.png" alt="img" class="rounded-10" />
                </div>
                <h6 class="mb-1 fw-semibold mt-1 text-dark">Images</h6>
                <span class="text-muted">23kb</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-md-4 col-sm-6">
          <div class="card custom-card border p-0 shadow-none">
            <div class="d-flex align-items-center px-4 pt-2">
              <label class="custom-control custom-checkbox mb-0">
                <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                <span class="custom-control-label"></span>
              </label>
              <div class="float-end ms-auto">
                <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-start">
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 text-center">
              <router-link :to="`${url}apps/filemanager/filemanagerlist`" class="open-file">
                <div class="file-manger-icon">
                  <img src="/images/files/png/4.png" alt="img" class="br-7" />
                </div>
                <h6 class="mb-1 fw-semibold mt-0 text-dark">Images</h6>
                <span class="text-muted">1.23gb</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-md-4 col-sm-6">
          <div class="card custom-card border p-0 shadow-none">
            <div class="d-flex align-items-center px-4 pt-2">
              <label class="custom-control custom-checkbox mb-0">
                <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                <span class="custom-control-label"></span>
              </label>
              <div class="float-end ms-auto">
                <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-start">
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 text-center">
              <a href="javascript:;" class="open-file">
                <div class="file-manger-icon">
                  <img src="/images/files/png/5.png" alt="img" class="rounded-10" />
                </div>
                <h6 class="mb-1 fw-semibold mt-1 text-dark">Images</h6>
                <span class="text-muted">23kb</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-md-4 col-sm-6">
          <div class="card custom-card border p-0 shadow-none">
            <div class="d-flex align-items-center px-4 pt-2">
              <label class="custom-control custom-checkbox mb-0">
                <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                <span class="custom-control-label"></span>
              </label>
              <div class="float-end ms-auto">
                <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-start">
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 text-center">
              <a href="javascript:;" class="open-file">
                <div class="file-manger-icon">
                  <img src="/images/files/png/2.png" alt="img" class="br-7" />
                </div>
                <h6 class="mb-1 fw-semibold mt-0 text-dark">document.pdf</h6>
                <span class="text-muted">23kb</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-md-4 col-sm-6">
          <div class="card custom-card border p-0 shadow-none">
            <div class="d-flex align-items-center px-4 pt-2">
              <label class="custom-control custom-checkbox mb-0">
                <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                <span class="custom-control-label"></span>
              </label>
              <div class="float-end ms-auto">
                <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-start">
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 text-center">
              <router-link :to="`${url}apps/filemanager/filemanagerlist`" class="open-file">
                <div class="file-manger-icon">
                  <img src="/images/files/png/4.png" alt="img" class="br-7" />
                </div>
                <h6 class="mb-1 fw-semibold mt-0 text-dark">Downloads</h6>
                <span class="text-muted">453kb</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-md-4 col-sm-6">
          <div class="card custom-card border p-0 shadow-none">
            <div class="d-flex align-items-center px-4 pt-2">
              <label class="custom-control custom-checkbox mb-0">
                <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                <span class="custom-control-label"></span>
              </label>
              <div class="float-end ms-auto">
                <a href="javascript:;" class="option-dots" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fe fe-more-vertical"></i></a>
                <div class="dropdown-menu dropdown-menu-start">
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-edit me-2"></i> Edit</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-share me-2"></i> Share</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-download me-2"></i> Download</a>
                  <a class="dropdown-item" href="javascript:;"><i class="fe fe-trash me-2"></i> Delete</a>
                </div>
              </div>
            </div>
            <div class="card-body pt-0 text-center">
              <a href="javascript:;" class="open-file">
                <div class="file-manger-icon">
                  <img src="/images/files/png/6.png" alt="img" class="br-7" />
                </div>
                <h6 class="mb-1 fw-semibold mt-0 text-dark">Word document</h6>
                <span class="text-muted">23kb</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul class="pagination justify-content-end">
          <li class="page-item disabled"><a class="page-link" href="javascript:;">Prev</a></li>
          <li class="page-item active"><a class="page-link" href="javascript:;">1</a></li>
          <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
          <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
          <li class="page-item"><a class="page-link" href="javascript:;">4</a></li>
          <li class="page-item"><a class="page-link" href="javascript:;">5</a></li>
          <li class="page-item"><a class="page-link" href="javascript:;">Next</a></li>
        </ul>
      </nav>
      <!-- End Row -->
    </div>


    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content modal-content-demo ">
          <div class="modal-header">
            <h6 class="modal-title">Add file</h6><button aria-label="Close" class="btn-close" data-bs-dismiss="modal"
              type="button"></button>
          </div>
          <div class="row row-sm">
            <div class="col-lg-12 col-md-12">
              <div class="">
                <div class="card-body">
                  <div>
                    <h6 class=" mb-2">File Upload</h6>
                  </div>
                  <div>
                    <DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn ripple btn-primary" type="button">Add</button>
            <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
export default {
  components: { Pageheader, }, 
  data() {
        return {
            url: import.meta.env.BASE_URL,
        }
    }
};
</script>

<style scoped></style>
