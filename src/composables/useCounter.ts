import { computed } from "vue";
import { useStore } from "vuex";

export function useCounter() {
  const store = useStore();

  const counter = computed(() => store.state.count);

  const increment = () => {
    store.commit("increment");
  };

  const decrement = () => {
    store.commit("decrement");
  };

  return {
    counter,
    increment,
    decrement,
  };
}
