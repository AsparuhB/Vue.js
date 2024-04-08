import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// importing the components like this as opposed to component: () => import('../views/PostsView.vue') means that they are loaded immediately, when the page is loads.
import ModalsView from '../views/ModalsView.vue';
import PostsView from '../views/PostsView.vue';
import PostDetailView from '../views/PostDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts',
      name: 'posts',
      // component: () => import('../views/PostsView.vue') // Lazy loading of the imports
      component: ModalsView,
    },
    {
      path: '/modals',
      name: 'modals',
      // component: () => import('../views/ModalsView.vue') // Lazy loading of the imports
      component: PostsView,
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      // component: () => import('../views/PostDetailView.vue') // Lazy loading of the imports
      component: PostDetailView,
    },
  ],
});

export default router;
