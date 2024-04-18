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
        @click.prevent="modals.deleteNote = true">
        Delete
      </a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id"/>
  </div>
</template>

<script setup>
//imports
import { computed, reactive } from 'vue';
import ModalDeleteNote from './ModalDeleteNote.vue';
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

//modals

const modals = reactive({
  deleteNote: false,
});
</script>
