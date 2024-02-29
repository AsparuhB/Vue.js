const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet';
      } else if (this.number === 37) {
        return this.number;
      } else if (this.number > 37) {
        return 'Too much!';
      }
    },
  },
  methods: {
    addNumber(num) {
      this.number += num;
    },
  },
  watch: {
    result() {
      console.log("Watcher executing...")
      const that = this;
      setTimeout(function() {
        that.number = 0;
      }, 5000);
    },
  },
});

app.mount('#assignment');
