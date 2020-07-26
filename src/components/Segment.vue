<template>
  <div class="page-segment">
    <div class="segment-title">{{ title }}</div>
    <div class="segment-indicators">
      <div class="indicator" v-for="product in products" :key="product.name"></div>
    </div>
    <div class="segment-content">
      <product
        v-for="product in products"
        :key="product.title"
        v-bind:product-thumbnail="product.thumbnail"
        v-bind:product-name="product.name"
        v-bind:product-price="product.price"
      />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  name: "segment",
  components: { Product },
  props: {
    title: String,
    products: Array
  },
};
</script>

<style scoped>
  .page-segment {
    text-align: center;
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    padding-top: 35px;
    padding-bottom: 35px;
  }

  .page-segment:first-child {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  .page-segment:last-child {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .segment-title {
    letter-spacing: 3px;
    font-size: 0.75rem;
    font-weight: bold;
  }

  .segment-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .segment-indicators {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .indicator {
    width: 8px;
    height: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    margin: 5px;
  }

  .indicator-active {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>