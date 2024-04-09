<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals ? <input v-model="showDarkModals" type="checkbox" />
      </label>
    </div>
    <button @click="showModal = true">Show Modal</button>
    <teleport to=".modals-container">
      <component
        :is="showDarkModals ? ModalDark : Modal"
        v-model="showModal"
        title="My modal title (via prop)">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          vero rerum voluptate provident dolor voluptates sunt doloribus, quod,
          omnis porro nihil assumenda consequatur voluptas accusamus a magnam
          quisquam non ipsa?
        </p>
      </component>
    </teleport>
  </div>
</template>

<script setup>
/*
imports
*/

import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';



/* 
  modals
*/
const showDarkModals = ref(false);
const showModal = ref(false);
</script>

<!-- <script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal
  }
};
</script> -->
