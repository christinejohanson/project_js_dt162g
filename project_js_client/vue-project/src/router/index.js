import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//inkluderar alla views
import AboutView from '../views/AboutView.vue'
import FoxxesView from '../views/FoxxesView.vue'
import FoxxesEditView from '../views/FoxxesEditView.vue'
import AddfoxxView from '../views/AddfoxxView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/foxxes',
      name: 'foxxes',
      component: FoxxesView
    },
    {
      path: '/foxxesedit/:id',
      name: 'foxxesedit',
      component: FoxxesEditView
    },
    {
      path: '/addfoxx',
      name: 'add foxx',
      component: AddfoxxView
    }
  ]
})

export default router
