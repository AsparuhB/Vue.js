const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    showAlert() {
      alert("Showing alert...")
    }
  }
});

app.mount('#assignment');
