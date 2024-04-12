// stores/counter.js
import { defineStore } from 'pinia'

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
      ]
    }
  },
})