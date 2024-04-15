<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          v-model="noteModel"
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
import { ref } from 'vue';

// imports 

const textareaRef = ref(null)

// defineModel() -> This substitutes defineProps() and defineEmits

const noteModel = defineModel();

//focus 

const focusTextArea = () => {
textareaRef.value.focus()
}

defineExpose({
  focusTextArea
})
</script>
