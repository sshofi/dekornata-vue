<template>
  <div id="product">
    <img v-bind:src="productThumbnail"/>
    <h3 class="product-name">{{ productName }}</h3>
    <p class="product-price text-primary">{{ productPrice }}</p>
  </div>
</template>

<script>
  export default {
    name: 'product',
    components: {
    },
    props: {
        productName: String,
        productPrice: String,
        productThumbnail: String
    }
  }
</script>

<style scoped>
#product {
    text-align: center;
    margin: 20px;
}

.product-name, .product-price {
    margin: 0;
    font-size: 1rem;
    letter-spacing: 1.3px;
    font-weight: normal;
}
</style>