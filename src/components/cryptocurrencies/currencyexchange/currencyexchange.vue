<template>
  <Pageheader heading="Currency Exchange" :maintitle='["Crypto Currencies", "Currency-exchange"]' />
  <div class="row">
    <div class="col-md-12">
      <div class="pt-0 card custom-card pt-7 bg-background2 card pb-7 border-0 overflow-hidden">
        <div class="header-text mb-0">
          <div class="container-fluid p-5">
            <div class="text-start text-fixed-white background-text">
              <h1 class="mb-3 fs-50 fw-medium text-fixed-white">
                Buy and sell Coins without additional fees
              </h1>
              <p class="fs-18 mb-5 text-white-50">
                Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin.
                We accept BTC crypto-currency..
              </p>
            </div>
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 d-block mx-auto">
                <div class="item-search-tabs mb-6 background-text">
                  <div class="buy-sell">
                    <div class="form row mx-auto justify-content-center d-flex p-4">
                      <div class="form-group col-xl-6 col-lg-6 col-md-12 mb-0">
                        <input type="text" class="form-control mb-4 mb-lg-0 ht-40" id="text7" placeholder="13.2458" />
                      </div>
                      <div class="form-group col-xl-6 col-lg-6 col-md-12 mb-0">
                        <Selectoptions :options="digitalOptions" placeholder="Choose one" class="w-100" id="digital"
                          name="digital" :value="digitalValue" />
                      </div>
                      <div class="col-xl-12 col-lg-12 col-md-12 my-3 text-start position-relative">
                        <i class="pe-7s-repeat exchange-icon fs-30 text-fixed-white inline-block"></i>
                      </div>
                      <div class="form-group col-xl-6 col-lg-6 col-md-12 mb-0">
                        <input type="text" class="form-control mb-4 mb-lg-0 ht-40" id="text6" placeholder="02.24" />
                      </div>
                      <div class="form-group col-xl-6 col-lg-6 col-md-12 mb-0">
                        <Selectoptions :options="currencyOptions" placeholder="Choose one" class="w-100" id="currency"
                          name="currency" :value="currencyValue" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center background-text">
                  <a href="javascript:;" class="btn btn-warning ps-6 pe-6 pt-2 pb-2 mx-auto float-start mt-5">EXCHANGE
                    NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /header-text -->
      </div>
    </div>
    <div class="col-md-12">
      <div class="row row-sm">
        <div class="col-xl-4 col-md-12 col-lg-6">
          <div class="card custom-card crypto-card overflow-hidden shadow-sm">
            <div class="card-body pb-0">
              <div class="mb-0 d-flex">
                <h5 class="d-flex mb-0 align-items-center">
                  <span class="cryp-icon bg-primary my-auto me-2"><i class="cf cf-btc"></i></span>Bitcoin BTC
                </h5>
                <span class="float-end ms-auto btn btn-success btn-sm">24h</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <h5 class="d-flex my-auto fw-normal">
                  0.00000434<span class="text-info fs-14 mt-auto ms-2">$0.04</span>
                </h5>
                <div class="text-danger"><i class="me-1 text-success"></i> +4.16%</div>
              </div>
              <div class="chart-wrapper mt-4">

                <apexchart height="110px" width="100%" type="area" :options="chartOptions" :series="btcData">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-12 col-lg-6">
          <div class="card custom-card crypto-card overflow-hidden shadow-sm">
            <div class="card-body pb-0">
              <div class="mb-0 d-flex">
                <h5 class="d-flex mb-0 align-items-center">
                  <span class="cryp-icon bg-primary my-auto me-2"><i class="cf cf-eth"></i></span>
                  Ethereum ETH
                </h5>
                <span class="float-end ms-auto btn btn-success btn-sm">24h</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <h5 class="d-flex my-auto fw-normal">
                  0.00000235<span class="text-info fs-14 mt-auto ms-2">$0.12</span>
                </h5>
                <div class="text-danger"><i class="me-1 text-success"></i> +2.12%</div>
              </div>
              <div class="chart-wrapper mt-4">

                <apexchart height="110px" width="100%" type="area" :options="chartOptions" :series="ethData">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-12 col-lg-6">
          <div class="card custom-card crypto-card overflow-hidden shadow-sm">
            <div class="card-body pb-0">
              <div class="mb-0 d-flex">
                <h5 class="d-flex mb-0 align-items-center">
                  <span class="cryp-icon bg-primary my-auto me-2"><i class="cf cf-xrp"></i></span>
                  Ripple XRP
                </h5>
                <span class="float-end ms-auto btn btn-success btn-sm">24h</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <h5 class="d-flex my-auto fw-normal">
                  0.00000434<span class="text-info fs-14 mt-auto ms-2">$0.03</span>
                </h5>
                <div class="text-danger"><i class="me-1 text-success"></i> +3.12%</div>
              </div>
              <div class="chart-wrapper mt-4">

                <apexchart height="110px" width="100%" type="area" :options="chartOptions" :series="dashData">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-12 col-lg-6">
          <div class="card custom-card crypto-card overflow-hidden shadow-sm">
            <div class="card-body pb-0">
              <div class="mb-0 d-flex">
                <h5 class="d-flex mb-0 align-items-center">
                  <span class="cryp-icon bg-primary my-auto me-2"><i class="cf cf-dash"></i></span>Dash DASH
                </h5>
                <span class="float-end ms-auto btn btn-success btn-sm">24h</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <h5 class="d-flex my-auto fw-normal">
                  0.00000372<span class="text-info fs-14 mt-auto ms-2">$0.12</span>
                </h5>
                <div class="text-danger"><i class="me-1 text-success"></i> +4.23%</div>
              </div>
              <div class="chart-wrapper mt-4">
                <apexchart height="110px" width="100%" type="area" :options="chartOptions" :series="ltcData">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-12 col-lg-6">
          <div class="card custom-card crypto-card overflow-hidden shadow-sm">
            <div class="card-body pb-0">
              <div class="mb-0 d-flex">
                <h5 class="d-flex mb-0 align-items-center">
                  <span class="cryp-icon bg-primary my-auto me-2"><i class="cf cf-neos"></i></span>
                  Neo NEO
                </h5>
                <span class="float-end ms-auto btn btn-success btn-sm">24h</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <h5 class="d-flex my-auto fw-normal">
                  0.00000257<span class="text-info fs-14 mt-auto ms-2">$0.07</span>
                </h5>
                <div class="text-danger"><i class="me-1 text-success"></i> +2.17%</div>
              </div>
              <div class="chart-wrapper mt-4">

                <apexchart height="110px" width="100%" type="area" :options="chartOptions" :series="xrsData">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-12 col-lg-6">
          <div class="card custom-card crypto-card overflow-hidden shadow-sm">
            <div class="card-body pb-0">
              <div class="mb-0 d-flex">
                <h5 class="d-flex mb-0 align-items-center">
                  <span class="cryp-icon bg-primary my-auto me-2"><i class="cf cf-ltc"></i></span>
                  Litecoin LTC
                </h5>
                <span class="float-end ms-auto btn btn-success btn-sm">24h</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <h5 class="d-flex my-auto fw-normal">
                  0.00000534<span class="text-info fs-14 mt-auto ms-2">$0.32</span>
                </h5>
                <div class="text-danger"><i class="me-1 text-success"></i> +2.12%</div>
              </div>
              <div class="chart-wrapper mt-4">

                <apexchart height="110px" width="100%" type="area" :options="chartOptions" :series="glmData">
                </apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Row End -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import {
  btcData,
  chartOptions,
  ethData,
  dashData,
  ltcData,
  xrsData,
  glmData
} from './currencyExchange';
import apexchart from "@/shared/UI/apexcharts.vue";
import Selectoptions from "@/shared/UI/selectoptions.vue";
export default {
  components: {
    Pageheader,
    apexchart,
    Selectoptions,
  },
  data() {
    return {
      digitalValue: null,
      digitalOptions: [
        "BTC",
        "Ethereum",
        "Ripple",
        "Bitcoin cash",
        "Cardano",
        "Litecoin",
        "Neo",
        "Stellar",
        "EOS",
      ],
      currencyValue: null,
      currencyOptions: ["USD", "EURO", "POUND", "RUPEE", "WON", "DINAR", "RIAL"],
      chartOptions,
      btcData,
      ethData,
      dashData,
      ltcData,
      xrsData,
      glmData,
    };
  },
};
</script>

<style scoped></style>
