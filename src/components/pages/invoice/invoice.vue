<template>
  <!-- Row -->
  <Pageheader heading="Invoice" :maintitle='["Pages", "Invoice"]' />
  <div class="row row-sm">
    <div class="col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-lg-flex">
            <h2 class="main-content-label mb-1">#INV0678</h2>
            <div class="ms-auto">
              <p class="mb-1">
                <span class="fw-bold">Invoice Date :</span> 01st November 2020
              </p>
              <p class="mb-0">
                <span class="fw-bold">Due Date :</span> 01 May 2020
              </p>
            </div>
          </div>
          <hr class="mg-b-40" />
          <div class="row row-sm">
            <div class="col-lg-6">
              <p class="h3">Invoice Form:</p>
              <address>
                Street Address<br />
                State, City<br />
                Region, Postal Code<br />
                yourdomain@example.com
              </address>
            </div>
            <div class="col-lg-6 text-end">
              <p class="h3">Invoice To:</p>
              <address>
                Street Address<br />
                State, City<br />
                Region, Postal Code<br />
                ypurdomain@example.com
              </address>
            </div>
          </div>
          <div class="table-responsive mg-t-40">
            <table class="table table-invoice table-bordered">
              <thead>
                <tr>
                  <th class="wd-20p">Product</th>
                  <th class="wd-40p">Description</th>
                  <th class="fs-center">QNTY</th>
                  <th class="fs-right">Unit</th>
                  <th class="fs-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Logo Creation</td>
                  <td class="fs-12">Logo and business cards design</td>
                  <td class="fs-center">2</td>
                  <td class="fs-right">$60.00</td>
                  <td class="fs-right">$120.00</td>
                </tr>
                <tr>
                  <td>Online Store Design & Development</td>
                  <td class="fs-12">
                    Design/Development for all popular modern browsers
                  </td>
                  <td class="fs-center">3</td>
                  <td class="fs-right">$80.00</td>
                  <td class="fs-right">$240.00</td>
                </tr>
                <tr>
                  <td>App Design</td>
                  <td class="fs-12">Promotional mobile application</td>
                  <td class="fs-center">1</td>
                  <td class="fs-right">$40.00</td>
                  <td class="fs-right">$40.00</td>
                </tr>
                <tr>
                  <td class="valign-middle" colspan="2" rowspan="4">
                    <div class="invoice-notes">
                      <label class="main-content-label fs-13">Notes</label>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                    <!-- invoice-notes -->
                  </td>
                  <td class="fs-right">Sub-Total</td>
                  <td class="fs-right" colspan="2">$400.00</td>
                </tr>
                <tr>
                  <td class="fs-right">Tax</td>
                  <td class="fs-right" colspan="2">3%</td>
                </tr>
                <tr>
                  <td class="fs-right">Discount</td>
                  <td class="fs-right" colspan="2">10%</td>
                </tr>
                <tr>
                  <td class="fs-right fs-uppercase fs-bold fs-inverse">Total Due</td>
                  <td class="fs-right" colspan="2">
                    <h4 class="fs-bold">$450.00</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer text-end btn-list">
          <button type="button" class="btn ripple btn-primary mb-1">
            <i class="fe fe-credit-card me-1"></i> Pay Invoice
          </button>
          <button type="button" class="btn ripple btn-secondary mb-1">
            <i class="fe fe-send me-1"></i> Send Invoice
          </button>
          <button
            type="button"
            class="btn ripple btn-info mb-1"
            onclick="javascript:window.print();"
          >
            <i class="fe fe-printer me-1"></i> Print Invoice
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
export default { components: { Pageheader } };
</script>

<style scoped></style>
