<template>
  <div class="rectangel">    
    <img alt="product" class="product" :src="img" />
    <div class="alldetails">
      <div class="details">
        <h1>{{ name }}</h1>
        <h2>{{ price }}</h2>
        <p>4.9 Ratings + 2.4k Reviews + 1k Sold.</p>
      </div>
      <div class="extension">
        <h1>Choose Extensions:</h1>
        <div class="inputtype">
          <input type="checkbox" name="Milk" id="type" />Milk
          <input type="checkbox" name="Sugar Diet" id="type" />Sugar Diet
          <input type="checkbox" name="Carmela" id="type" />Carmela
          <input type="checkbox" name="White Chocolate" id="type" />White
          Chocolate
        </div>
      </div>
      <div class="size">
        <h1>Choose Size:</h1>

        <div class="inputchoose">
          <input type="button" value="M" />
          <input type="button" value="L" />
          <input type="button" value="XL" />
          <input type="button" value="XXL" />
        </div>
      </div>
    </div>
    <div class="order">
      <h1>Set Order</h1>
      <div class="imageorder">
        <img alt="product" class="image" :src="img" />
        <h2><span>Selected Size:</span> XL(Extra Large)</h2>
      </div>
      <h2><span>Extensions: </span> Milk + White Chocolate</h2>
      <div class="buyadd">
        <button  class="buy" value="Buy Now"
          :class="{
            'btn-danger': isInCart,
            'btn-primary': !isInCart
          }"
          @click="isInCart ? removeFromCart(id) : addToCart(id)"
        >        {{isInCart ? 'Remove' : 'Add to cart'}}
</button>
       <router-link to="/resetbox">   <button  class="add" value="Buy Now"
          @click="addToCart(id)"
        > Buy Now
</button></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  name: "Cart",
  props: {
    id: Number,
    name: String,
    price: String,
    img: String,
  },
  computed: {
    isInCart() {
      return this.$store.getters.isInCart(this.id);
    }
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", { id });
    },
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", { id });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./cart.scss";
</style>