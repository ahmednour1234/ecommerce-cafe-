<template>
  <img alt="contact0" class="contact0" src="@/assets/contact.png" />
  <div class="socialcontact">
    <div class="contactinfo">
      <h1>Contact Info</h1>
      <div class="info">
        <i class="fas fa-phone"></i>
        <a href="http://wa.me/+0201288817121" target="_blank">+0201288817121</a>
      </div>
      <div class="info">
        <i class="fa fa-g"></i>
        <a href="mailto:ahmednour5999@gmail.com" target="_blank"
          >ahmednour5999@gmail.com</a
        >
      </div>
      <div class="info">
        <i class="fa fa-home"></i>
        <a href="" target="_blank">Alexandria,Sidibeshr</a>
      </div>
    </div>
    <div class="social">
      <h1>Social Media</h1>
      <div class="icons">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
  </div>
  <div class="send">
    <h1>Send Your Message</h1>
    <div class="nameemail">
      <input
        type="text"
        name="Enter Your name"
        placeholder="Enter Your Name"
        v-model="name"
        required
      />
      <input
        type="email"
        name="Enter Your Email"
        placeholder="Enter Your Email"
        v-model="email"
        required
      />
    </div>
    <input
      type="text"
      name="Enter Your message"
      placeholder="Enter Your Message"
      v-model="message"
      class="message"
      required
    />
    <router-link to="/">
      <input type="button" name="submit" value="Submit" class="contact" />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
@import "./contact.scss";
</style>
