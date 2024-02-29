Vue.createApp({
  data() {
    return {
      userInput: '',
      isVisible: true,
      textInput: '',
    };
  },
  computed: {
    diffClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    buttonToggle() {
      this.isVisible = !this.isVisible;
      console.log(this.textInput);
    },
    // inlineStyle(event) {
    //   this.textInput = event.target.value
    //   return this.textInput
    // }
  },
}).mount('#assignment');
