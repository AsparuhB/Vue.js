<template>
  <div class="card mb-4">
    <div class="card-content">
      {{ note.content }}
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }} {{}}</small>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
//imports
import { computed } from 'vue';
// Props

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

//character length computed

const characterLength = computed(() => {
  const length = props.note.content.length
  const description =
    length > 1 ? 'characters' : 'character';
  return `${ length } ${ description }`;
});
</script>
