<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          v-model.trim="noteModel"
          class="textarea"
          placeholder="Add a new note" 
          ref="textareaRef"/>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
// imports 

import { ref } from 'vue';

// refs

const textareaRef = ref(null)

// defineModel() -> This substitutes defineProps() and defineEmits

const noteModel = defineModel();

//focus textarea

const focusTextArea = () => {
textareaRef.value.focus()
}

defineExpose({
  focusTextArea
})
</script>
