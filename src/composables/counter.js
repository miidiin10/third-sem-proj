import { computed, ref } from '@vue/reactivity';

export default {
      increment(state) {
        state.counter++  
      },
      decrement(state) {
        state.counter-- 
      },
      reset(state) {
        state.counter = 0
      },
      setValue(state) {
        let setVal = state.setCount
        state.counter = setVal
        state.setCount = ''
      }
}