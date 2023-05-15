<template>
  <img alt="Cafe 0" class="back0" src="@/assets/back0.png" />
  <img alt="Cafe 1" class="back1" src="@/assets/back1.png" />
  <img alt="Cafe 2" class="back2" src="@/assets/back2.png" />
  <img alt="Cafe 3" class="back3" src="@/assets/back3.png" />
  <div class="first">
    <h1>Welcome The Caffen</h1>
    <h2>THE PARIS CAFFE HOUSE.</h2>
    <div class="buttons">
      <button class="button1" type="submit">Discover More</button>
      <button class="button2" type="submit">Discover More</button>
    </div>
  </div>
  <div class="about">
    <h3>About Us</h3>
    <h4>Organic $ Fresh Coffe Provider Center</h4>
    <p class="pabout">
      Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do labore et
      dolore magna ali ea commodo consequa
    </p>
  </div>
  <div class="service">
    <h3>What We serve</h3>
    <h4>Our Service</h4>
    <div class="cardservice">
      <div class="service1">
        <img alt="service" class="imageservice1" src="@/assets/service.png" />
        <p class="pservice">Resturant menu</p>
      </div>
      <div class="service2">
        <img alt="service" class="imageservice2" src="@/assets/service.png" />
        <p class="pservice">Coffe menu</p>
      </div>
      <div class="service3">
        <img alt="service" class="imageservice3" src="@/assets/service.png" />
        <p class="pservice">Food Services</p>
      </div>
    </div>
  </div>
  <div class="best">
    <h3>Choose Best Cafe</h3>
    <h4>Popular Coffee Menu</h4>
    <div v-for="products in products" class="cardbest" :key="products.id"
    :id="products.id"
        :name="products.name"
        :price="products.price"
        :img="products.img"
    >
    <Home v-bind="products" class="cardbest" />
    </div>
  </div>
</template>
    <script>
import Home from "./Home.vue";
export default {
  methods: {
    cartlist() {
      this.$router.push({
        name: "cartlist",
        params: { id },
      })
    }
  },
  name: "Homemain",
  components: {
    Home,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
  <style lang="scss" scoped>
@import "./Home.scss";
</style>