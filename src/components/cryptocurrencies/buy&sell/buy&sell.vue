<template>
  <Pageheader heading="Buy & Sell" :maintitle='["Crytpo-Currencies", "Buy & Sell"]' />
  <!-- Row-->
  <div class="row row-sm">
    <div class="col-md-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header d-flex justify-content-between pb-3 border-bottom">
          <div class="align-items-center">
            <h4 class="d-flex mb-0">
              Bitcoin<span class="text-muted fs-13 ms-2 my-auto">BTC</span>
            </h4>
          </div>
          <button class="btn btn-primary ms-auto">Buy Bitcoin</button>
        </div>
        <div class="card-body">
          <div class="d-sm-flex mb-0">
            <div class="">
              <p class="fs-13 text-muted mb-2">Bitcoin [BTC] Price Chart</p>
              <h3>
                $3468.42<span class="text-success fs-15 ms-2"><i class="fas fas fa-dollar-sign"></i> 23.5</span>
              </h3>
            </div>
            <div class="ms-auto">
              <ul class="nav nav-tabs crypto-btc-usd border-0" id="charts" role="tablist">
                <li class="nav-item border-0">
                  <a class="nav-link border-0 active" data-bs-toggle="tab" href="#chart-tab" role="tab"
                    aria-controls="chart-tab" aria-selected="true">1m</a>
                </li>
                <li class="nav-item border-0">
                  <a class="nav-link border-0" data-bs-toggle="tab" href="#chart2-tab" role="tab"
                    aria-controls="chart2-tab" aria-selected="false">1h</a>
                </li>
                <li class="nav-item border-0">
                  <a class="nav-link border-0" data-bs-toggle="tab" href="#chart3-tab" role="tab"
                    aria-controls="chart3-tab" aria-selected="false">1d</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-9 col-xxl-10 col-md-8 p-0">
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show p-0 active" id="chart-tab" role="tabpanel" aria-labelledby="chart-tab">
                  <div class="chart-wrapper">
                    <div id="chart-bitcoin" class="ht-400">
                      <apexchart height="370" ref="chart" width="100%" type="area" :options="oneMonthchartOptions"
                        :series="oneMonthseries">
                      </apexchart>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade p-0" id="chart2-tab" role="tabpanel" aria-labelledby="chart2-tab">
                  <div class="chart-wrapper">
                    <div id="chart-bitcoin1" class="ht-400">
                      <apexchart height="370" ref="chart1" width="100%" type="area" :options="oneHrchartOptions"
                        :series="oneHrseries">
                      </apexchart>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade p-0" id="chart3-tab" role="tabpanel" aria-labelledby="chart3-tab">
                  <div class="chart-wrapper">
                    <div id="chart-bitcoin2" class="ht-400">
                      <apexchart height="370" ref="chart2" width="100%" type="area" :options="oneDaychartOptions"
                        :series="oneDayseries">
                      </apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-xxl-2 col-md-4">
              <div class="card bg-light custom-card">
                <div class="card-body">
                  <span class="text-muted fs-13"><b>BNB</b> / BUSD</span>
                  <h5 class="my-1">29.83267</h5>
                  <span class="text-danger">-0.04%</span>
                </div>
              </div>
              <div class="card bg-light custom-card">
                <div class="card-body">
                  <span class="text-muted fs-13"><b>ETH</b> / BUSD</span>
                  <h5 class="my-1">34.25356</h5>
                  <span class="text-success">+0.03%</span>
                </div>
              </div>
              <div class="card bg-light custom-card mb-0">
                <div class="card-body">
                  <span class="text-muted fs-13"><b>EOS</b> / BUSD</span>
                  <h5 class="my-1">22.32315</h5>
                  <span class="text-danger">-0.02%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-xxl-6 col-md-12">
      <div class="card custom-card overflow-hidden crypto-buysell-card">
        <div class="card-body">
          <div class="card-header border-bottom-0 ps-0 pt-0">
            <label class="main-content-label my-auto">Buy Currency</label>
          </div>
          <div class="d-flex mt-3 mb-3">
            <div class="">
              <p class="fs-16 text-muted mb-2">1 USDT is roughly</p>
              <h3>5.47<span class="text-success fs-15 ms-2">CNY</span></h3>
            </div>
            <div class="ms-auto my-auto">
              <span class="">Claim <span class="fw-bold text-success">20</span> Free
                Bitcoin</span>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group input-group-element">
              <input type="text" class="form-control" value="Spend 32 - 6500" />
              <Selectoptions :options="currencyOptions" :canClear="false"
                class="w-45r" id="currency" name="currency"
                :value="buycurrencyValue" />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group input-group-element">
              <input type="text" class="form-control" value="Buy" />
              <Selectoptions :options="buyOptions"  :canClear="false"
                class="w-45r" id="currency" name="currency"
                :value="buyValue" />
            </div>
          </div>
          <div class="form-group fs-14">
            <input class="form-control input-lg" type="text" placeholder="498fd7c42932070ff3ec30" />
          </div>
          <label class="main-content-label mt-4 mb-4">Select payment method</label>
          <form class="payment-form form">
            <div class="payment-type d-sm-flex d-block">
              <input type="radio" name="radio3" id="credit" value="credit" checked /><label
                class="credit-label payment-cards four ms-sm-0 col mb-2 mb-sm-0" for="credit"><span
                  class="d-none d-md-block">New card</span><img src="/images/payments/png/4.png" alt="visa" /></label>
              <input type="radio" name="radio3" id="debit" value="debit" /><label
                class="debit-label payment-cards four col mb-2 mb-sm-0" for="debit"><span class="d-none d-md-block">Debit
                  Card</span><img src="/images/payments/png/2.png" alt="Debitcard" /></label>
              <input type="radio" name="radio3" id="paypal" value="paypal" /><label
                class="paypal-label payment-cards four col mb-2 mb-sm-0" for="paypal"><span
                  class="d-none d-md-block">Paypal</span><img src="/images/payments/png/3.png" alt="paypal" /></label>
              <input type="radio" name="radio3" id="amex" value="amex" /><label
                class="amex-label payment-cards four col mb-2 mb-sm-0" for="amex"><span
                  class="d-none d-md-block">Amex</span><img src="/images/payments/png/1.png" alt="amexg1096" /></label>
            </div>
            <a href="javascript:;" class="btn btn-primary btn-lg d-grid mt-4">Buy Now</a>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-xxl-6 col-md-12">
      <div class="card custom-card crypto-buysell-card">
        <div class="card-body">
          <div class="card-header border-bottom-0 ps-0 pt-0">
            <label class="main-content-label my-auto">Sell Currency</label>
          </div>
          <div class="form-group">
            <label class="fw-semibold fs-16 mt-3 mb-2">Sell From</label>
            <div class="p-3 border d-flex">
              <div class="d-flex">
                <span class="crypto-icon bg-primary-transparent me-3"><i class="cf cf-btc text-primary"></i></span><span
                  class="my-auto fs-18 fw-semibold">Bitcoin BTC</span>
              </div>
              <div class="d-flex ms-auto">
                <div class="card-item-stat d-none d-md-block">
                  <h4 class="fw-semibold mb-0 fs-15">0.374648545 BTC</h4>
                  <small class="fs-13 float-end text-end text-muted">$5,634.65</small>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="fw-semibold fs-16 mt-2 mb-2">Deposit to</label>
            <div class="p-3 border d-flex">
              <span class="crypto-icon bg-primary-transparent"><i class="fa fa-bank text-primary"></i></span>
              <div class="my-auto ms-3">
                <div class="d-flex my-auto fs-16 fw-semibold">Banking</div>
                <small class="fs-13 text-muted">Checking</small>
              </div>
            </div>
          </div>
          <label class="fw-semibold fs-16 mt-2 mb-2">Amount</label>
          <hr class="my-2" />
          <div class="d-flex mt-3 mb-3">
            <p class="fs-16 mb-0 text-muted">Weekly bank limit</p>
            <div class="ms-auto my-auto">
              <span class="fs-16 text-muted">$10,000.00 remaining</span>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-xl-5 col-lg-12 col-md-12 mb-0">
              <div class="input-group input-group-element">
                <input type="text" class="form-control wd-50p" value="0.041323" />
                <Selectoptions :options="currencyOptions" :canClear="false"
                  class="w-45r" id="currency" name="currency"
                  :value="buycurrencyValue" />
              </div>
            </div>
            <div class="form-group col-xl-2 text-center col-lg-12 col-md-12 my-auto">
              <i class="pe-7s-repeat my-3 mt-xl-0 mb-xl-0 fs-26"></i>
            </div>
            <div class="form-group col-xl-5 col-lg-12 col-md-12 mb-0">
              <div class="input-group input-group-element">
                <input type="text" class="form-control wd-50p" value="500" />
                <Selectoptions :options="buyOptions"  :canClear="false"
                  class="w-45r" id="currency" name="currency"
                  :value="buyValue" />
              </div>
            </div>
          </div>
        <a href="javascript:;" class="btn btn-primary btn-lg d-grid mt-4">Sell Bitcoin</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Row End -->
  <!-- Row-->
  <div class="row row-sm">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header border-bottom-0">
          <label class="main-content-label my-auto pt-2">Recent Buying & selling Orders</label>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table card-table text-nowrap table-bordered border-top">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Remaining</th>
                  <th>Price</th>
                  <th>USD</th>
                  <th>Fee (%)</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody v-for="BuyingsellingOrdersitems in BuyingsellingOrders" :key="BuyingsellingOrdersitems">
                <tr>
                  <td>{{ BuyingsellingOrdersitems.ID }}</td>
                  <td>
                    <span :class="'text-' + BuyingsellingOrdersitems.typeinfo">
                      {{ BuyingsellingOrdersitems.Type }}
                    </span>
                  </td>
                  <td>{{ BuyingsellingOrdersitems.Amount }}</td>
                  <td>{{ BuyingsellingOrdersitems.Remaining }}</td>
                  <td>{{ BuyingsellingOrdersitems.Price }}</td>
                  <td>{{ BuyingsellingOrdersitems.Usd }}</td>
                  <td>{{ BuyingsellingOrdersitems.Fee }}</td>
                  <td>
                    <span :class="'badge bg-' + BuyingsellingOrdersitems.Status + '-transparent bg-pill'
                      ">
                      {{ BuyingsellingOrdersitems.statustext }}
                    </span>
                  </td>

                  <td>{{ BuyingsellingOrdersitems.Date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Row End -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import apexchart from "@/shared/UI/apexcharts.vue";
import Selectoptions from "@/shared/UI/selectoptions.vue";
import {
  oneMonthchartOptions,
  oneMonthseries,
  oneHrchartOptions,
  oneHrseries,
  oneDaychartOptions,
  oneDayseries,
  buyOptions,
  buyValue,
  sellValue,
  currencyOptions,
  buycurrencyValue,
  sellcurrencyValue,
  BuyingsellingOrders
} from './buy-sell';
export default {
  components: {
    Pageheader,
    apexchart,
    Selectoptions,
  },
  data() {
    return {
      oneMonthchartOptions,
      oneMonthseries,
      oneHrchartOptions,
      oneHrseries,
      oneDaychartOptions,
      oneDayseries,
      buyOptions,
      buyValue,
      sellValue,
      currencyOptions,
      buycurrencyValue,
      sellcurrencyValue,
      BuyingsellingOrders
    };
  },
};
</script>

<style scoped></style>
