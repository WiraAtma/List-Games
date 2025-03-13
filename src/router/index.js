import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import GameDetailView from '@/views/GameDetailView.vue'
import NotFound from '@/views/NotFound.vue'
import GameCategory from '@/views/GameCategory.vue'
import GameDashboard from '@/views/GameDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: 'GAMEGRATIS | Dashboard'},
    },
    {
      path: '/games',
      name: 'games',
      component: GameDashboard,
      meta: {title: 'GAMEGRATIS | Games'},
    },
    {
      path: '/games/search',
      name: 'search',
      component: SearchView,
      meta: {title: 'GAMEGRATIS | Cari Games'},
    },
    {
      path: '/games/:id',
      name: 'detail',
      component: GameDetailView,
      meta: {title: 'GAMEGRATIS | Detail Game'},
    },
    {
      path: '/games/category/:category',
      name: 'category',
      component: GameCategory,
      meta: {title: 'GAMEGRATIS | Kategori Game'},
    },
    { path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: {title: 'GAMEGRATIS | Error Page'},
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title';
});

export default router
