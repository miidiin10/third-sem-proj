import { createStore } from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

const store =  createStore({
  state: {
    counter: 0
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
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
  },
  actions: {
  },
  modules: {
  }
})

export default store;