import { createApp } from 'vue'
import App from './App.vue'
import Home from './view/Home.vue'
import ProductPage from './view/ProductPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.css'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductPage },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App);

app.use(router)
app.mount('#app')
