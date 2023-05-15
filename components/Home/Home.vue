<template>
  <div class="cardss">
      <div class="cardbest">
        <img alt="service" class="imgbest" :src="img" />
        <div class="pbest">
          <router-link  @click="addToCartlist(id)" :to="{ name: 'cartlist', params: {  id  } }">
            <span>{{ name }}..{{ price }}</span></router-link
          >
          <p class="pspan">Coffe+Milk+Sugar.</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Home",
  props: {
    id: Number,
    name: String,
    price: String,
    img: String,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCartlist(id) {
      this.$store.dispatch("addToCartlist", { id });
    }
  },
};
</script>
<style lang="scss" scoped>
@import "./Home.scss";
</style>
