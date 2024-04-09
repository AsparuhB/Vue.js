<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <teleport to=".modals-container">
      <Modal v-model="showModal" title="My modal title (via prop)">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          vero rerum voluptate provident dolor voluptates sunt doloribus, quod,
          omnis porro nihil assumenda consequatur voluptas accusamus a magnam
          quisquam non ipsa?
        </p>
      </Modal>
    </teleport>
  </div>
</template>

<script setup>
/*
imports
*/

import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

/* 
  modals
*/

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
