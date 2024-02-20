const app = Vue.createApp({
  data() {
    return {
      input: '',
      confirmedInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('Showing alert...');
    },
    showInput(event) {
      this.input = event.target.value;
    },
    showConfirmedInput() {
      this.confirmedInput = this.input;
    },
  },
});

app.mount('#assignment');
