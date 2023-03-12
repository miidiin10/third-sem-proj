<template>
    <div class="app-container">
      <div class="home">
      
        <div class="container">
          <h2 class="count">
            {{ $store.state.counter }}
          </h2>
        </div>
      
      
      <div class="buttons">
        <button @click="$store.commit('decrement')">-</button>
        <button @click="$store.commit('reset')">Reset</button>
        <button @click="$store.commit('increment')">+</button>
      </div>

      <div>
        <input type="text" v-model="setCount" placeholder="Enter a number" />
        <br/>
        <button @click="$store.commit('setValue')">Set Value</button>
      </div>

      <router-link to="/" class="link">Go Back to Home Page</router-link>
      </div> 
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

<style>

  .container {    
    display: flex;
    justify-content: center;
    
  }
  .count {
    font-size: x-large;    
    outline: 1px solid white;
    background-color: brown;
    border-radius: 5px;
    margin: 0;
    padding: 0 5px;
  }
  div {
    padding: 10px 0;
  }
  button {
    color: brown;
    border-radius: 5px;
    border: 1px solid brown;
  }
  input {
    border-radius: 5px;
    border: none;
    text-align: center;
    margin-bottom: 4px;
    padding: 5px;
  }
  input:focus{
    outline: 1px solid brown;
  }

</style>