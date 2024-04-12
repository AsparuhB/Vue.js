<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNewNote"
            :disabled="!newNote"
            class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote" />
  </div>
</template>

<script setup>
//imports
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
//notes

const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quaera teaque suscipit reiciendis, obcaecati animi, hic, maiores sapiente aliquid rem dolorum provident soluta. Molestiae consequuntur earum libero dolor, nostrum eligendi?',
  },
  {
    id: 'id2',
    content: 'This is a shorter note! Woo!',
  },
]);

const addNewNote = () => {
  const note = {
    id: new Date().toISOString(),
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = '';

  newNoteRef.value.focus();
};

// delete note

const deleteNote = (idToDelete) => {
  console.log('deleting note ' + idToDelete);
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>
