import { reactive, computed, watch, onMounted, nextTick } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

export function useCounter() {
  // new counter app code.

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

  const increaseCounter = async (amount, event) => {
    counterData.count += amount;
    await nextTick(() => {
      console.log('do something when the counter has updated in the dom');
    });
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
