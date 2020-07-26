<template>
  <div class="footer">

    <div class="contact">
      <img width="150" src="@/assets/images/logo dekornata side-01.png"/>
      <div>
        <p class="phone-number">P: 08118403306</p>
        <p class="email">E: hello@dekornata.com</p>
      </div>
      <div>
        <p class="text-primary cs-title">CUSTOMER SERVICE HOURS:</p>
        <p class="open-closed">9a.m - 6p.m</p>
      </div>
      <div>
        <p class="text-primary connect-with-us">CONNECT WITH US</p>
        <div class="social-media">
          <div>FB</div>
          <div>FB</div>
          <div>FB</div>
          <div>FB</div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="title text-primary">SHOP</h3>
      <div class="menu" v-for="shop in shops" :key="shop.title">
        {{ shop.title }}
      </div>
    </div>
    
    <div>
      <h3 class="title text-primary">INFO</h3>
      <div class="menu" v-for="info in informations" :key="info.title">
        {{ info.title }}
      </div>
    </div>
  </div>
</template>

<script>
  import footerData from '@/assets/data/footer.json'

  export default {
    name: 'page-footer',
    components: {
    },
    data() {
      return {
        shops: footerData.shops,
        informations: footerData.informations
      };
    }
  }
</script>

<style scoped>
  .footer {
    background-color: rgba(255, 0, 0, 0.01);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 25px;
  }

  .contact {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
  }

  .contact > div {
    padding-left: 14px;
  }

  .title {
    font-weight: bold;
    font-size: 1rem;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .menu {
    letter-spacing: 1.1px;
  }

  .phone-number, .email {
    margin: 0;
    letter-spacing: 2px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .cs-title {
    margin-top: 24px;
    margin-bottom: 0;
    letter-spacing: 1.5px;
    font-size: 0.85rem;
  }

  .open-closed {
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  .connect-with-us {
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: 1.5px;
  }

  .social-media {
    display: grid;
    width: 120px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
</style>