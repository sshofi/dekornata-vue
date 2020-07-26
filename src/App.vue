<template>
  <div id="app">
    <page-header/>
    <router-view></router-view>
    <page-footer/>
  </div>
</template>

<script>
import PageHeader from '@/components/templates/PageHeader.vue'
import PageFooter from '@/components/templates/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  },
}
</script>

<style>
</style>
