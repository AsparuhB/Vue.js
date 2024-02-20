const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: '',
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
  },
});

app.mount('#events');
