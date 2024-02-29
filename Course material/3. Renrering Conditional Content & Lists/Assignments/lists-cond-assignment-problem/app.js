const app = Vue.createApp({
  data() {
    return {
      isClicked: true,
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
    showList() {
      this.isClicked = !this.isClicked
    }
  },
});

app.mount('#assignment');
