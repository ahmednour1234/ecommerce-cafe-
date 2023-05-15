import Vuex from "vuex";
import productsData from "@/data/products";

export const getters = {
  countCartItems() {
    return this.cart.length;
  },
  getTotal: state => {
    return state.cart.reduce((acc, item) => {
      return acc - item.price;
    }, 0);
  },
  isInCart: (state) => (productId) => {
    return state.cart.findIndex((product) => product.id === productId) !== -1;
  },
};

export const mutations = {
  addToCart(state, payload) {
    const product = state.products.find((product) => product.id === payload.id);
    state.cart = [...state.cart, product];
  },
  addToCartlist(state, payload) {
    const product = state.products.find((product) => product.id === payload.id);
    state.cartlist = [...state.cartlist, product];
  },
  removeFromCart(state, payload) {
    state.cart = state.cart.filter((product) => product.id !== payload.id);
  },
  INCREMENT_ITEM_QUANTITY(state, updateitem) {
    updateitem.quantity++;
  },
  DECREMENT_ITEM_QUANTITY(state, updateitem) {
    updateitem.quantity--;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
};

const actions = {
  addToCart(context, payload) {
    context.commit("addToCart", payload);
  },
  addToCartlist(context, payload) {
    context.commit("addToCartlist", payload);
  },
  removeFromCart(context, payload) {
    context.commit("removeFromCart", payload);
  },
  incrementProductQuantity({ commit, state }, id) {
    const cartItem = state.cartItems.find(element => element.id === id);
    if (cartItem) {
      commit("INCREMENT_ITEM_QUANTITY", cartItem);
    }
  },
  decrementProductQuantity({ commit, state }, id) {
    const cartItem = state.cartItems.find(element => element.id === id);
    if (cartItem) {
      commit("DECREMENT_ITEM_QUANTITY", cartItem);
    }
  }
}

export default new Vuex.Store({
  state: {
    products: productsData,
    cart: [],
    cartlist: [],
    product: {},
  },
  getters,
  mutations,
  actions,
});
