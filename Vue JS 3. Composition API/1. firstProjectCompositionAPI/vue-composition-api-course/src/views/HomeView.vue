<template>
  <div class="home">
    <h2 ref="AppTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>
    <p>{{ helloThere }}.</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" v-autofocus type="text" />
    </div>
  </div>
</template>

<script setup>
/* 
imports
*/
import { reactive, computed, watch } from 'vue';
import { vAutofocus } from '../directives/vAutofocus.js'; // importing a global directive

/* 
App title
*/
const appTitle = 'My Amazing Counter App';

/* 
 counter 
 */

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

watch(
  () => counterData.count,
  (newCount) => {
    if (newCount === 20) {
      alert('Way to go! You made it to 20!!');
    }
  }
);

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even';
  return 'odd';
});

const increaseCounter = (amount, event) => {
  counterData.count += amount;
};

const decreaseCounter = (amount) => {
  counterData.count -= amount;
};

const helloThere = computed(() => {
  if (counterData.count === 9) return 'Hello there';
});
</script>

<!--

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    myComputerProperty() {
      //perform logic based on a data property
      return 'my result';
    },
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount === 20) alert('asdsds');
    },
  },
  mounted() {
    console.log('mounted')
  },
  unmounted() {
    console.log('unmounted');
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
};
</script>

-->

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
