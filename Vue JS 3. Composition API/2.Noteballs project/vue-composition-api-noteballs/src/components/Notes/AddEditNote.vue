<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="props.label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model.trim="noteModel"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef" />
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

const textareaRef = ref(null);

// defineModel() -> This substitutes defineProps() and defineEmits

const noteModel = defineModel();

// props

const props = defineProps({
  bgColor: {
    type: String,
    default: 'success',
  },
  placeholder: {
    type: String,
    default: 'Type something...',
  },
  label: {
    type: String,
  },
});

//focus textarea

const focusTextArea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextArea,
});
</script>
