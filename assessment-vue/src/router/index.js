import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '../views/ProductCatalog.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
    {
      path: '/',
      name: 'Catalog',
      component: ProductCatalog,
    },
    {
      path: '/Product/:productName',
      name: 'Product',
      component: ProductDetails,
      props: true,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
