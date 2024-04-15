<template>
  <div class="card mb-4">
    <div class="card-content">
      {{ note.content }}
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink href="#" :to="`/editNote/${note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="storeNotes.deleteNote(note.id)">
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
//imports
import { computed } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';

// store //

const storeNotes = useStoreNotes();

// Props

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});


//character length computed

const characterLength = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? 'characters' : 'character';
  return `${length} ${description}`;
});
</script>
