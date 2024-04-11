// Making and exporting a global directive.
export const vAutofocus = {
  mounted: (el) => {
    el.focus();
  },
};