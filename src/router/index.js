import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Academic from '../views/Academic.vue';
import Education from '../views/Education.vue';
import Skil from '../views/Skil.vue';
import Training from '../views/Training.vue';
import Work from '../views/Work.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Academic',
      name: 'Academic',
      component: Academic
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    },
    {
      path: '/Skil',
      name: 'Skil',
      component: Skil
    },
    {
      path: '/Training',
      name: 'Training',
      component: Training
    },
    {
      path: '/Work',
      name: 'Work',
      component: Work
    },
  ]
})

export default router
