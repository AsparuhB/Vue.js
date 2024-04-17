import { watch } from "vue"


export function useWatchCharacters(valueToWatch) {
  // watch characters

watch(valueToWatch, (newValue) => {
  if (newValue.length >= 100) {
   confirm('Only 100 characters, gosh darnit!')
  }
 })
}