<template>
    <div class="alldetails">
  <div class="rectangel">
    <img alt="product" class="product" :src="img" />
    <div class="alldetails">
      <div class="details">
        <h1>{{ name }}</h1>
        <h2>Price:{{ price }}....$</h2>
        <p>4.9 Ratings + 2.4k Reviews + 1k Sold.</p>
        <button class="btn  btn-xs" @click="removeFromCart(id)">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
    <div class="quantity">
      <button class="btn  btn-xs"  @click="incrementProductQuantity(id)"><i class="fa fa-plus"></i></button>
      <quantity>{{ quantity }}</quantity>
      <button class="btn  btn-xs"   @click="decrementProductQuantity(id)"
                ><i class="fa fa-minus"></i></button>
      <price>{{ price }}..$</price>
    </div>
    </div>
  </div>
  <div class="all2">
    <div class="rectangel2">
      <div class="alldetails2">
        <h1>Cart Summary</h1>
        <div class="deliverprice">
          <div class="deliver">
            <p>Deliver Charger</p>
            <p>Sub Total</p>
          </div>
          <div class="price">
            <h2>10$</h2>
            <h2>{{ price }}$</h2>
          </div>
        </div>
        <div class="total">
          <h2>Total</h2>
          <h2>{{ total }}$</h2>
        </div>
      </div>
    </div>
    <router-link to="/payment"><input type="submit" class="pay" value="Proceed To Pay" /></router-link>
    <router-link to="/menudetails">  <input type="submit" class="continue" value="Continue Shopping" /></router-link>
  </div>
</template>
<script>
export default {
  name: "reset",
  props: {
    id: Number,
    name: String,
    price: String,
    img: String,
    quantity: Number,
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", { id });
    },
    incrementProductQuantity(id) {
      this.$store.dispatch("incrementProductQuantity", id);
    },
    decrementProductQuantity(id) {
      this.$store.dispatch("decrementProductQuantity", id);
    },
  },
  computed: {
    
    products() {
      return this.$store.state.products;
    },
    total() {
      return this.$store.getters.getTotal;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./reset.scss";
</style>