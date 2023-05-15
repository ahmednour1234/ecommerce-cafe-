<template>
    <img alt="menu" class="payment" src="@/assets/payment.jpg" />
    <div class="pages">
        <div class="page1"><span>1</span></div>
        <div class="page2"><span>2</span></div>
        <div class="page3"><span>3</span></div>
    </div>
    <div class="contactinformation">
        <h1>Your Details</h1>
        <div class="data">
            <div class="names">
                <input type="text" v-model="name" placeholder="Name" required />
                <input type="email" v-model="email" placeholder="E-mail" required />
            </div>
            <div class="expiry">
                <input type="text" v-model="address" placeholder="Address" required />
                <input type="Phone" v-model="phone" placeholder="Phone" required />
            </div>
        </div>
        <router-link to="/">
            <input type="submit" name="Pay" value="Pay Now" class="pay" />
        </router-link>
    </div>
</template>
<script>
export default {
    name: "Delivery",
};
</script>
<style lang="scss" scoped>
@import "./delivery.scss";
</style>
    