import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";
import Homemain from "../components/Home/Homemain.vue";
import Menu from "../components/menu/Menu.vue";
import menudetails from "../components/menu/menudetails.vue";
import Cart from "../components/Cartcart/cart.vue";
import cartlist from "../components/Cartcart/cartlist.vue";
import Reset from "../components/reset/reset.vue";
import Resetbox from "../components/reset/resetbox.vue";
import contact from "../components/contact/contact.vue";
import payment from "../components/payment/payment.vue";
import Delivery from "../components/Delivery/delivery.vue";
const routes = [
  {
    path: "/",
    name: "Homemain",
    component: Homemain,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/menudetails",
    name: "menudetails",
    component: menudetails,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/cartlist/:id",
    name: "cartlist",
    component: cartlist,
  },
  {
    path: "/reset",
    name: "reset",
    component: Reset,
  },
  {
    path: "/resetbox",
    name: "resetbox",
    component: Resetbox,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/payment",
    name: "payment",
    component:payment,
  },
  {
    path: "/delivery",
    name: "delivery",
    component:Delivery,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
