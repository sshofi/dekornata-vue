<template>
  <div class="app">
    <page-header/>
    <router-view></router-view>
    <page-footer/>
    <div class="email-btn">
      O
    </div>
    <div class="go-to-top-btn">
      O
    </div>
  </div>
</template>

<script>
  import PageHeader from '@/components/templates/PageHeader.vue';
  import PageFooter from '@/components/templates/PageFooter.vue';
  export default {
    name: 'app',
    components: {
      PageHeader,
      PageFooter
    },
  }
</script>

<style scoped>
  .app {
    padding-top: 100px;
  }

  .email-btn, .go-to-top-btn {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    margin: 10px;
    border-radius: 100%;
    border: 1px solid gold;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .go-to-top-btn {
    right: 0;
  }
</style>