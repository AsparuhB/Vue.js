const app = Vue.createApp({
  data() {
    return {
      isVisible: true,
      userInput: '',
      inlineInput: '',
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible
      };
    },
  },
  methods: {
    buttonClicked() {
      this.isVisible = !this.isVisible;
    },
    background(event) {
      inlineInput = event.target.value;
      return this.inlineInput;
    },
  },
});

app.mount('#assignment');
