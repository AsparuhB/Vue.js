const app = Vue.createApp({
  data() {
    return {
      isVisible: true,
      userInput: '',
      user1: false,
      user2: false,
    };
  },
  computed: {
    colorOutput() {
      if (this.userInput === 'user1') {
        this.user1 = true;
      } else if (this.userInput === "user2") {
        this.user2 = true
      }
    },
  },
});

app.mount('#assignment');
