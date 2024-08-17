<template>
  <!-- row -->
  <Pageheader heading="Mail-Inbox" :maintitle='["Apps", "Mail", "Mail-Inbox"]' />
  <div class="row row-sm">
    <div class="col-xl-3 col-lg-4">
      <div class="card custom-card mail-container task-container overflow-hidden">
        <div class="">
          <div class="p-4 border-bottom d-grid">
            <router-link class="btn btn-primary btn-block btn-compose" :to="`${url}apps/mail/mailcompose`">Compose
            </router-link>
          </div>
          <div class="card-body tab-list-items">
            <div class="main-content-left main-content-left-mail">
              <div class="main-mail-menu">
                <nav class="nav main-nav-column mg-b-20">
                  <a class="nav-link active" href="javascript:;">
                    <i class="fe fe-mail"></i> Inbox <span>20</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-star"></i> Starred <span>3</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-bookmark"></i> Important <span>10</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-send"></i> Sent Mail <span>8</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-edit"></i> Drafts <span>15</span></a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-disc"></i> Spam <span>128</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-trash"></i> Trash <span>6</span>
                  </a>
                </nav>
                <label class="main-content-label main-content-label-sm">Label</label>
                <nav class="nav main-nav-column mg-b-20">
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-folder"></i> Social <span>10</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-folder"></i> Work <span>22</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-folder"></i> Personal <span>22</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-folder"></i> Promotions <span>22</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-folder-plus"></i> Updates <span>17</span>
                  </a>
                </nav>
                <label class="main-content-label main-content-label-sm">Tags</label>
                <nav class="nav main-nav-column">
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-twitter"></i> Twitter <span>2</span></a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-github"></i> Github <span>32</span>
                  </a>
                  <a class="nav-link" href="javascript:;">
                    <i class="fe fe-gitlab"></i> Gitlab <span>23</span>
                  </a>
                </nav>
              </div>
              <!-- main-mail-menu -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-9 col-lg-8 main-content-body-mail1">
      <div class="card custom-card mail-container task-container overflow-hidden">
        <div class="inbox-body p-4">
          <div class="mail-option d-sm-flex justify-content-between align-items-start">
            <div>
              <div class="chk-all border-0">
                <div class="btn-group">
                  <a data-bs-toggle="dropdown" href="javascript:void(0);" class="btn mini all" aria-expanded="false">
                    All
                    <i class="fe fe-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="javascript:void(0);"> None</a></li>
                    <li><a href="javascript:void(0);"> Read</a></li>
                    <li><a href="javascript:void(0);"> Unread</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group mx-1">
                <a href="javascript:void(0);" class="btn mini tooltips">
                  <i class="fe fe-refresh-cw"></i>
                </a>
              </div>
              <div class="btn-group hidden-phone">
                <a data-bs-toggle="dropdown" href="javascript:void(0);" class="btn mini blue" aria-expanded="false">
                  More
                  <i class="fe fe-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="javascript:void(0);"><i class="fe fe-edit me-2"></i> Mark as Read</a></li>
                  <li><a href="javascript:void(0);"><i class="fe fe fe-slash me-2"></i> Spam</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:void(0);"><i class="fe fe-trash me-2"></i> Delete</a></li>
                </ul>
              </div>
            </div>
            <ul class="unstyled inbox-pagination ps-0 mt-2 mt-sm-0">
              <li><span>1-50 of 234</span></li>

              <li>
                <a class="btn np-btn" href="javascript:void(0);"><i class="fe fe-chevron-right pagination-right"></i></a>
              </li>
            </ul>
          </div>
          <div class="table-responsive">
            <table class="table table-inbox text-md-nowrap table-hover text-nowrap">
              <tbody>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star text-warning"></i>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">
                    Tim Reid, S P N
                  </td>
                  <td class="view-message">Boost Your Website Traffic</td>
                  <td class="view-message text-end fw-semibold">April 01</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star inbox-started"></i>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">
                    Freelancer.com
                  </td>
                  <td class="view-message">Stop wasting your visitors</td>
                  <td class="view-message text-end fw-semibold">May 23</td>
                </tr>
                <tr class="unread">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-bookmark text-danger"></i>
                  </td>
                  <td class="view-message dont-show">PHPClass</td>
                  <td class="view-message">Added a new class: Login Class Fast Site</td>
                  <td class="view-message text-end">9:27 AM</td>
                </tr>

                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">Facebook</td>
                  <td class="view-message view-message">
                    Somebody requested a new password
                  </td>
                  <td class="view-message text-end fw-semibold">June 13</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star text-warning"></i>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">Skype</td>
                  <td class="view-message view-message">Password successfully changed</td>
                  <td class="view-message text-end fw-semibold">March 24</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star inbox-started"></i>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">Google+</td>
                  <td class="view-message">alireza, do you know</td>
                  <td class="view-message text-end fw-semibold">March 09</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star inbox-started"></i>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">WOW Slider</td>
                  <td class="view-message">New WOW Slider v7.8 - 67% off</td>
                  <td class="view-message text-end fw-semibold">March 14</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star inbox-started text-warning"></i>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">
                    LinkedIn Pulse
                  </td>
                  <td class="view-message">The One Sign Your Co-Worker Will Stab</td>
                  <td class="view-message text-end fw-semibold">Feb 19</td>
                </tr>
                <tr class="unread">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">
                    Google Webmaster
                  </td>
                  <td class="view-message">Improve the search presence of WebSite</td>
                  <td class="view-message text-end fw-semibold">March 15</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">JW Player</td>
                  <td class="view-message">Last Chance: Upgrade to Pro for</td>
                  <td class="view-message text-end fw-semibold">March 15</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">
                    Drupal Community
                  </td>
                  <td class="view-message view-message">
                    Welcome to the Drupal Community
                  </td>
                  <td class="view-message text-end fw-semibold">March 04</td>
                </tr>

                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star inbox-started text-warning"></i>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="dont-show fw-semibold">Zoosk</td>
                  <td class="view-message">7 new singles we think you'll like</td>
                  <td class="view-message text-end fw-semibold">May 14</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-bookmark text-danger"></i>
                  </td>
                  <td class="view-message dont-show fw-semibold">LinkedIn</td>
                  <td class="view-message">Alireza: Nokia Networks, System Group and</td>
                  <td class="view-message text-end fw-semibold">February 25</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="dont-show fw-semibold">Facebook</td>
                  <td class="view-message view-message">
                    Your account was recently logged into
                  </td>
                  <td class="view-message text-end fw-semibold">March 14</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">Twitter</td>
                  <td class="view-message">Your Twitter password has been changed</td>
                  <td class="view-message text-end fw-semibold">April 07</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">
                    InternetSeer
                  </td>
                  <td class="view-message">Performance Report</td>
                  <td class="view-message text-end fw-semibold">July 14</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-bookmark text-danger"></i>
                  </td>
                  <td class="view-message dont-show fw-semibold">Bertina</td>
                  <td class="view-message">IMPORTANT: Don't lose your domains!</td>
                  <td class="view-message text-end fw-semibold">June 16</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star inbox-started"></i>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-bookmark text-danger"></i>
                  </td>
                  <td class="view-message dont-show fw-semibold">
                    Laura Gaffin, S P N
                  </td>
                  <td class="view-message">
                    Your Website On Google (Higher Rankings Are Better)
                  </td>
                  <td class="view-message text-end fw-semibold">August 10</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">Facebook</td>
                  <td class="view-message view-message">Alireza Zare Login faild</td>
                  <td class="view-message text-end fw-semibold">feb 14</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells">
                    <i class="fa fa-star inbox-started"></i>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">AddMe.com</td>
                  <td class="view-message">
                    Submit Your Website to the AddMe Business Directory
                  </td>
                  <td class="view-message text-end fw-semibold">August 10</td>
                </tr>
                <tr class="">
                  <td class="inbox-small-cells">
                    <label class="custom-control custom-checkbox mb-0">
                      <input type="checkbox" class="form-check-input" name="example-checkbox2" value="option2" />
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                  <td class="inbox-small-cells"><i class="fa fa-bookmark"></i></td>
                  <td class="view-message dont-show fw-semibold">
                    Terri Rexer, S P N
                  </td>
                  <td class="view-message view-message">
                    Forget Google AdWords: Un-Limited Clicks fo
                  </td>
                  <td class="view-message text-end fw-semibold">April 14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- mail-content -->
      </div>
    </div>
  </div>
  <!-- /row -->
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
