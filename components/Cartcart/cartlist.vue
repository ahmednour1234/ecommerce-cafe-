<template>
    <img alt="cart0" class="cart0" src="@/assets/cart0.png" />
    <cart
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :img="product.img"
      />
</template>
<script>
import Cart from "./cart.vue";
export default {
    data: function () {
    return {};
  },
    name: "cartlist",
    components: {
        Cart,
    },
    computed: {
        products() {
            return this.$store.state.cartlist;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "./cart.scss";
</style>