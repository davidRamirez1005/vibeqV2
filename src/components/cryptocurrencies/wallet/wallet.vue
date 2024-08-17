<template>
  <Pageheader heading="Wallet" :maintitle='["Crytpo-Currencies", "Wallet"]' />
  <!-- row -->
  <div class="row row-sm">
    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12">
      <div class="card custom-card crypto-cur">
        <div class="card-header border-bottom-0 mb-0">
          <label class="main-content-label mb-0">Wallet</label>
        </div>
        <div class="card-body pt-1">
          <div class="d-flex">
            <img src="/images/svgs/crypto-currencies/btc.svg" class="wd-40 ht-40 me-3 my-auto" alt="" />
            <div class="">
              <span class="text-uppercase fs-14 mt-4 text-muted">Available BTC</span>
              <div class="d-flex my-auto">
                <h2 class="mt-1 mb-0">0.0245465</h2>
                <span class="mt-auto ms-2">BTC</span>
              </div>
            </div>
          </div>
          <div class="d-flex mt-4 justify-content-between flex-wrap gap-2">
            <div class="mb-3 mb-sm-0">
              <p class="text-uppercase fs-13 text-muted mb-1">Buy this month</p>
              <div class="d-sm-flex my-auto">
                <h5 class="mt-1 mb-0">0.0324354</h5>
                <span class="mt-auto ms-2">BTC</span>
              </div>
            </div>
            <div>
              <p class="text-uppercase fs-13 text-muted mb-1">Sell this month</p>
              <div class="d-flex my-auto">
                <h5 class="mt-1 mb-0">0.02434566</h5>
                <span class="mt-auto ms-2">BTC</span>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-6 d-grid">
              <button class="btn btn-primary">Deposit</button>
            </div>
            <div class="col-6 d-grid">
              <button class="btn btn-success">Withdraw</button>
            </div>
          </div>
          <ul class="list-group mt-4 fs-13">
            <li class="list-group-item px-3 d-flex justify-content-between flex-wrap">
              <div class="d-flex">
                <span class="crypto-icon bg-primary-transparent me-3"><i
                    class="fe fe-arrow-down-left text-primary"></i></span>
                <span class="my-auto fw-medium fs-15">Received Bitcoin</span>
              </div>
              <span class="fw-medium my-auto text-success fs-15">+0.00004564 <span
                  class="mt-auto ms-2 text-muted fw-normal">BTC</span></span>
            </li>
            <li class="list-group-item px-3 d-flex justify-content-between flex-wrap">
              <div class="d-flex">
                <span class="crypto-icon bg-primary-transparent me-3"><i
                    class="fe fe-arrow-up-right text-primary"></i></span>
                <span class="my-auto fw-medium fs-15">Sent Bitcoin</span>
              </div>
              <span class="fw-medium my-auto text-danger fs-15">-0.03445436 <span
                  class="mt-auto ms-2 text-muted fw-normal">BTC</span></span>
            </li>
            <li class="list-group-item px-3 d-flex justify-content-between flex-wrap">
              <div class="d-flex">
                <span class="crypto-icon bg-primary-transparent me-3"><i
                    class="fe fe-arrow-down-left text-primary"></i></span>
                <span class="my-auto fw-medium fs-15">Received Ethereum</span>
              </div>
              <span class="fw-medium my-auto text-success fs-15">+4.2543 <span
                  class="mt-auto ms-2 text-muted fw-normal">ETH</span></span>
            </li>
            <li class="list-group-item px-3 d-flex justify-content-between flex-wrap">
              <div class="d-flex">
                <span class="crypto-icon bg-primary-transparent me-3"><i
                    class="fe fe-arrow-up-right text-primary"></i></span>
                <span class="my-auto fw-medium fs-15">Sent Bitcoin</span>
              </div>
              <span class="fw-medium my-auto text-danger fs-15">+0.00255423 <span
                  class="mt-auto ms-2 text-muted fw-normal">BTC</span></span>
            </li>
            <li class="list-group-item px-3 d-flex justify-content-between flex-wrap">
              <div class="d-flex">
                <span class="crypto-icon bg-primary-transparent me-3"><i
                    class="fe fe-arrow-down-left text-primary"></i></span>
                <span class="my-auto fw-medium fs-15">Received Litecoin</span>
              </div>
              <span class="fw-medium my-auto text-success fs-15">-0.02434525 <span
                  class="mt-auto ms-2 text-muted fw-normal">LTC</span></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="card custom-card crypto-cur2">
        <div class="card-header border-bottom-0 justify-content-between pb-0">
          <label class="main-content-label mt-3">My Wallet</label>
          <div class="float-end my-auto">
            <a class="btn btn-light mt-1" href="javascript:;"><i class="fa fa-plus"></i></a>
          </div>
        </div>
        <div class="card-body p-3">
          <div class="d-flex">
            <img src="/images/svgs/crypto-currencies/btc.svg" class="wd-30 ht-30 me-3 my-auto" alt="img" />
            <div class="mt-1">
              <h5 class="mb-2 fs-16">Bitcoin Account</h5>
              <span class="mb-0 fs-18 text-dark fw-normal">2.2546854 BTC = $6,334.89</span>
            </div>
          </div>
          <div class="row mt-3 d-block d-sm-flex">
            <div class="col mb-3 mb-sm-0">
              <a class="btn btn-light d-grid btn-square" href="javascript:;">Transfer</a>
            </div>
            <div class="col">
              <a class="btn btn-white border d-grid btn-square" href="javascript:;">Network
                Transfer</a>
            </div>
          </div>
        </div>
        <div class="card-body p-3">
          <div class="d-flex">
            <img src="/images/svgs/crypto-currencies/dash.svg" class="wd-30 ht-30 me-3 my-auto" alt="img" />
            <div class="mt-1">
              <h5 class="mb-2 fs-16">Dash</h5>
              <span class="mb-0 fs-18 text-dark fw-normal">3.3454545 DASH = $5,232.23</span>
            </div>
          </div>
          <div class="row mt-3 d-block d-sm-flex">
            <div class="col mb-3 mb-sm-0">
              <a class="btn btn-light d-grid btn-square" href="javascript:;">Transfer</a>
            </div>
            <div class="col">
              <a class="btn btn-white border d-grid btn-square" href="javascript:;">Network
                Transfer</a>
            </div>
          </div>
        </div>
        <div class="card-body p-3">
          <div class="d-flex">
            <img src="/images/svgs/crypto-currencies/miota.svg" class="wd-30 ht-30 me-3 my-auto" alt="img" />
            <div class="mt-1">
              <h5 class="mb-2 fs-16">IOTA</h5>
              <span class="mb-0 fs-18 text-dark fw-normal">1.3455672 IOTA = $2,434.32</span>
            </div>
          </div>
          <div class="row mt-3 d-block d-sm-flex">
            <div class="col mb-3 mb-sm-0">
              <a class="btn btn-light d-grid btn-square" href="javascript:;">Transfer</a>

            </div>
            <div class="col">
              <a class="btn btn-white border d-grid btn-square" href="javascript:;">Network
                Transfer</a>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xxl-8 col-xl-12 col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <label class="main-content-label mb-0">BTC Wallet Address</label>
          <div class="row mt-3 crypto-wallet">
            <div class="col-md-10">
              <p>Wallet Address .</p>
              <div class="input-group">
                <input type="text" class="form-control input-lg" id="wallet-address"
                  value="afb0dc8bc84625587b85415c86ef43ed8df" />
                <div class="input-group-prepend">
                  <button class="btn btn-primary clipboard-icon clipboard-box" data-clipboard-target="#wallet-address">
                    COPY
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <img src="/images/pngs/22.png" alt="qrcode" class="ht-100 float-end mb-2 mt-2" />
            </div>
          </div>
        </div>
        <div class="row row-sm px-4">
          <div class="col-lg-4 col-xl-4">
            <div class="card border custom-card">
              <div class="card-body">
                <div class="d-flex">
                  <span class="crypto-icon bg-primary-transparent me-3 my-auto"><i
                      class="fe fe-arrow-down-left text-primary"></i></span>
                  <div class="">
                    <p class="text-uppercase fs-13 text-muted mb-1">Received</p>
                    <h5 class="">
                      4,342.4545
                      <span class="fs-14 text-muted fw-normal ms-1">BTC</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4">
            <div class="card border custom-card">
              <div class="card-body">
                <div class="d-flex">
                  <span class="crypto-icon bg-primary-transparent me-3 my-auto">
                    <i class="fe fe-arrow-up-right text-primary"></i>
                  </span>
                  <div class="">
                    <p class="text-uppercase fs-13 text-muted mb-1">Sent</p>
                    <h5 class="">
                      5,194.2462
                      <span class="fs-14 text-muted fw-normal ms-1">BTC</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4">
            <div class="card border custom-card">
              <div class="card-body">
                <div class="d-flex">
                  <span class="crypto-icon bg-primary-transparent me-3 my-auto"><i
                      class="fas fa-wallet text-primary"></i></span>
                  <div class="">
                    <p class="text-uppercase fs-13 text-muted mb-1">Balance</p>
                    <h5 class="">
                      2.33823739
                      <span class="fs-14 text-muted fw-normal ms-1">BTC</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- row -->
      <div class="row row-sm">
        <div class="col-xl-6 col-lg-12 col-md-12" v-for="(item, index) in walletData" :key="`events-${index}`">
          <walletAddressCard :mainTitle="item.mainTitle" :className="item.className" :QrCode="item.QrCode" :img="item.img"
            :inputIconClass="item.inputIconClass" :value="item.value" :type="item.type" :placeholder="item.placeholder"
            :id="item.id" :name="item.name" :inputvalue="item.inputvalue" :receivedValue="item.receivedValue"
            :sentValue="item.sentValue" />
        </div>
      </div>
      <!-- Row End -->
    </div>
  </div>
  <!-- Row End -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import walletAddressCard from "./walletAddressCard.vue";
import { walletData } from './walletData';

export default {
  components: { Pageheader, walletAddressCard },
  data() {
    return {
      walletData,
      url: import.meta.env.BASE_URL,
    }
  },
};
</script>

<style scoped></style>
