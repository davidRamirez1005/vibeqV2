<template>
  <!-- Row -->
  <Pageheader heading="Welcome To Dashboard" :maintitle='["Ecommerce", "Dashboard"]' />
  <div class="row row-sm">
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
      <div class="card custom-card">
        <div class="card-body">
          <div class="card-order">
            <label class="main-content-label mb-3 pt-1">New Users</label>
            <h2 class="text-end card-item-icon card-icon">
              <i class="mdi mdi-account-multiple icon-size float-start text-primary"></i><span
                class="fw-bold">3,672</span>
            </h2>
            <p class="mb-0 mt-4 text-muted">
              Monthly users<span class="float-end">50%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- COL END -->
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
      <div class="card custom-card">
        <div class="card-body">
          <div class="card-order">
            <label class="main-content-label mb-3 pt-1">Total tax</label>
            <h2 class="text-end">
              <i class="mdi mdi-cube icon-size float-start text-primary"></i><span class="fw-bold">$89,265</span>
            </h2>
            <p class="mb-0 mt-4 text-muted">
              Monthly Income<span class="float-end">$7,893</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- COL END -->
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
      <div class="card custom-card">
        <div class="card-body">
          <div class="card-order">
            <label class="main-content-label mb-3 pt-1">Total Profit</label>
            <h2 class="text-end">
              <i class="icon-size mdi mdi-poll-box float-start text-primary"></i><span class="fw-bold">$23,987</span>
            </h2>
            <p class="mb-0 mt-4 text-muted">
              Monthly Profit<span class="float-end">$4,678</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- COL END -->
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
      <div class="card custom-card">
        <div class="card-body">
          <div class="card-order">
            <label class="main-content-label mb-3 pt-1">Total Sales</label>
            <h2 class="text-end">
              <i class="mdi mdi-cart icon-size float-start text-primary"></i><span class="fw-bold">46,486</span>
            </h2>
            <p class="mb-0 mt-4 text-muted">
              Monthly Sales<span class="float-end">3,756</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- COL END -->
  </div>
  <!-- End Row -->

  <!-- row opened -->
  <div class="row row-sm">
    <div class="col-xxl-6 col-xl-12 col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-header border-bottom-0">
          <label class="main-content-label my-auto pt-2">Revenue Overview</label>
          <span class="d-block fs-12 mb-0 mt-1 text-muted">An Overview. Revenue is the total amount of income generated by
            the sale of
            goods or services related to the company's primary operations.</span>
        </div>
        <div class="card-body">
          <div class="chart-wrapper">
            <apexchart height="256px" width="100%" type="line" :options="revenuechartOptions"
              :series="revenuechartSeries">
            </apexchart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-md-12 col-lg-12">
      <div class="card custom-card">
        <div class="card-header border-bottom-0 pb-0">
          <label class="main-content-label mb-2 pt-1">Recent Orders</label>
          <p class="fs-12 text-muted mb-0">
            An order is an investor's instructions to a broker or brokerage firm to
            purchase or sell
          </p>
        </div>
        <div class="card-body sales-product-info ot-0 pt-0 pb-0">
          <apexchart height="285px" type="radialBar" :options="recentOrdersOptions"
            :series="recentOrdersSeries">
          </apexchart>
          <div class="row sales-product-infomation pb-0 mb-0 mx-auto wd-100p">
            <div class="col-md-6 col justify-content-center text-center">
              <p class="mb-0 d-flex justify-content-center">
                <span class="legend bg-primary brround"></span>Delivered
              </p>
              <h3 class="mb-1 fw-bold">5238</h3>
              <div class="d-flex justify-content-center">
                <p class="text-muted">Last 6 months</p>
              </div>
            </div>
            <div class="col-md-6 col text-center float-end">
              <p class="mb-0 d-flex justify-content-center">
                <span class="legend bg-light brround"></span>Cancelled
              </p>
              <h3 class="mb-1 fw-bold">3467</h3>
              <div class="d-flex justify-content-center">
                <p class="text-muted">Last 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-md-12 col-sm-12">
      <div class="card custom-card">
        <div class="card-header pb-0 border-bottom-0">
          <label class="main-content-label mb-2 pt-1">Tickets</label>
          <p class="fs-12 mb-0 text-muted">
            Sales activities are the tactics that salespeople use to achieve
          </p>
        </div>
        <div class="card-body">
          <ul class="visitor mb-0 d-block users-images list-unstyled list-unstyled-border p-0">
            <li class="media d-flex mb-3 mt-0 pt-0">
              <img class="me-3 rounded-circle avatar avatar-md" src="/images/faces/3.jpg" alt="avatar" />
              <div class="media-body mb-1">
                <div class="float-end"><small>10-9-2018</small></div>
                <h5 class="media-title fs-15 mb-0">Vanessa</h5>
                <span class="text-muted">sed do eiusmod </span>
              </div>
            </li>
            <li class="media d-flex mb-3">
              <img class="me-3 rounded-circle avatar avatar-md" src="/images/faces/5.jpg" alt="avatar" />
              <div class="media-body mb-1">
                <div class="float-end"><small>15-9-2018</small></div>
                <h5 class="media-title fs-15 mb-0">Rutherford</h5>
                <small class="text-muted">sed do eiusmod </small>
              </div>
            </li>
            <li class="media d-flex mb-3">
              <img class="me-3 rounded-circle avatar avatar-md" src="/images/faces/7.jpg" alt="avatar" />
              <div class="media-body mb-1">
                <div class="float-end"><small>17-9-2018</small></div>
                <h5 class="media-title fs-15 mb-0">Elizabeth</h5>
                <small class="text-muted">sed do eiusmod </small>
              </div>
            </li>
            <li class="media d-flex mb-3">
              <img class="me-3 rounded-circle avatar avatar-md" src="/images/faces/4.jpg" alt="avatar" />
              <div class="media-body mb-1">
                <div class="float-end"><small>19-9-2018</small></div>
                <h5 class="media-title fs-15 mb-0">Anthony</h5>
                <small class="text-muted">sed do eiusmod </small>
              </div>
            </li>
            <li class="media d-flex mb-0">
              <img class="me-3 rounded-circle avatar avatar-md" src="/images/faces/9.jpg" alt="avatar" />
              <div class="media-body mb-1">
                <div class="float-end"><small>19-9-2018</small></div>
                <h5 class="media-title fs-15 mb-0">Anthony</h5>
                <small class="text-muted">sed do eiusmod </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- row closed -->

  <!-- row opened -->
  <div class="row row-sm">
    <div class="col-xxl-3 col-xl-6 col-md-12 col-lg-6">
      <div class="card custom-card">
        <div class="card-header border-bottom-0 pb-1">
          <label class="main-content-label mb-2 pt-1">Sales Activity</label>
          <p class="fs-12 text-muted">
            Sales activities are the tactics that salespeople use to achieve their goals
            and objective
          </p>
        </div>
        <div class="product-timeline card-body pt-3 mt-1">
          <ul class="timeline-1 mb-0">
            <li class="mt-0">
              <i class="ti-pie-chart product-icon"></i>
              <span class="fw-semibold mb-4 fs-14">Total Products</span>
              <a href="javascript:;" class="float-end fs-11 text-muted">3 days ago</a>
              <p class="mb-0 text-muted fs-12">1.3k New Products</p>
            </li>
            <li class="mt-0">
              <i class="mdi mdi-cart-outline product-icon"></i>
              <span class="fw-semibold mb-4 fs-14">Total Sales</span>
              <a href="javascript:;" class="float-end fs-11 text-muted">35 mins ago</a>
              <p class="mb-0 text-muted fs-12">1k New Sales</p>
            </li>
            <li class="mt-0">
              <i class="ti-bar-chart-alt product-icon"></i>
              <span class="fw-semibold mb-4 fs-14">Total Revenue</span>
              <a href="javascript:;" class="float-end fs-11 text-muted">50 mins ago</a>
              <p class="mb-0 text-muted fs-12">23.5K New Revenue</p>
            </li>
            <li class="mt-0">
              <i class="ti-wallet product-icon"></i>
              <span class="fw-semibold mb-4 fs-14">Total Profit</span>
              <a href="javascript:;" class="float-end fs-11 text-muted">1 hour ago</a>
              <p class="mb-0 text-muted fs-12">3k New profit</p>
            </li>
            <li class="mt-0 mb-0">
              <i class="si si-eye product-icon"></i>
              <span class="fw-semibold mb-4 fs-14">Customer Visits</span>
              <a href="javascript:;" class="float-end fs-11 text-muted">1 day ago</a>
              <p class="mb-0 text-muted fs-12">15% increased</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-md-12 col-lg-6">
      <div class="card custom-card">
        <div class="card-header border-bottom-0 pb-1">
          <label class="main-content-label mb-2 pt-1">Top products</label>
          <p class="fs-12 mb-0 text-muted">
            Top Trending Products to Sell Online At Your Ecommerce & Dropshipping Store.
          </p>
        </div>
        <div class="card-body pt-0">
          <ul class="top-selling-products pb-0 pt-3 mb-0 px-0">
            <li class="product-item">
              <div class="product-img">
                <img src="/images/pngs/14.png" alt="" />
              </div>
              <div class="product-info">
                <div class="product-name">College Bag</div>
                <div class="price">Fashion</div>
              </div>
              <div class="product-amount">
                <div class="product-price">$990.00</div>
                <div class="items-sold">10 Sold</div>
              </div>
            </li>
            <li class="product-item">
              <div class="product-img">
                <img src="/images/pngs/18.png" alt="" />
              </div>
              <div class="product-info">
                <div class="product-name">Smartwatch</div>
                <div class="price">Electronics</div>
              </div>
              <div class="product-amount">
                <div class="product-price">$990.00</div>
                <div class="items-sold">10 Sold</div>
              </div>
            </li>
            <li class="product-item">
              <div class="product-img">
                <img src="/images/pngs/17.png" alt="" />
              </div>
              <div class="product-info">
                <div class="product-name">Chair</div>
                <div class="price">Furniture</div>
              </div>
              <div class="product-amount">
                <div class="product-price">$990.00</div>
                <div class="items-sold">10 Sold</div>
              </div>
            </li>
            <li class="product-item">
              <div class="product-img">
                <img src="/images/pngs/16.png" alt="" />
              </div>
              <div class="product-info">
                <div class="product-name">Flowers Pot</div>
                <div class="price">Gardening</div>
              </div>
              <div class="product-amount">
                <div class="product-price">$990.00</div>
                <div class="items-sold">10 Sold</div>
              </div>
            </li>
            <li class="product-item pb-0">
              <div class="product-img">
                <img src="/images/pngs/19.png" alt="" />
              </div>
              <div class="product-info">
                <div class="product-name">iPhone Mobile</div>
                <div class="price">Electronics</div>
              </div>
              <div class="product-amount">
                <div class="product-price">$990.00</div>
                <div class="items-sold">10 Sold</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-6 col-xl-12 col-md-12 col-lg-12">
      <div class="card custom-card">
        <div class="card-header border-bottom-0">
          <label class="main-content-label mb-2 pt-1">Country Wise Sales</label>
          <p class="fs-12 mb-0 text-muted">
            ​The global ecommerce sales in 2020 is expected to reach $4.453 trillion this
            marks an increase of <b>22.5 %</b> percent from the previous year as the
            global ecommerce market.
          </p>
        </div>
        <div class="card-body pt-0 pb-3 row">
          <div class="col-xl-8">
            <Maps />
          </div>
          <div class="col-xl-4 col-md-12 mt-xl-4">
            <div class="mb-4 pt-2">
              <h5 class="mb-2 d-block">
                <span class="fs-14">Brazil</span>
                <span class="float-end fs-14">80%</span>
              </h5>
              <div class="progress ht-4 progress-md h-2">
                <div class="progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-80p"></div>
              </div>
            </div>
            <div class="mb-4">
              <h5 class="mb-2 d-block">
                <span class="fs-14">Russia</span>
                <span class="float-end fs-14">72%</span>
              </h5>
              <div class="progress ht-4 progress-md">
                <div class="progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-70p"></div>
              </div>
            </div>
            <div class="mb-4">
              <h5 class="mb-2 d-block">
                <span class="fs-14">Poland</span>
                <span class="float-end fs-14">67%</span>
              </h5>
              <div class="progress progress-md ht-4">
                <div class="progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-60p"></div>
              </div>
            </div>
            <div class="mb-4">
              <h5 class="mb-2 d-block">
                <span class="fs-14">Canada</span>
                <span class="float-end fs-14">53%</span>
              </h5>
              <div class="progress progress-md ht-4">
                <div class="progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-50p"></div>
              </div>
            </div>
            <div class="mb-4">
              <h5 class="mb-2 d-block">
                <span class="fs-14">India</span>
                <span class="float-end fs-14">75%</span>
              </h5>
              <div class="progress progress-md ht-4">
                <div class="progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-40p"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-xl-8">
      <div class="card custom-card overflow-hidden">
        <div class="card-header border-bottom-0 d-flex pb-0 flex-nowrap">
          <div>
            <label class="main-content-label mb-2 pt-1">Products Details</label>
            <p class="fs-12 mb-3 text-muted mb-0">
              The details displayed often include size, color, price, shipping
              information, reviews, and other relevant information customers may want to
              know before making a purchase
            </p>
          </div>
          <div class="card-options float-end">
            <a href="javascript:;" class="me-0 text-default" data-bs-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="true"> <span class="fe fe-more-vertical fs-17 float-end"></span> </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item"><i class="fe fe-eye me-2"></i>View</a>
                <a class="dropdown-item"><i class="fe fe-plus-circle me-2"></i>Add</a>
                <a class="dropdown-item"><i class="fe fe-trash-2 me-2"></i>Remove</a>
                <a class="dropdown-item"><i class="fe fe-download-cloud me-2"></i>Download</a>
                <a class="dropdown-item"><i class="fe fe-settings me-2"></i>More</a>
              </div>
          </div>
        </div>
        <div class="card-body pt-0">
          <div class="table-responsive">
            <table class="table table-vcenter border mb-0 table-product">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product</th>
                  <th>Product Cost</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#C234</td>
                  <td>
                    <div class="d-flex my-auto w-max">
                      <img src="/images/pngs/14.png" alt="" class="ht-40 wd-40 me-3" /><span class="my-auto">Regular
                        waterproof
                        (24 L) Backpack</span>
                    </div>
                  </td>
                  <td><b>$14,500</b></td>
                  <td>2,977</td>
                  <td><span class="badge bg-primary">Available</span></td>
                </tr>
                <tr>
                  <td>#C389</td>
                  <td>
                    <div class="d-flex my-auto w-max">
                    <img src="/images/pngs/15.png" alt="" class="ht-40 wd-40 me-3" /><span class="my-auto">Women Pink
                      Heels
                      Sandal</span>
                      </div>
                  </td>
                  <td><b>$30,000</b></td>
                  <td>678</td>
                  <td><span class="badge bg-primary">Limited</span></td>
                </tr>
                <tr>
                  <td>#C936</td>
                  <td>
                    <div class="d-flex my-auto w-max">
                    <img src="/images/pngs/16.png" alt="" class="ht-40 wd-40 me-3" /><span class="my-auto">Designer
                      Decorative flower Pot</span>
                      </div>
                  </td>
                  <td><b>$13,200</b></td>
                  <td>4,922</td>
                  <td><span class="badge bg-primary">Avilable</span></td>
                </tr>
                <tr>
                  <td>#C493</td>
                  <td>
                    <div class="d-flex my-auto w-max">
                    <img src="/images/pngs/17.png" alt="" class="ht-40 wd-40 me-3" /><span class="my-auto">Plastic Outdoor
                      Chair</span>
                      </div>
                  </td>
                  <td><b>$15,100</b></td>
                  <td>1,234</td>
                  <td><span class="badge bg-primary">Limited</span></td>
                </tr>
                <tr>
                  <td>#C729</td>
                  <td>
                    <div class="d-flex my-auto w-max">
                    <img src="/images/pngs/18.png" alt="" class="ht-40 wd-40 me-3" /><span class="my-auto">Blck Digital
                      smart
                      watch</span>
                      </div>
                  </td>
                  <td><b>$5,987</b></td>
                  <td>4,789</td>
                  <td><span class="badge bg-primary op-5">No Stock</span></td>
                </tr>
                <tr>
                  <td>#C529</td>
                  <td>
                    <div class="d-flex my-auto w-max">
                    <img src="/images/pngs/19.png" alt="" class="ht-40 wd-40 me-3" /><span class="my-auto">Apple
                      iPhone(Black, 128 GB)</span>
                      </div>
                  </td>
                  <td><b>$11,987</b></td>
                  <td>938</td>
                  <td><span class="badge bg-primary">Limited</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-md-12 col-sm-12">
      <div class="card custom-card">
        <div class="card-header border-bottom-0">
          <div>
            <label class="main-content-label mb-2 pt-1">Order Activity</label>
            <p class="fs-12 mb-3 text-muted">
              Ordering Activity. means an activity that is authorized to place orders, or
              establish blanket purchase agreements.
            </p>
          </div>
        </div>
        <div class="card-body pt-1">
          <div class="border">
            <div class="list-group projects-list pt-0 pb-0 ps-0 pe-0">
              <a href="javascript:;"
                class="list-group-item list-group-item-action flex-column align-items-start border-0">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1 fw-semibold">Order Picking</h6>
                  <h6 class="mb-0 fw-bold fs-15">3,876</h6>
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <span class="text-muted"><i class="fe fe-arrow-down text-success"></i> 03% last month</span>
                  <span class="text-muted fs-11">5 days ago</span>
                </div>
              </a>
              <a href="javascript:;"
                class="list-group-item list-group-item-action flex-column align-items-start border-bottom-0 border-start-0 border-end-0 border-top">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1 fw-semibold">Storage</h6>
                  <h6 class="mb-0 fw-bold fs-15">2,178</h6>
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <span class="text-muted"><i class="fe fe-arrow-down text-danger"></i> 16% last month</span>
                  <span class="text-muted fs-11">2 days ago</span>
                </div>
              </a>
              <a href="javascript:;"
                class="list-group-item list-group-item-action flex-column align-items-start border-bottom-0 border-start-0 border-end-0 border-top">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1 fw-semibold">Shipping</h6>
                  <h6 class="mb-0 fw-bold fs-15">1,367</h6>
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <span class="text-muted"><i class="fe fe-arrow-up text-success"></i> 06% last month</span>
                  <span class="text-muted fs-11">1 days ago</span>
                </div>
              </a>
              <a href="javascript:;"
                class="list-group-item list-group-item-action flex-column align-items-start border-bottom-0 border-start-0 border-end-0 border-top">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1 fw-semibold">Receiving</h6>
                  <h6 class="mb-0 fw-bold fs-15">678</h6>
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <span class="text-muted"><i class="fe fe-arrow-down text-danger"></i> 25% last month</span>
                  <span class="text-muted fs-11">10 days ago</span>
                </div>
              </a>
              <a href="javascript:;"
                class="list-group-item list-group-item-action flex-column align-items-start border-0 rounded-0 border-top">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1 fw-semibold">Other</h6>
                  <h6 class="mb-0 fw-bold fs-15">5,678</h6>
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <span class="text-muted"><i class="fe fe-arrow-up text-success"></i> 16% last month</span>
                  <span class="text-muted fs-11">5 days ago</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import apexchart from "@/shared/UI/apexcharts.vue";
import Maps from "./maps.vue";
import { recentOrdersSeries, recentOrdersOptions, revenuechartSeries, revenuechartOptions } from './recentOrders';
export default {
  components: { Pageheader, Maps, apexchart },
  data() {
    return {
      revenuechartOptions, recentOrdersOptions, revenuechartSeries, recentOrdersSeries,
    }
  },
};
</script>

<style scoped>
.rtl .apexcharts-canvas text {
  text-anchor: middle;
}
</style>
