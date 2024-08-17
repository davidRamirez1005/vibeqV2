<template>
  <!-- Row -->
  <Pageheader heading="Cart" :maintitle='["Ecommerce", "Cart"]' />
  <div class="row row-sm">
    <div class="col-lg-12 col-xl-9 col-md-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Shopping cart</div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table border table-hover text-nowrap table-shopping-cart mb-0">
              <thead class="text-muted">
                <tr class="small text-uppercase">
                  <th scope="col">Product</th>
                  <th scope="col">Status</th>
                  <th scope="col" class="wd-120">Quantity</th>
                  <th scope="col" class="wd-120">Price</th>
                  <th scope="col" class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="Shoppingcartdetails in Shoppingcart" :key="Shoppingcartdetails.id">
                  <td>
                    <div class="media">
                      <div class="card-aside-img">
                        <img :src="Shoppingcartdetails.product" class="img-sm" />
                      </div>
                      <div class="media-body my-auto">
                        <div class="card-item-desc mt-0">
                          <h6 class="fw-semibold mt-0 text-uppercase">
                            {{ Shoppingcartdetails.productName }}
                          </h6>
                          <dl class="card-item-desc-1">
                            <dt>Color:</dt>
                            <dd>{{ Shoppingcartdetails.colorpicker }}</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p :class="'small mb-0 mt-1 fs-12 text-' + Shoppingcartdetails.qtytext">
                      {{ Shoppingcartdetails.qty }}
                    </p>
                  </td>
                  <td class="product-quantity-container">
                    <div class="input-group br-3 border flex-nowrap">
                      <quantity placeholder="Quantity" name="first" :initialValue="Shoppingcartdetails.quantity" />
                    </div>
                  </td>
                  <td>
                    <div class="price-wrap">
                      <span class="price fw-bold fs-16">{{
                        Shoppingcartdetails.price
                      }}</span>
                    </div>
                  </td>
                  <td class="text-center">
                    <a href="javascript:;" class="remove-list text-danger fs-20 remove-button" data-abc="true" @click="itemremove(Shoppingcartdetails)"><i class="fa fa-trash"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-xl-3 col-md-12">
      <div class="card custom-card">
        <div class="card-body">
          <form>
            <div class="form-group mb-0">
              <label class="form-label fw-medium">Have coupon?</label>
              <div class="input-group">
                <input type="text" class="form-control coupon" placeholder="Coupon code" />
                <span class="input-group-append">
                  <button class="btn btn-primary btn-apply coupon">Apply</button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="card custom-card cart-details">
        <div class="card-body">
          <h5 class="mb-3 fw-bold fs-14">PRICE DETAIL</h5>
          <dl class="dlist-align">
            <dt class="">ITEMS 3</dt>
            <dd class="text-end ms-auto">$ 262.00</dd>
          </dl>
          <dl class="dlist-align">
            <dt>Discount:</dt>
            <dd class="text-end text-danger ms-auto">- $20.00</dd>
          </dl>
          <dl class="dlist-align">
            <dt>Total price:</dt>
            <dd class="text-end ms-auto">$252.97</dd>
          </dl>
          <dl class="dlist-align">
            <dt>Delivery:</dt>
            <dd class="text-end text-success ms-auto">Free</dd>
          </dl>
          <hr />
          <dl class="dlist-align">
            <dt>Total:</dt>
            <dd class="text-end ms-auto"><strong>$252.97</strong></dd>
          </dl>
          <div class="step-footer">
            <router-link :to="`${url}ecommerce/products`" data-direction="next" class="step-btn btn btn-primary d-grid">
              Continue shopping
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->
</template>

<script>
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import quantity from "@/shared/UI/quantity.vue";
export default {
  components: { Pageheader, quantity },
  data() {
    return {
      Shoppingcart: [
        {
          id: 1,
          product: `${import.meta.env.BASE_URL}images/pngs/14.png`,
          productName: "COLLEGE BAG",
          colorpicker: "Black color",
          qty: "Out of stock",
          qtytext: "danger",
          quantity: 2,
          price: "$26.00",
        },
        {
          id: 2,
          product: `${import.meta.env.BASE_URL}images/pngs/15.png`,
          productName: "PARTY WEAR SHOES",
          colorpicker: "Pick",
          qty: "In stock",
          qtytext: "success",
          quantity: 2,
          price: "$23.00",
        },
        {
          id: 3,
          product: `${import.meta.env.BASE_URL}images/pngs/19.png`,
          productName: "SAMSUNG A2",
          colorpicker: "Black color",
          qty: "Out of stock",
          qtytext: "danger",
          quantity: 2,
          price: "$56.00",
        },
        {
          id: 4,
          product: `${import.meta.env.BASE_URL}images/pngs/16.png`,
          productName: "FLOWER POT",
          colorpicker: " Green and Black color",
          qty: " in stock",
          qtytext: "success",
          quantity: 2,
          price: "$36.00",
        },
        {
          id: 5,
          product: `${import.meta.env.BASE_URL}images/pngs/17.png`,
          productName: "CHAIR",
          colorpicker: "Green and Black color",
          qty: "Out of stock",
          qtytext: "success",
          quantity: 2,
          price: "$24.00",
        },
        {
          id: 6,
          product: `${import.meta.env.BASE_URL}images/pngs/18.png`,
          productName: "WATCH",
          colorpicker: "Green and Black color",
          qty: "Out of stock",
          qtytext: "danger",
          quantity: 2,
          price: "$34.00",
        },
      ],
      url: import.meta.env.BASE_URL,
    };
  },
  methods: {
    itemremove(item){
      this.Shoppingcart = this.Shoppingcart.filter(cart => cart.id !== item.id)
    }
  },
};
</script>

<style scoped></style>
