const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        boxASelected = true;
        console.log(boxASelected);
        console.log("Box A");
      } else if (box === 'B') {
        boxBSelected = true;
        console.log("Box b");

      } else if (box === 'C') {
        boxCSelected = true;
        console.log("Box c");

      }
    },
  },
});

app.mount('#styling');
