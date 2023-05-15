<template>
  <img alt="cart0" class="cart0" src="@/assets/cart0.png" />
    <div class="cart__body" v-if="products.length > 0">
      <div class="alldetails5">
      <reset
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :img="product.img"
        :quantity="product.quantity"
      />
    </div>
   </div>
    <div class="message" v-if="products.length === 0">Cart is empty</div>
</template>
  <script>
import reset from "./reset.vue";
export default {
  data: function () {
    return {};
  },
  name: "Resetbox",
  components: {
    reset,
  },
  computed: {
    products() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.getTotal;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../reset/reset.scss";
</style>