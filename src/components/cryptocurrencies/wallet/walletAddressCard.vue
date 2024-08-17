<template>
  <div class="card custom-card wallet">
    <div class="card-body">
      <label class="main-content-label mb-2">{{ mainTitle }}</label>
      <br />
      <span class="text-muted">Wallet Address</span>
      <br />
      <div class="d-sm-flex mt-4">
        <img :src="img" class="wd-40 ht-40 me-3 my-auto" alt="" />
        <div class="">
          <span class="text-uppercase fs-14 mt-4 text-muted">Available {{ type }}</span>
          <div class="d-flex my-auto">
            <h4 class="mt-1 mb-0">{{ value }}</h4>
            <span class="mt-auto ms-2">{{ type }}</span>
          </div>
        </div>
        <img :src="QrCode" class="wd-50 ht-50 my-auto ms-auto float-sm-end" alt="" />
      </div>
      <div class="input-group my-4">
        <span class="input-group-addon-left bg-light"><i :class="inputIconClass"></i></span>
        <input type="text" class="form-control input-lg" :value="inputvalue" :id="id" :name="name" />
        <span class="input-group-addon-right bg-light clipboard-icon" data-clipboard-target="#dash-wallet"><i
            class="fe fe-copy"></i></span>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p class="text-uppercase fs-13 text-muted">Received {{ type }}</p>
          <div class="d-flex my-auto flex-wrap">
            <span class="crypto-icon bg-primary-transparent me-3">
              <i class="fe fe-arrow-down-left text-primary"></i>
            </span>
            <h5 class="my-auto">+ {{ receivedValue }}</h5>
            <span class="my-auto ms-2">{{ type }}</span>
          </div>
        </div>
        <div class="col-md-6 mt-3 mt-md-0">
          <p class="text-uppercase fs-13 text-muted">Sent {{ type }}</p>
          <div class="d-flex my-auto flex-wrap">
            <span class="crypto-icon bg-primary-transparent me-3">
              <i class="fe fe-arrow-up-right text-primary"></i>
            </span>
            <h5 class="my-auto">- {{ sentValue }}</h5>
            <span class="my-auto ms-2">{{ type }}</span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6 d-grid">
          <button class="btn btn-block btn-primary">Deposit</button>
        </div>
        <div class="col-6 d-grid">
          <button class="btn btn-block btn-outline-primary">Withdraw</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['mainTitle', 'className', 'QrCode', 'img', 'title', 'value', 'type', 'placeholder', 'id', 'name', 'inputIconClass', 'inputvalue', 'receivedValue', 'sentValue'],
};
</script>

<style scoped></style>
