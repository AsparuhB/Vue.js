<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteBalls"
      v-autofocus
      class="input"
      type="text"
      placeholder="Do you love noteballs? Yes, no ? Yes." />
  </div>
</template>

<script setup>
//imports

import { vAutofocus } from '@/directives/vAutofocus';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters';
import { ref } from 'vue';

// store

const storeNotes = useStoreNotes();

// love Noteballs

const loveNoteBalls = ref('');

// watch characters

useWatchCharacters(loveNoteBalls, 50);
</script>
