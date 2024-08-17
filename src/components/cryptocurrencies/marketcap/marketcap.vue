<template>
  <Pageheader heading="Crypto Market" :maintitle='["Crypto Currencies", "Crypto-Market"]' />
  <!-- row -->
  <div class="row row-sm">
    <div class="col-lg-6 col-xl-6 col-xxl-3 col-md-6 col-12">
      <div class="card custom-card">
        <div class="card-body pb-3">
          <h5 class="fs-14">BTC / USD</h5>
          <div class="d-flex">
            <div class="">
              <h4 class="mb-2">
                34.4324 <span class="text-muted fs-12">$29.42</span>
              </h4>
              <div class="d-flex text-muted fs-13 pt-1 pt-sm-0">
                <span class="text-danger me-2 fw-bold">-0.22%</span>
                Volume - 76,434.57 USDT
              </div>
            </div>
            <div class="d-flex ms-auto float-end">
              <div class="position-absolute top-0 cypto-marketcap-charts">
                <customchartjs id="btc-chart" height="130" width="140" :options="btcOptions" :series="btcData">
                </customchartjs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-xl-6 col-xxl-3 col-md-6 col-12">
      <div class="card custom-card">
        <div class="card-body pb-3">
          <h5 class="fs-14">ETH / USD</h5>
          <div class="d-flex">
            <div class="">
              <h4 class="mb-2">
                29.4124 <span class="text-muted fs-12">$23.15</span>
              </h4>
              <div class="d-flex text-muted fs-13 pt-1 pt-sm-0">
                <span class="text-success me-2 fw-bold">+0.23%</span>
                Volume - 23,346.56 USDT
              </div>
            </div>
            <div class="d-flex ms-auto float-end">
              <div class="ms-auto float-end position-absolute top-0 cypto-marketcap-charts">
                <customchartjs id="eth-chart" height="130" width="140" :options="ethOptions" :series="ethData">
                </customchartjs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-xl-6 col-xxl-3 col-md-6 col-12">
      <div class="card custom-card">
        <div class="card-body pb-3">
          <h5 class="fs-14">XRP / USD</h5>
          <div class="d-flex">
            <div class="">
              <h4 class="mb-2">
                34.5674 <span class="text-muted fs-12">$45.24</span>
              </h4>
              <div class="d-flex text-muted fs-13 pt-1 pt-sm-0">
                <span class="text-danger me-2 fw-bold">-0.42%</span>
                Volume - 56,456.12 USDT
              </div>
            </div>
            <div class="d-flex ms-auto float-end">
              <div class="ms-auto float-end position-absolute top-0 cypto-marketcap-charts">
                <customchartjs id="xrp-chart" height="130" width="140" :options="xrpOptions" :series="xrpData">
                </customchartjs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-xl-6 col-xxl-3 col-md-6 col-12">
      <div class="card custom-card">
        <div class="card-body pb-3">
          <h5 class="fs-14">LTC / USD</h5>
          <div class="d-flex">
            <div class="">
              <h4 class="mb-2">
                45.4542 <span class="text-muted fs-12">$63.34</span>
              </h4>
              <div class="d-flex text-muted fs-13 pt-1 pt-sm-0">
                <span class="text-success me-2 fw-bold">-0.12%</span>
                Volume - 34,462.57 USDT
              </div>
            </div>
            <div class="d-flex ms-auto float-end">
              <div class="ms-auto float-end position-absolute top-0 cypto-marketcap-charts">
                <customchartjs id="ltc-chart" height="130" width="140" :options="ltcmOptions" :series="ltcmData">
                </customchartjs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End row -->

  <!-- row opened -->
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-header border-bottom-0">
          <label class="main-content-label my-auto">Crypt Marketing Values</label>
        </div>
        <div class="card-body">
          <div class="">
            <div class="table-responsive">
              <table class="table text-nowrap border">
                <thead class="border-top">
                  <tr>
                    <th class="bg-transparent">No</th>
                    <th class="bg-transparent">Name</th>
                    <th class="bg-transparent">Last Price</th>
                    <th class="bg-transparent">Market Cap</th>
                    <th class="bg-transparent">Change(24h)</th>
                    <th class="bg-transparent"></th>
                  </tr>
                </thead>

                <tbody v-for="menuItem in cryptoMarketData" :key="menuItem">
                  <tr class="border-bottom">
                    <td>{{ menuItem.id }}</td>
                    <td>
                      <img :src="menuItem.img" class="wd-30 ht-30 me-3" alt="img"/>
                      {{menuItem.name}}
                      <b>{{ menuItem.coinName }}</b>
                    </td>
                    <td>${{ menuItem.lastPrice }}</td>
                    <td>${{ menuItem.marketPrice }}</td>
                    <td>
                      <span :class="'text-' + menuItem.change">{{menuItem.changes}}%</span>
                    </td>
                    <td>
                      <a href="javascript:;" class="btn btn-outline-primary btn-sm">Trade</a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import customchartjs from "@/shared/UI/customchartjs.vue";
import {
  btcOptions,
  btcData,
  ethOptions,
  ethData,
  xrpOptions,
  xrpData,
  ltcmOptions,
  ltcmData, cryptoMarketData
} from './marketcapData';
export default {
  components: {
    Pageheader,
    customchartjs
  },
  data() {
    return {
      btcOptions,
      btcData,
      ethOptions,
      ethData,
      xrpOptions,
      xrpData,
      ltcmOptions,
      ltcmData,
      cryptoMarketData
    };
  },
};
</script>

<style scoped></style>
