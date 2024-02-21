const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    output() {
      if (this.result < 37) {
        return 'Not there yet';
      } else if ((this.result === 37)) {
        return this.result;
      } else if (this.result > 37) {
        return 'Too much!';
      }
    },
  },
  methods: {
    addNumber(num) {
      this.result += num;
    },
  },
  watch: {
    result(valueOld, valueNew) {
      if (valueNew !== valueOld) {
        const that = this;
        setTimeout(function () {
          that.result = 0;
        }, 5000);
      }
    },
  },
});

app.mount('#assignment');
