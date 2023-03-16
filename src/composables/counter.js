import { computed, ref } from '@vue/reactivity';
import { mapFields } from "vuex-map-fields";
import { useStore } from 'vuex';



export default function useCounter() {
  const store = useStore()
  
  const counter = computed(() => store.state.counter)

  function increment() {
    store.commit("increment")
  }
  function decrement() {
    store.commit("decrement")
  }
  function reset() {
    store.commit("reset")
  }
  function setValue() {
    store.commit("setValue")
  }
  // const increment = computed(() => {
  //   return store.commit("increment")
  // })

  // const counter = computed(() => store.state.counter)

  // const increment = () => {
  //   store.commit("increment")
  // }
  
  return {
    counter,
    increment,
    decrement,
    reset,
    setValue
  }
  
}



