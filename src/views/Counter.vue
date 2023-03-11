<template>
    <div>
      
    <div>
      {{ $store.state.counter }}
    </div>
    
    <div class="buttons">
      <button @click="$store.commit('decrement')">-</button>
      <button @click="$store.commit('reset')">Reset</button>
      <button @click="$store.commit('increment')">+</button>
    </div>

    <div>
      <input type="text" v-model="setCount" placeholder="Enter a number" />
      <button @click="$store.commit('setValue')">Set Value</button>
    </div>

    <router-link to="/">Go Back to Home Page</router-link>
    </div> 
  
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: 'HomeView',
  computed: {
    ...mapFields([
      'setCount',
    ])
  },
  components: {
    
  },
  setup() {
    
  }
}
</script>
