Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');

// const addButtonEL = document.querySelector('button');
// const listEl = document.querySelector('ul');
// const inputEl = document.querySelector('input');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.append(listItemEl);
//   inputEl.value = '';
// }

// addButtonEL.addEventListener('click', addGoal);
