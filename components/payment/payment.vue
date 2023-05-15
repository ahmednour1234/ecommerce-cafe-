<template>
  <img alt="menu" class="payment" src="@/assets/payment.jpg" />
  <div class="pages">
    <div class="page1"><span>1</span></div>
    <div class="page2"><span>2</span></div>
    <div class="page3"><span>3</span></div>
  </div>
  <div class="contactinformation">
    <h1>Payment Details</h1>
    <div class="data">
      <div class="names">
        <input
          type="text"
          v-model="ncurd"
          placeholder="Number On Curd"
          required
        />
        <input type="text" v-model="curdn" placeholder="Number Curd" required />
      </div>
      <div class="expiry">
        <input
          type="text"
          v-model="expiry"
          placeholder="Expiry MM/YY"
          required
        />
        <input type="text" v-model="CVC" placeholder="CVC 00" required />
      </div>
    </div>
    <router-link to="/delivery">
      <input type="submit" name="Pay" value="Pay Now" class="pay" />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "payment",
};
</script>
<style lang="scss" scoped>
@import "./payment.scss";
</style>
  