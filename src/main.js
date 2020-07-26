import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ProductList from '@/pages/ProductList.vue'
import ProductDetails from '@/pages/ProductDetails.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const routes = [
  { 
    path: '/', 
    component: ProductList , 
  },
  { path: '/:id', 
    component: ProductDetails }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')