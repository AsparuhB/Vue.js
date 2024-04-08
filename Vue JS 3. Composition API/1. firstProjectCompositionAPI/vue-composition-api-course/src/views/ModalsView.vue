<template>
  <div class="modals">
    <h1>Modals</h1>
    <button>Show Modal</button>
    <div v-if="showModal" class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint unde
        fuga officia atque! Natus dolore amet repellendus perferendis
        accusantium, enim delectus at eum vitae iste facere, nobis, itaque
        voluptatibus!
      </p>
      <button>Hide modal</button>
    </div>
  </div>
</template>

<script setup>
/*
imports
*/

import { ref } from 'vue';

/* 
  modals
*/

const showModal = ref(false);
</script>

<style>
.modal {
  background: beige;
  color: black;
  padding: 10px;
}
</style>
