const addButtonEL = document.querySelector('button');
const listEl = document.querySelector('ul');
const inputEl = document.querySelector('input');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue

  listEl.append(listItemEl)
}


addButtonEL.addEventListener('click',addGoal)