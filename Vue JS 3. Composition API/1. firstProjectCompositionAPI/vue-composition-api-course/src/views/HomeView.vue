<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counter.title }}:</h3>
    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" v-autofocus type="text" />
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
<<<<<<< HEAD
/* Imports */

import { ref, reactive, computed, watch } from 'vue';

/* Title */
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6.-Lifecycle-Hooks
/* 
imports
*/
=======
>>>>>>> 12.-State-management-with-Pinia
/* imports */
import { reactive, computed, watch, onMounted } from 'vue';
>>>>>>> 12.-State-management-with-Pinia

/* App title */
<<<<<<< HEAD
=======
import { reactive, computed, watch } from 'vue';
import { vAutofocus } from '../directives/vAutofocus.js'// importing a global directive
>>>>>>> 7.-Directives
=======
>>>>>>> 6.-Lifecycle-Hooks
>>>>>>> 12.-State-management-with-Pinia

import { ref, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '../directives/vAutofocus.js'; // importing a global directive

/* 
App title
*/
const appTitle = 'My Amazing Counter App';
<<<<<<< HEAD

/* Counter */

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

=======
onMounted(() => {
  console.log('Do stuff related to App Title');
});

/* Counter logic */

const appTitleRef = ref(null);

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
  console.log(appTitleRef.value);
  console.dir(appTitleRef.value);
});

<<<<<<< HEAD
// Counter

const counter = useCounterStore();
=======
>>>>>>> 12.-State-management-with-Pinia
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

onMounted(() => {
  console.log('Do stuff related to Counter');
});
>>>>>>> 6.-Lifecycle-Hooks
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
§
