<template>
  <div id="product-list">
    <div class="product">
      <div class="product-images">
        <img src="https://source.unsplash.com/random/400x450"/>
        <div class="image-thumbnails">
          <img class="thumbnail" src="https://source.unsplash.com/random/90x90"/>
          <img class="thumbnail" src="https://source.unsplash.com/random/90x90"/>
          <img class="thumbnail" src="https://source.unsplash.com/random/90x90"/>
          <img class="thumbnail" src="https://source.unsplash.com/random/90x90"/>
        </div>
      </div>
      <div>
        <h1 class="product-name">PRODUCT NAME</h1>
        <div class="ratings">
          <div>Stars</div>
          <p class="text-primary reviews-count">(231 customer reviews)</p>
        </div>
        <div class="price">
          <div><del class="text-primary">IDR 55,000</del></div>
          <div class="real-price">IDR 50,000</div>
        </div>
        <div class="qty"></div>
        <div class="variant">
          <div>VARIANT</div>
          <div class="variants-icon"></div>
        </div>
        <div>
          <button>ADD TO CART</button>
        </div>
        <div>
          <h3 class="description-title">PRODUCT DESCRIPTIONS</h3>
          <p>Melinda console table merupakan sebuah 
          meja konsul yang dapat digunakan sebagai 
          tempat untuk meletakan dekorasi rumah. 
          Meja dengan desain minimalis dan kombinasi 
          warna yang elegan akan menyempurnakan 
          tata ruangan. Lorem ipsum dolor sit amet, 
          consectetuer adipiscing elit, sed diam 
          nonummy nibh euismod tincidunt ut laoreet 
          dolore magna aliquam erat volutpat. Ut wisi 
          enim ad minim veniam, quis nostrud exerci 
          tation ullamcorper suscipit lobortis aliquip.</p>
        </div>
        <div>
          add to whitelist
        </div>
        <hr/>
        <div>
          <div>SHARE</div>
        </div>
      </div>
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
  .product-name {
    margin: 0;
    font-weight: 400;
    letter-spacing: 2.5px;
    font-size: 1.5rem;
  }

  .ratings {
    display: flex;
    align-items: center;
  }

  .price {
    display: flex;
    align-items: center;
  }

  .real-price {
    margin-left: 10px;
  }

  .reviews-count {
    font-size: 0.75rem;
    margin: 0;
  }

  .product {
    padding: 20px 40px 20px 40px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product-images {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .image-thumbnails {
    margin-top: 10px;
    width: 410px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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