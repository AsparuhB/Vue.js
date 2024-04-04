<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li>
        <RouterLink to="/postDetail/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id3">Post 3</RouterLink>
      </li>

    </ul>
    <textarea v-autofocus />
  </div>
</template>

<script setup>
/* 
Imports
*/

import { vAutofocus } from '../directives/vAutofocus.js'// importing a global directive

</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>