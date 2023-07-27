<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { useCounter } from "../composables/useCounter";

export default {
  setup() {
    const { counter, increment, decrement } = useCounter();

    return {
      counter,
      increment,
      decrement,
    };
  },
};
</script>
