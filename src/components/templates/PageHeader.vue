<template>
  <div class="header">
    <div class="menu">menu</div>
    <div class="menu text-primary">ABOUT</div>
    <div class="menu text-primary">SHOP</div>
    <div class="menu logo-container">
      <img class="logo" src="@/assets/images/Logo Dekor Nata.png"/>
    </div>
    <div class="menu text-primary">LOGIN</div>
    <div class="menu text-primary">WISHLIST</div>
    <div class="menu text-primary">CART</div>
  </div>
</template>

<script>
  export default {
    name: 'page-header',
    components: {
    },
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    position: fixed;
    top: 0;
    background-color: white;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-container {
    grid-column: span 2;
  }

  .logo {
    width: 100px;
    height: 100px;
  }
</style>