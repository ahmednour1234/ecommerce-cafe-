<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <nav>
      <div class="imgh1">
        <img alt="Cafe logo" src="./assets/cafelogo.png" />
        <h1 class="h1">Nour Cafe</h1>
      </div>
      <div class="router">
        <router-link to="/">Home</router-link>
        <router-link to="/menudetails">Menu</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/resetbox">Cart</router-link>
      </div>
      <router-link to="/contact"> <button type="submit">Book Tabel</button></router-link>
    </nav>
  </div>
  <router-view />
</template>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #c5a676;
}

nav {
  background: #1e1e1e;

  img {
    width: 81px;
    height: 81px;
    border-radius: 10px;
    transform: rotate(-5deg);
  }

  h1 {
    width: 235px;
    height: 48px;
    font-family: "Inter";
    font-style: italic;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    color: #ebe5e5;
    transform: rotate(-5deg);
  }

  .imgh1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
  }

  a {
    width: 60px;
    height: 29px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    color: #ebe5e5;
    text-decoration: none;

    &.router-link-exact-active {
      color: #c5a676;
    }
  }

  .router {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 50px;
  }

  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    width: 203px;
    height: 38px;
    color: #ebe5e5;
    background: #c5a676;
    border-radius: 5px;
    border-color: #c5a676;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 280px;
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
}
</style>
