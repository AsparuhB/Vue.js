// stores/counter.js
import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quaera teaque suscipit reiciendis, obcaecati animi, hic, maiores sapiente aliquid rem dolorum provident soluta. Molestiae consequuntur earum libero dolor, nostrum eligendi?',
        },
        {
          id: 'id2',
          content: 'This is a shorter note! Woo!',
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      const note = {
        id: new Date().toISOString(),
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      const index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
  },
});
