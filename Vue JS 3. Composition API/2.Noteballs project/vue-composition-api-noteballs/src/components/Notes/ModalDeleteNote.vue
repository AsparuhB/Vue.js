<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button class="button" @click="closeModal">Cancel</button>
          <button class="button is-danger" @click="deleteANote">Delete</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
// imports
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStoreNotes } from '@/stores/storeNotes';

// pinia store

const storeNotes = useStoreNotes();

// // props

const props = defineProps({
  //   modelValue: {
  //     type: Boolean,
  //     default: false,
  //   },
  noteId: {
    type: String,
    required: true,
  },
});

// //emits

// const emit = defineEmits(['update:modelValue']);

// defineModel() ?

const model = defineModel();

// close modal

const closeModal = () => {
  // using defineModel() with model.value
  model.value = false;
  // // using emit()
  // emit('update:modelValue', false)
};

// click outside to close the navbar
const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

//keyboard control
// we need to make the function on the event listener named, in order to remove it.
const handleKeyboard = (event) => {
  console.log('close It');
  if (event.key === 'Escape') closeModal();
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyboard);
});
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyboard);
});

// deleting a note

const deleteANote = () => {
  storeNotes.deleteNote(props.noteId);
};
</script>
