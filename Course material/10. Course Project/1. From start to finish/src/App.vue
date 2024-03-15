<template>
  <ul>

  </ul>
</template>

<script>
import LearningResource from './components/LearningResource.vue'

export default {
  components: {
    LearningResource,
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
