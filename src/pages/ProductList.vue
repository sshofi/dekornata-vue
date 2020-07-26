<template>
  <div id="product-list">
    <div class="product">
      <div>
        <img src="https://source.unsplash.com/random/350x450"/>
      </div>
      <div>Description</div>
    </div>
    <segment
      title="YOU MIGHT ALSO LIKE"
      v-bind:products="products"/>
    <segment
      title="RECENTLY VIEWED"
      v-bind:products="products"/>
  </div>
</template>

<style scoped>
  .product {
    padding: 20px 40px 20px 40px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
</style>

<script>
  import Segment from '@/components/Segment.vue'
  export default {
    name: 'product-list',
    components: {
      Segment
    },
    data() {
      return {
        products: [
          {
            name: "PRODUCT NAME",
            price: "IDR 55,000",
            thumbnail: "https://source.unsplash.com/random/160x160"
          },
          {
            name: "PRODUCT NAME",
            price: "IDR 55,000",
            thumbnail: "https://source.unsplash.com/random/160x160"
          },
          {
            name: "PRODUCT NAME",
            price: "IDR 55,000",
            thumbnail: "https://source.unsplash.com/random/160x160"
          }
        ]
      }
    }
  }
</script>