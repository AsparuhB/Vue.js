<template>
  <div class="notes">
    <AddEditNote
      label="Edit Note"
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit Note">
      <template #buttons>
        <button @click="$router.push('/')" class="button is-link is-light">Cancel</button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent">
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

//note

const noteContent = ref('');
</script>
