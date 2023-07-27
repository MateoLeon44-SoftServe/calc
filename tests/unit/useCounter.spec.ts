import { ref } from "vue";

export const useCounter = jest.fn(() => {
  const counter = ref(0);

  function increment() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        counter.value++;
        resolve();
      }, 500);
    });
  }

  function decrement() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        counter.value--;
        resolve();
      }, 500);
    });
  }

  return {
    counter,
    increment,
    decrement,
  };
});
