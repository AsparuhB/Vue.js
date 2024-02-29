const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.userName = event.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.userName;
    },
  },
});

app.mount('#events');
