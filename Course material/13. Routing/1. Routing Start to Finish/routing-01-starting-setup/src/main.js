import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ], // teams/t1
    }, // our-domain.com/teams => TeamsList
    {
      name: 'users',
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
    }, // our-domain.com/users => UsersList
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  // controlling the scrolling behavior. Yes no ? Yes.
  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition
    }
    return {
      top: 0,
      left: 0,
    };
  },
});

// router.beforeEach()

const app = createApp(App);

app.use(router);

app.mount('#app');
