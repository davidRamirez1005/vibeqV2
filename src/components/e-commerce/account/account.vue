<template>
  <Pageheader heading="Account" :maintitle='["E-commerece", "Account"]' />
  <div class="row row-sm">
    <div class="col-xl-3 col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-header">
          <h3 class="main-content-label">My Account</h3>
        </div>
        <div class="card-body text-center item-user">
          <div class="profile-pic">
            <div class="profile-pic-img">
              <span class="bg-success dots" data-bs-toggle="tooltip" data-bs-placement="top" title="online"></span>
              <img src="/images/faces/1.jpg" class="rounded-circle" alt="user" />
            </div>
            <a href="javascript:;" class="text-dark">
              <h5 class="mt-3 mb-0 fw-semibold">Sonia Taylor</h5>
            </a>
          </div>
        </div>

        <div class="">
          <div class="panel panel-primary tabs-style-4">
            <div class="tab-menu-heading w-100">
              <div class="tabs-menu">
                <!-- Tabs -->
                <ul class="item1-links nav nav-tabs mb-0">
                  <li class="nav-item">
                    <a href="#orders" class="nav-link active" data-bs-toggle="tab">
                      <i class="ti-user icon1 float-start"></i> My orders</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#myaddres" data-bs-toggle="tab">
                      <i class="ti-save-alt icon1 float-start"></i>My Address</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#trackorder" data-bs-toggle="tab">
                      <i class="ti-truck icon1 float-start"></i>Track Order</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#whishlist" data-bs-toggle="tab">
                      <i class="ti-heart icon1 float-start"></i> Wishlist</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#wallet" data-bs-toggle="tab">
                      <i class="ti-wallet icon1 float-start"></i>Wallet</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#profile" data-bs-toggle="tab">
                      <i class="ti-credit-card icon1 float-start"></i>My Profile</a>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" :to='`${url}custompages/signin`'>
                      <i class="ti-power-off icon1 float-start"></i>Logout</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-9 col-lg-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active p-0" id="orders" role="tabpanel">
              <div class="d-flex mb-4">
                <label class="main-content-label my-auto">All orders</label>
                <h6 class="mb-0 ms-auto">
                  <button class="btn btn-success float-end">
                    <i class=""></i>Invoice
                  </button>
                </h6>
              </div>
              <div class="table-responsive">
                <table class="table border text-md-nowrap text-nowrap">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Photo</th>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th class="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-bottom">
                      <th scope="row">#34350</th>
                      <td>
                        <img src="/images/pngs/17.png" class="img-sm product-image border" alt="product-img" />
                      </td>
                      <td>Plastic Outdoor Chair</td>
                      <td>1</td>
                      <td>$200</td>
                      <td class="text-end">$200</td>
                    </tr>
                    <tr class="border-bottom">
                      <th scope="row">#34351</th>
                      <td>
                        <img src="/images/pngs/18.png" class="img-sm product-image border" alt="product-img" />
                      </td>
                      <td>Black Digital smart watch</td>
                      <td>2</td>
                      <td>$500</td>
                      <td class="text-end">$500</td>
                    </tr>
                    <tr class="border-bottom">
                      <th scope="row">#34352</th>
                      <td>
                        <img src="/images/pngs/15.png" class="img-sm product-image border" alt="product-img" />
                      </td>
                      <td>Women Pink Heels Sandal</td>
                      <td>2</td>
                      <td>$400</td>
                      <td class="text-end">$400</td>
                    </tr>
                    <tr>
                      <th scope="row">#34353</th>
                      <td>
                        <img src="/images/pngs/19.png" class="img-sm product-image border" alt="product-img" />
                      </td>
                      <td>Apple iPhone(Black, 128 GB)</td>
                      <td>2</td>
                      <td>$800</td>
                      <td class="text-end">$800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade p-0" id="myaddres" role="tabpanel">
              <button type="button" class="btn btn-round btn-success mb-3">
                <i class="fe fe-plus-circle me-2"></i>Add New Address
              </button>
              <div class="row">
                <div class="col-lg-12 col-xl-6">
                  <div class="card custom-card border mb-lg-0">
                    <div class="card-header pb-3 border-bottom">
                      <h6 class="mb-0"><i class="ti-home me-2 d-inline-block"></i>Default Address</h6>
                    </div>
                    <div class="card-body">
                      <p>+91 08023310451</p>
                      <p>
                        3-15/10/403 Newark, Street no 5, Next To Pizza Hut, Bangalore,
                        Karnataka, 560003, India.
                      </p>
                      <p class="mb-0">soniataylor344@example.com</p>
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col-6 d-grid">
                          <button type="button" class="btn btn-block btn-primary mb-1">
                            <i class="bi bi-pencil"></i>
                          </button>
                        </div>
                        <div class="col-6 d-grid">
                          <button type="button" class="btn btn-block btn-outline-primary mb-1">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-xl-6">
                  <div class="card custom-card border mb-0">
                    <div class="card-header pb-3 border-bottom">
                      <h6 class="mb-0"><i class="ti-home me-2 d-inline-block"></i>Office Address</h6>
                    </div>
                    <div class="card-body">
                      <p>+91 02228346362</p>
                      <p>
                        2-15A-12 , Steriling Chambers, S Radhakrishnana Marg, J B Nagar,
                        Andheri (west), Mumbai , Maharashtra
                      </p>
                      <p class="mb-0">john54@gmail.com</p>
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col-6 d-grid">
                          <button type="button" class="btn btn-block btn-primary mb-1">
                            <i class="bi bi-pencil"></i>
                          </button>
                        </div>
                        <div class="col-6 d-grid">
                          <button type="button" class="btn btn-block btn-outline-primary mb-1">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade p-0" id="trackorder" role="tabpanel">
              <h6 class="mb-4">ORDER ID: <b>OD45345345435</b></h6>
              <div class="card">
                <div class="card-body row">
                  <div class="col-sm-12 col-md-3 mb-3 mb-md-0">
                    <strong>Estimated Delivery time:</strong> <br />29 Dec 2020
                  </div>
                  <div class="col-sm-12 col-md-3 mb-3 mb-md-0">
                    <strong>Shipping BY:</strong> <br />
                    BLUEDART, | <i class="fa fa-phone"></i> +1598675986
                  </div>
                  <div class="col-sm-12 col-md-3 mb-3 mb-md-">
                    <strong>Status:</strong> <br />
                    Picked by the courier
                  </div>
                  <div class="col-sm-12 col-md-3">
                    <strong>Tracking #:</strong> <br />
                    BD045903594656
                  </div>
                </div>
              </div>
              <div class="track mb-5">
                <div class="step active">
                  <span class="icon"> <i class="fa fa-check"></i> </span>
                  <span class="text d-none d-md-block">Order confirmed</span>
                </div>
                <div class="step active">
                  <span class="icon"> <i class="fa fa-user"></i> </span>
                  <span class="text d-none d-md-block"> Picked by courier</span>
                </div>
                <div class="step">
                  <span class="icon"> <i class="fa fa-truck"></i> </span>
                  <span class="text d-none d-md-block"> On the way </span>
                </div>
                <div class="step">
                  <span class="icon"> <i class="fa fa-gift"></i> </span>
                  <span class="text d-none d-md-block">Ready for pickup</span>
                </div>
              </div>
              <br />
              <div class="row mt-3">
                <div class="col-xl-4">
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img src="/images/pngs/19.png" class="img-sm product-image border" alt="product-img" />
                    </div>
                    <figcaption class="info align-self-center">
                      <p class="title mb-1">
                        Apple iPhone(Black, 128 GB) <br />
                        8GB RAM
                      </p>
                      <span class="text-muted">$950 </span>
                    </figcaption>
                  </figure>
                </div>
                <div class="col-xl-4">
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img src="/images/pngs/16.png" class="img-sm product-image border" alt="product-img" />
                    </div>
                    <figcaption class="info align-self-center">
                      <p class="title mb-1">
                        Designer Hand Decorative <br />
                        flower Pot
                      </p>
                      <span class="text-muted">$850 </span>
                    </figcaption>
                  </figure>
                </div>
                <div class="col-xl-4">
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img src="/images/pngs/14.png" class="img-sm product-image border" alt="product-img" />
                    </div>
                    <figcaption class="info align-self-center">
                      <p class="title mb-1">Regular waterproof <br />(24 L) Backpack</p>
                      <span class="text-muted">$650 </span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="tab-pane fade p-0" id="whishlist" role="tabpanel">
              <div class="d-flex mb-4">
                <label class="main-content-label my-auto">Wishlist</label>
              </div>
              <div class="table-responsive">
                <table class="table border text-nowrap">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Photo</th>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <img src="/images/pngs/14.png" class="img-sm product-image border" alt="product-img" />
                      </td>
                      <td>Regular waterproof (24 L) Backpack</td>
                      <td class="wishlist-qty-cell">
                        <div class="form-group mb-0">
                          <input type="number" class="form-control cart-qty" name="cartQty1" id="cartQty1" value="1">
                        </div>
                      </td>
                      <td>$10</td>
                      <td>$500</td>
                      <td>
                        <router-link :to="`${url}ecommerce/cart`" type="button" class="btn btn-primary mb-1 me-1">
                          <i class="ti-shopping-cart me-2 d-inline-block"></i>Move to cart
                        </router-link>
                        <button type="button" class="btn btn-danger mb-1">
                          <i class="ti-trash me-2 d-inline-block"></i>Remove
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <img src="/images/pngs/16.png" class="img-sm product-image border" alt="product-img" />
                      </td>
                      <td>Designer Hand Decorative flower Pot</td>
                      <td class="wishlist-qty-cell">
                        <div class="form-group mb-0">
                          <input type="number" class="form-control cart-qty" name="cartQty2" id="cartQty2" value="1">
                        </div>
                      </td>
                      <td>$20</td>
                      <td>$200</td>
                      <td>
                        <router-link :to="`${url}ecommerce/cart`" type="button" class="btn btn-primary mb-1 me-1">
                          <i class="ti-shopping-cart me-2 d-inline-block"></i>Move to cart
                        </router-link>
                        <button type="button" class="btn btn-danger mb-1">
                          <i class="ti-trash me-2 d-inline-block"></i>Remove
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        <img src="/images/pngs/19.png" class="img-sm product-image border" alt="product-img" />
                      </td>
                      <td>Apple iPhone(Black, 128 GB) 8GB RAM</td>
                      <td class="wishlist-qty-cell">
                        <div class="form-group mb-0">
                          <input type="number" class="form-control cart-qty" name="cartQty3" id="cartQty3" value="1">
                        </div>
                      </td>
                      <td>$30</td>
                      <td>$300</td>
                      <td>
                        <router-link :to="`${url}ecommerce/cart`" type="button" class="btn btn-primary mb-1 me-1">
                          <i class="ti-shopping-cart me-2 d-inline-block"></i>Move to cart
                        </router-link>
                        <button type="button" class="btn btn-danger mb-1">
                          <i class="ti-trash me-2 d-inline-block"></i>Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade p-0" id="wallet" role="tabpanel">
              <div class="border p-4 text-center">
                <span class="text-uppercase fs-14 mt-4 text-muted">Available</span>
                <h1 class="my-3">$245465</h1>
                <a href="javascript:;" class="btn btn-primary"><i class="fe fe-plus me-2"></i>Add Money</a>
              </div>
              <ul class="list-group fs-13">
                <li
                  class="list-group-item pd-x-5 pd-sm-x-0 d-flex justify-content-between flex-wrap rounded-0 border-top-0">
                  <div class="d-flex">
                    <span class="crypto-icon bg-primary-transparent me-3"><i
                        class="fe fe-arrow-down-left text-primary"></i></span>
                    <span class="my-auto fw-semibold fs-15">Received</span>
                  </div>
                  <span class="fw-semibold my-auto text-success fs-15">+0.00004564</span>
                </li>
                <li class="list-group-item pd-x-5 pd-sm-x-0 d-flex justify-content-between flex-wrap">
                  <div class="d-flex">
                    <span class="crypto-icon bg-primary-transparent me-3"><i
                        class="fe fe-arrow-up-right text-primary"></i></span>
                    <span class="my-auto fw-semibold fs-15">Sent</span>
                  </div>
                  <span class="fw-semibold my-auto text-danger fs-15">-0.03445436</span>
                </li>
                <li class="list-group-item pd-x-5 pd-sm-x-0 d-flex justify-content-between flex-wrap">
                  <div class="d-flex">
                    <span class="crypto-icon bg-primary-transparent me-3"><i
                        class="fe fe-arrow-down-left text-primary"></i></span>
                    <span class="my-auto fw-semibold fs-15">Received</span>
                  </div>
                  <span class="fw-semibold my-auto text-success fs-15">+4.2543</span>
                </li>
                <li class="list-group-item pd-x-5 pd-sm-x-0 d-flex justify-content-between flex-wrap">
                  <div class="d-flex">
                    <span class="crypto-icon bg-primary-transparent me-3"><i
                        class="fe fe-arrow-up-right text-primary"></i></span>
                    <span class="my-auto fw-semibold fs-15">Sent</span>
                  </div>
                  <span class="fw-semibold my-auto text-danger fs-15">+0.00255423</span>
                </li>
                <li class="list-group-item pd-x-5 pd-sm-x-0 d-flex justify-content-between flex-wrap">
                  <div class="d-flex">
                    <span class="crypto-icon bg-primary-transparent me-3"><i
                        class="fe fe-arrow-down-left text-primary"></i></span>
                    <span class="my-auto fw-semibold fs-15">Received</span>
                  </div>
                  <span class="fw-semibold my-auto text-success fs-15">-0.02434525</span>
                </li>
              </ul>
            </div>
            <div class="tab-pane fade p-0" id="profile" role="tabpanel">
              <div class="d-flex align-items-start pb-3 border-bottom">
                <img src="/images/faces/1.jpg" class="img rounded-circle avatar-xl" alt="" />
                <div class="ps-sm-4 ps-2" id="img-section">
                  <b>Profile Photo</b>
                  <p class="mb-1">Accepted file type .png. Less than 1MB</p>
                  <button class="btn button border btn-sm"><b>Upload</b></button>
                </div>
              </div>
              <div class="py-2">
                <div class="row py-2">
                  <div class="col-md-6">
                    <label class="form-label fw-medium" id="firstname">First Name</label>
                    <input type="text" class="form-control" placeholder="Steve" />
                  </div>
                  <div class="col-md-6 mt-md-0 mt-3">
                    <label class="form-label fw-medium" id="last-name">Last Name</label>
                    <input type="text" class="form-control" placeholder="Smith" />
                  </div>
                </div>
                <div class="row py-2">
                  <div class="col-md-6">
                    <label class="form-label fw-medium" id="emailid">Email Address</label>
                    <input type="text" class="form-control" placeholder="steve_@email.com" />
                  </div>
                  <div class="col-md-6 mt-md-0 mt-3">
                    <label class="form-label fw-medium" id="phoneno">Phone Number</label>
                    <input type="number" class="form-control" placeholder="+1 213-548-6015" />
                  </div>
                </div>
                <div class="row py-2">
                  <div class="col-xl-6 form-group mb-0">
                    <label class="form-label fw-medium" for="country">Country</label>
                    <Selectoptions :options="countryOptions" placeholder="Choose one" class="" id="country" name="country"
                      :value="countryValue" />
                  </div>
                  <div class="col-xl-6 mt-md-0 mt-3  form-group mb-0" id="lang">
                    <label class="form-label fw-medium" for="language">Language</label>
                    <div class="arrow">
                      <Selectoptions :options="languageOptions" placeholder="Choose one" class="" id="language"
                        name="language" :value="languageValue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import Selectoptions from "@/shared/UI/selectoptions.vue";
export default {
  components: { Pageheader, Selectoptions },
  data() {
    return {
      url: import.meta.env.BASE_URL,
      countryValue: null,
      countryOptions: ["India", "USA", "UK", "UAE"],

      languageValue: null,
      languageOptions: ["English", "English (United States)", "English UK", "Arabic"],
    }
  },
};
</script>

<style scoped></style>
