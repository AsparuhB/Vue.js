// stores/counter.js
import { defineStore } from 'pinia';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        // {
        //   id: 'id1',
        //   content:
        //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quaera teaque suscipit reiciendis, obcaecati animi, hic, maiores sapiente aliquid rem dolorum provident soluta. Molestiae consequuntur earum libero dolor, nostrum eligendi?',
        // },
        // {
        //   id: 'id2',
        //   content: 'This is a shorter note! Woo!',
        // },
      ],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(collection(db, 'notes'), (querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
          };

          notes.push(note);
        });
        this.notes = notes;
      });
    },

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
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
