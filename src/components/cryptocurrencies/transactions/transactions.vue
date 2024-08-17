<template>
  <Pageheader heading="Transactions" :maintitle='["Crypto Currencies", "Transactions"]' />
  <div class="row row-sm">
    <div class="col-md-12 col-lg-12 col-xl-12">
      <div class="card custom-card transcation-crypto">
        <div class="card-header border-bottom-0">
        <div>
            <div class="card-title">Transaction History</div>
            <p class="d-block fs-12 mb-0 mt-2 text-muted">Transaction History it shows you who sent the transaction, how much has been sent, its destination and the fees that were paid for it.</p>
        </div>
        </div>
        <div class="card-body">
          <div>
            <Transactiondata />
          </div>
        </div>
      </div>
      <!-- Row End -->
    </div>
  </div>
</template>

<script>
import Transactiondata from "./transactiondata.vue";
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
export default {
  components: { Transactiondata, Pageheader },
};
</script>

<style scoped></style>
