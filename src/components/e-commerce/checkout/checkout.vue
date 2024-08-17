<template>
  <Pageheader :maintitle='["Ecommerce", "Checkout"]' heading="Checkout" />
  <!-- End Page Header -->

  <!-- Row -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header bg-transparent border-bottom-0">
          <div>
            <label class="main-content-label mb-2">Checkout</label>
            <span class="d-block fs-12 mb-0 text-muted">The Project Budget is a tool used by project managers to estimate
              the total
              cost of a project</span>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-xxl-6 col-xl-8 mx-auto">
              <form-wizard @on-complete="onComplete" id="wizard1" color="rgba(var(--primary-rgb))" step-size="xs">
                <tab-content title="Signin">
                  <section>
                    <form>
                      <h5 class="text-start mb-2">Signin to Your Account</h5>
                      <p class="mb-4 text-muted fs-13 ms-0 text-start">
                        Signin to create, discover and connect with the global community
                      </p>
                      <div class="form-group text-start">
                        <label>Email</label>
                        <input class="form-control" placeholder="Enter your email" type="text" />
                      </div>
                      <div class="form-group text-start">
                        <label>Password</label>
                        <input class="form-control" placeholder="Enter your password" type="password" />
                      </div>
                      <button class="btn ripple btn-primary btn-block">
                        Sign In
                      </button>
                    </form>
                  </section>
                </tab-content>
                <tab-content title="Billing">
                  <section>
                    <form class="needs-validation" novalidate="">
                      <h5 class="text-start mb-2">Billing Information</h5>
                      <p class="mb-4 text-muted fs-13 ms-0 text-start">
                        Lorem Ipsum has been the industry's standard dummy text ever since
                      </p>
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <label for="firstName">First name</label>
                          <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                          <div class="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label for="lastName">Last name</label>
                          <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                          <div class="invalid-feedback">Valid last name is required.</div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                        <div class="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="address2">Address 2 <span class="text-muted">(Optional)</span>
                        </label>
                        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                      </div>
                      <div class="mb-3">
                        <label for="mobile">Mobile Number</label>
                        <input type="text" class="form-control" id="mobile" />
                      </div>
                      <div class="row">
                        <div class="col-md-5 mb-3">
                          <label for="country">Country</label>
                          <select class="form-select d-block w-100" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                          </select>
                          <div class="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <label for="state">State</label>
                          <select class="form-select d-block w-100" id="state" required="">
                            <option value="">Choose...</option>
                            <option>California</option>
                          </select>
                          <div class="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="zip">Zip</label>
                          <input type="text" class="form-control" id="zip" placeholder="" required="" />
                          <div class="invalid-feedback">Zip code required.</div>
                        </div>
                      </div>
                      <hr class="mb-4" />
                      <button class="btn btn-primary btn-lg btn-block" type="submit">
                        Continue to checkout
                      </button>
                    </form>
                  </section>
                </tab-content>
                <tab-content title="Order">
                  <section id="checkoutsteps">
                    <h5 class="text-start mb-2">Your Order</h5>
                    <p class="mb-4 text-muted fs-13 ms-0 text-start">
                      Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                    <div class="product">
                      <div class="item">
                        <div class="left">
                          <a href="javascript:;" class="thumb">
                            <img src="/images/pngs/19.png" alt="" />
                          </a>
                          <div class="purchase">
                            <h6><a href="javascript:;">Mobile Phone Mi</a></h6>

                            <div class="input-group br-3 border flex-nowrap order-quantity">
                              <quantity placeholder="Quantity" name="first" :initialValue="1" />
                            </div>
                          </div>
                        </div>
                        <span class="price">$290</span>
                      </div>
                      <div class="item">
                        <div class="left">
                          <a href="javascript:;" class="thumb">
                            <img src="/images/pngs/16.png" alt="" />
                          </a>
                          <div class="purchase">
                            <h6><a href="javascript:;">Flowerpot</a></h6>

                            <div class="input-group br-3 border flex-nowrap order-quantity">
                              <quantity placeholder="Quantity" name="first" :initialValue="2" />
                            </div>
                          </div>
                        </div>
                        <span class="price">$124</span>
                      </div>
                    </div>
                    <div class="checkout">
                      <div class="subtotal d-flex align-items-center">
                        <span class="heading">Subtotal</span>
                        <span class="total fs-20 fw-bold ms-auto">$364</span>
                      </div>
                    </div>
                  </section>
                </tab-content>
                <tab-content title="Payments">
                  <section>
                    <div>
                      <h5 class="text-start mb-2">Payments</h5>
                      <p class="mb-4 text-muted fs-13 fw-normal ms-0 text-start">Lorem Ipsum has been the industry's
                        standard dummy text ever since</p>
                    </div>
                    <div class="card-pay">
                      <ul class="tabs-menu nav" role="tablist">
                        <li><a href="#tab20" class="active" data-bs-toggle="tab" aria-selected="true" role="tab"><i
                              class="fa fa-credit-card"></i> Credit Card</a></li>
                        <li><a href="#tab21" data-bs-toggle="tab" aria-selected="false" role="tab" class=""
                            tabindex="-1"><i class="fab fa-paypal"></i> Paypal</a></li>
                        <li><a href="#tab22" data-bs-toggle="tab" aria-selected="false" role="tab" class=""
                            tabindex="-1"><i class="fa fa-university"></i> Bank Transfer</a></li>
                      </ul>
                      <div class="tab-content">
                        <div class="tab-pane border-0 active show" id="tab20" role="tabpanel">
                          <div class="form-group">
                            <label class="form-label fw-medium">CardHolder Name</label>
                            <input type="text" class="form-control" placeholder="First Name">
                          </div>
                          <div class="form-group">
                            <label class="form-label fw-medium">Card number</label>
                            <div class="input-group">
                              <input type="text" class="form-control" placeholder="Search for...">
                              <button class="btn btn-primary" type="button"><i class="fab fa-cc-visa"></i> &nbsp; <i
                                  class="fab fa-cc-amex"></i> &nbsp;
                                <i class="fab fa-cc-mastercard"></i></button>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-8">
                              <div class="form-group">
                                <label class="form-label fw-medium">Expiration</label>
                                <div class="input-group">
                                  <input type="number" class="form-control" placeholder="MM" name="Month">
                                  <input type="number" class="form-control" placeholder="YY" name="Year">
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <div class="form-group">
                                <label class="form-label fw-medium">CVV <i class="fa fa-question-circle"></i></label>
                                <input type="number" class="form-control" required="">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane border-0" id="tab21" role="tabpanel">
                          <p class="mt-4">Paypal is easiest way to pay online</p>
                          <p><a href="javascript:void(0);" class="btn btn-primary"><i class="fab fa-paypal"></i> Log in my
                              Paypal</a></p>
                          <p class="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                            nesciunt. </p>
                        </div>
                        <div class="tab-pane border-0" id="tab22" role="tabpanel">
                          <p class="mt-4">Bank account details</p>
                          <dl class="card-text">
                            <dt>BANK: </dt>
                            <dd> THE UNION BANK 0456</dd>
                          </dl>
                          <dl class="card-text">
                            <dt>Account number: </dt>
                            <dd> 67542897653214</dd>
                          </dl>
                          <dl class="card-text">
                            <dt>IBAN: </dt>
                            <dd>543218769</dd>
                          </dl>
                          <p class="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                            nesciunt. </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </tab-content>
                <tab-content title="Finished">
                  <section class="text-center">
                    <div class="">
                      <h5 class="text-center mb-4">Your order Confirmed!</h5>
                    </div>
                    <svg class="wd-100 ht-100 mx-auto justify-content-center mb-3 text-center" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                      <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10"
                        cx="65.1" cy="65.1" r="62.1" />
                      <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round"
                        stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                    </svg>
                    <p class="success ps-sm-5 pe-sm-5">
                      Order placed successfully. Your order will be dispacted soon.
                      meanwhile you can track your order in my order section.
                    </p>
                  </section>
                </tab-content>
              </form-wizard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import quantity from "@/shared/UI/quantity.vue";
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  components: { Pageheader, FormWizard, TabContent, quantity },
  methods: {
    onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>

<style scoped></style>
