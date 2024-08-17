<template>
  <Pageheader heading="Welcome To Dashboard" :maintitle='["Crypto Currencies", "Dashboard"]'></Pageheader>
  <div class="col-lg-12 col-md-12">
    <Carousel>
    </Carousel>
  </div>

  <!--/ row closed -->

  <!-- row opened -->
  <div class="row row-sm">
    <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-4">
      <div class="card custom-card wallet-1 overflow-hidden">
        <div class="card-header border-bottom-0">
          <label class="main-content-label my-auto pt-2 mb-1">Assets Allocation</label>
          <span class="d-block fs-12 mb-0 mt-1 text-muted">Asset allocation involves dividing an investment portfolio
            among
            different asset categories</span>
        </div>
        <div class="card-body crypto-wallet p-2">
          <customchartjs id="chartDonut" height="210px" :type="allocationType" :options="allocationOptions"
            :series="allocationData"></customchartjs>
          <div class="chart-circle-value circle-style">
            <div class="fs-20 fw-bold">55%</div>
          </div>
        </div>

        <div class="table-responsive border-0 mb-2">
          <table class="table border-0 mg-b-0 text-nowrap text-md-nowrap">
            <tbody>
              <tr>
                <td class="d-flex">
                  <div class="cryp-icon bg-primary my-auto me-2">
                    <i class="cf cf-btc"></i>
                  </div>
                  <div class="media-body ms-3">
                    <p class="mb-1 text-muted fw-normal fs-15">
                      Bitcoin BTC
                    </p>
                    <span class="fs-15 fw-semibold my-auto">$10,245.00</span>
                  </div>
                </td>
                <td class="">0.0215637249</td>
                <td>
                  +12.85% <i class="fa fa-arrow-up text-success ms-1"> </i>
                </td>
              </tr>
              <tr>
                <td class="d-flex">
                  <div class="cryp-icon bg-primary my-auto me-2">
                    <i class="cf cf-btc"></i>
                  </div>
                  <div class="media-body ms-3">
                    <p class="mb-1 text-muted fw-normal fs-15">
                      Ethereum ETH
                    </p>
                    <span class="fs-15 fw-semibold my-auto">$10,245.00</span>
                  </div>
                </td>
                <td class="">0.0253737689</td>
                <td>
                  -02.25% <i class="fa fa-arrow-down text-danger ms-1"> </i>
                </td>
              </tr>
              <tr>
                <td class="d-flex">
                  <div class="cryp-icon bg-primary my-auto me-2">
                    <i class="cf cf-btc"></i>
                  </div>
                  <div class="media-body ms-3">
                    <p class="mb-1 text-muted fw-normal fs-15">
                      Dash DASH
                    </p>
                    <span class="fs-15 fw-semibold my-auto">$10,245.00</span>
                  </div>
                </td>
                <td>0.0253546426</td>
                <td>
                  -11.85% <i class="fa fa-arrow-down text-danger ms-1"> </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-xl-12 col-xxl-8 col-lg-12 col-md-12">
      <div class="card card-bitcoin custom-card">
        <div class="card-header border-bottom-0">
          <div>
              <label class="main-content-label my-auto pt-2 fs-15-f">BTC/USD</label>
              <span class="d-block fs-12 mb-0 mt-1 text-muted">Bitcoin is a digital cryptocurrency made up of processed data
                blocks used for online and brick-and-mortar purchases.</span>
          </div>
        </div>
        <div class="card-body ripple py-0 candlestick-cypto">
          <apexchart height="352px" width="100%" type="candlestick" :options="chartOptions" :series="series">
          </apexchart>
        </div>
        <div class="media ps-4 pe-4 pb-4 pt-2">
          <div class="media-icon bg-primary crypto-icon me-2">
            <i class="cf cf-btc fs-20"></i>
          </div>
          <div class="media-body ms-2">
            <div class="row row-sm">
              <div class="col">
                <label>Symbol</label>
                <p>BTC</p>
              </div>
              <div class="col">
                <label>Price Benchmark</label>
                <p>135.00%</p>
              </div>
              <div class="col">
                <label>Price (USD)</label>
                <p>$2,457.69</p>
              </div>
              <div class="col">
                <label>Change (24H)</label>
                <p>-0.32%</p>
              </div>
              <div class="col">
                <label>Market Cap</label>
                <p>$134.17B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- row closed -->

  <!-- row opened -->
  <div class="row row-sm">
    <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-8">
      <div class="row row-sm">
        <div class="col-sm-12 col-xl-6">
          <div class="card custom-card">
            <div class="card-body row">
              <div class="col-sm-5 d-flex no-block align-items-center">
                <div>
                  <span class="fs-18 mb-3">Bitcoin</span>
                  <h2 class="mb-2 mt-2">3.634528</h2>
                  <span class="m-0 fs-15 mt-4 text-muted">$2500 USD</span>
                </div>
              </div>
              <div class="col-sm-7 my-auto">
                <apexchart height="105px" width="100%" type="line" :options="bitcoinOptions" :series="bitCoinSeries">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <span class="fs-18">Your Profile</span>
              <div class="row mt-3">
                <div class="col-sm-6 my-auto align-items-center">
                  <div class="d-flex">
                    <apexchart height="80px" width="50px" type="donut" :options="profileOptions" :series="profileSeries">
                    </apexchart>
                    <div class="my-auto d-block ms-3">
                      <h6 class="mb-2 fs-16">2.343434</h6>
                      <span class="m-0 fs-14 text-muted">$2500 USD</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 my-auto text-center border-start">
                  <h2 class="mb-2 mt-3 mt-sm-0">2.343434</h2>
                  <span class="m-0 fs-14 mt-3 text-muted">Pending Balance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-header border-bottom-0">
          <label class="main-content-label my-auto pt-2">TRADING ACTIVITIES</label>
          <span class="d-block fs-12 mb-3 mt-1 text-muted">Cryptocurrency trading is the act of speculating on
            cryptocurrency
            price movements via a CFD trading account, or buying and selling the
            underlying coins via an exchange</span>
        </div>
        <div class="card-body pt-3">
          <div class="table-responsive tasks">
            <table class="table card-table table-vcenter text-nowrap border text-start">
              <thead>
                <tr>
                  <th class="wd-lg-10p">#</th>
                  <th class="wd-lg-10p">Name</th>
                  <th class="wd-lg-20p">Price</th>

                  <th class="wd-lg-20p">Change</th>
                  <th class="wd-lg-20p">Date</th>
                  <th class="wd-lg-20p">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="TradingActivitesitems in TradingActivites" :key="TradingActivitesitems.id">
                  <td>{{ TradingActivitesitems.id }}</td>
                  <td class="coin_icon mt-2">
                    <div class="d-flex">
                      <div class="cryp-icon bg-primary me-2">
                        <i :class="'cf cf-' + TradingActivitesitems.icon" />
                      </div>
                      <span class=" my-auto">{{ TradingActivitesitems.name }} <b>{{ TradingActivitesitems.title
                      }}</b></span>
                    </div>
                  </td>
                  <td>
                    {{ TradingActivitesitems.price }}
                  </td>

                  <td class="">
                    <span :class="'text-' + TradingActivitesitems.changeStatus">
                      {{ TradingActivitesitems.change }}
                    </span>
                  </td>
                  <td>
                    {{ TradingActivitesitems.date }}
                  </td>
                  <td class="">
                    <p :class="'text-' + TradingActivitesitems.status">
                      {{ TradingActivitesitems.statusText }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-4">

      <div class="card custom-card overflow-hidden">
        <div class="card-header border-bottom-0">
          <div>
            <div class="card-title">ACTIVITY</div>
            <span class="d-block fs-12 mb-0 text-muted">Activity is one of the many blockchain consensus algorithms</span>
          </div>
        </div>
        <ul class="crypto-transcation list-unstyled mg-b-0 mt-3">
          <li class="list-item mb-0 px-3 mt-0 pb-3">
            <div class="media align-items-center">
              <div class="crypto-icon bg-primary-transparent text-primary"> <i
                  class="cf cf-btc wd-20 ht-20 text-center fs-18"></i>
              </div>
              <div class="media-body ms-3">
                <p class="fw-medium mg-b-3 fs-15">Sent Litecoin</p>
                <p class="fs-11 mg-b-0 text-gray-3">To bitcoin Address</p>
              </div>
            </div>
            <div class="text-end ms-auto my-auto">
              <h5 class="fw-medium fs-16 mb-0">+ 0.0147<i class="text-success fs-16 fe fe-arrow-up ms-1"></i></h5>
            </div>
          </li>
          <li class="list-item mb-0 px-3 pb-3">
            <div class="media align-items-center">
              <div class="crypto-icon bg-primary-transparent text-primary"> <i
                  class="cf cf-ltc wd-20 ht-20 text-center fs-18"></i>
              </div>
              <div class="media-body ms-3">
                <p class="fw-medium mg-b-3 fs-15">Sent Ethereum</p>
                <p class="fs-11 mg-b-0 text-gray-3">Pending</p>
              </div>
            </div>
            <div class="text-end ms-auto my-auto">
              <h5 class="fw-medium fs-16 mb-0">- 0.0345<i class="text-danger fs-16 fe fe-arrow-down ms-1"></i></h5>
            </div>
          </li>
          <li class="list-item mb-0 px-3 pb-3">
            <div class="media align-items-center">
              <div class="crypto-icon bg-primary-transparent text-primary"> <i
                  class="cf cf-dash wd-20 ht-20 text-center fs-18"></i>
              </div>
              <div class="media-body ms-3">
                <p class="fw-medium mg-b-3 fs-15">Received Dash</p>
                <p class="fs-11 mg-b-0 text-gray-3">To Received Address</p>
              </div>
            </div>
            <div class="text-end ms-auto my-auto">
              <h5 class="fw-medium fs-16 mb-0">- 0.0346<i class="text-danger fs-16 fe fe-arrow-down"></i></h5>
            </div>
          </li>
          <li class="list-item px-3 pb-3">
            <div class="media align-items-center">
              <div class="crypto-icon bg-primary-transparent text-primary"> <i
                  class="cf cf-xrp wd-20 ht-20 text-center fs-18"></i>
              </div>
              <div class="media-body ms-3">
                <p class="fw-medium mg-b-3 fs-15">Received Ripple</p>
                <p class="fs-11 mg-b-0 text-gray-3">To Received Address</p>
              </div>
            </div>
            <div class="text-end ms-auto my-auto">
              <h5 class="fw-medium fs-16 mb-0">+ 0.0237<i class="text-success fs-16 fe fe-arrow-up ms-1"></i></h5>
            </div>
          </li>
          <li class="list-item px-3 pb-3">
            <div class="media align-items-center">
              <div class="crypto-icon bg-primary-transparent text-primary"> <i
                  class="cf cf-bsd wd-20 ht-20 text-center fs-18"></i>
              </div>
              <div class="media-body ms-3">
                <p class="fw-medium mg-b-3 fs-15">Received Ripple</p>
                <p class="fs-11 mg-b-0 text-gray-3">To Received Address</p>
              </div>
            </div>
            <div class="text-end ms-auto my-auto">
              <h5 class="fw-medium fs-16 mb-0">- 0.0348<i class="text-danger fs-16 fe fe-arrow-down ms-1"></i></h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import Carousel from "./carousel.vue";
import { allocationOptions, allocationData, allocationType, TradingActivites, series, chartOptions, bitcoinOptions, bitCoinSeries, profileSeries, profileOptions } from './dahboard';
import apexchart from "@/shared/UI/apexcharts.vue";
import customchartjs from "@/shared/UI/customchartjs.vue";
export default {
  components: {
    Pageheader,
    Carousel,
    apexchart,
    customchartjs
  },
  data() {
    return {
      allocationData, allocationOptions, allocationType, chartOptions, series, bitcoinOptions, bitCoinSeries, profileSeries, profileOptions,
      TradingActivites
    };
  },
};
</script>

<style scoped>
#chartDonut {
  height: 230px !important;
  width: 230px !important;
  margin: 0 auto;
}
</style>
