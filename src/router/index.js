import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Team from '@/views/Team.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/team/', name: 'team', component: Team },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
