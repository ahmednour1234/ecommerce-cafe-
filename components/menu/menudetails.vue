<template>
    <div class="backmenu">
        <img alt="menu0" class="menu0" src="@/assets/menu0.png" />
        <img alt="menu0" class="menu0" src="@/assets/menu00.png" />
    </div>
    <div class="h1line">
        <h1>Category Menu</h1>
        <div class="line"></div>
    </div>
    <div class="cardsmenu">
        <div class="menu1">
            <img alt="menu" class="menu" src="@/assets/menu.png" />
            <router-link to="/menu">Drinks</router-link>
        </div>
        <div class="menu1">
            <img alt="menu" class="menu" src="@/assets/menu1.png" />
            <router-link to="/menu">Desserts</router-link>
        </div>
        <div class="menu1">
            <img alt="menu" class="menu" src="@/assets/menu2.png" />
            <router-link to="/menu">Macarons</router-link>
        </div>
        <div class="menu1">
            <img alt="menu" class="menu" src="@/assets/menu3.png" />
            <router-link to="/menu">Sandwich</router-link>
        </div>
    </div>
    <div class="menudetails">
    <h1>Menu Details</h1>
    <div class="line"></div>
    <div v-for="products in products" :key="products.id" :id="products.id" :name="products.name" :price="products.price"
        :img="products.img" >
    <Menu v-bind="products" />
    </div>
    </div>
</template>
<script>
import Menu from "./Menu.vue";
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
        Menu,
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
};
</script>
<style lang="scss" scoped>
@import "./Menu.scss";
</style>
