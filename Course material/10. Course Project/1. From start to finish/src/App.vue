<template>
  <ul>
    <ListItems v-for="recourse in storedRecourses" :key="recourse.id">
      <template #heading> {{ recourse.title }}</template>
      <template #desc> {{ recourse.description }}</template>
      <template #link><a :href="recourse.link">{{ recourse.link }}</a></template>>
    </ListItems>

  </ul>
</template>

<script>
import ListItems from './components/ListItems.vue'

export default {
  components: {
    ListItems,
  },
  data() {
    return {
      storedRecourses: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
