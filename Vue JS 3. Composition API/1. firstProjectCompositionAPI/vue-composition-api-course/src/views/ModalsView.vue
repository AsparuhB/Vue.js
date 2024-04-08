<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <teleport to=".modals-container">
          <div v-if="showModal" class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint unde
        fuga officia atque! Natus dolore amet repellendus perferendis
        accusantium, enim delectus at eum vitae iste facere, nobis, itaque
        voluptatibus!
      </p>
      <button @click="showModal = false">Hide modal</button>
    </div>
    </teleport>

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
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
