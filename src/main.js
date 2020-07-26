import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import ProductList from '@/pages/ProductList.vue'
import ProductDetail from '@/pages/ProductDetail.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: ProductList
  },
  {
    path: '/:id',
    component: ProductDetail
  }
];

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
