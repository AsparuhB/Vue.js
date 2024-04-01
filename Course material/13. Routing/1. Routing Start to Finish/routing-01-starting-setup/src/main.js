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
      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        next(true)
      }
    }, // our-domain.com/users => UsersList
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  // controlling the scrolling behavior. Yes no ? Yes.
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      top: 0,
      left: 0,
    };
  },
});

// navigation guard
router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  // if (to.name === 'team-members') {
  //   next();
  // }
  // next({ name: 'team-members', params: { teamId: 't2' } });
  next();
});

router.afterEach(function(to, from) {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from)
});

const app = createApp(App);

app.use(router);

app.mount('#app');
