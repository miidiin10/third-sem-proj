<template>
    <div class="app-container">
      <div class="home">
      
        <div class="container">
          <h2 class="count">
            {{ counter }}
          </h2>
        </div>
      
      
      <div class="buttons">
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
        <button @click="increment">+</button>
      </div>

      <div>
        <input type="text" v-model="setCount" placeholder="Enter a number" />
        <br/>
        <button @click="setValue">Set Value</button>
      </div>

      <router-link to="/" class="link">Go Back to Home Page</router-link>
      </div> 
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import useCounter from "../composables/counter"

export default {
  name: 'HomeView',
  computed: {
    ...mapFields([
      'setCount',
    ])
  },
  setup() {
    const { counter, increment, decrement, reset, setValue} = useCounter();
      
    return { counter, increment, decrement, reset, setValue};
  },
    
}
</script>

<style>
  

  .container {    
    display: flex;
    justify-content: center;
    
  }
  .count {
    font-size: xx-large;    
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
    border-radius: 15px;
    border: 1px solid brown;
    font-size: xx-large;
    margin: 10px;
    padding: 10px;
  }
  button:hover {
    transform: scale(1.05);
    cursor: grab;
  }
  button:active{
    transform: translateY(4px);
  }
  input {
    border-radius: 10px;
    border: none;
    text-align: center;
    margin-bottom: 4px;
    padding: 15px;
    font-size: x-large;
  }
  input:focus{
    outline: 1px solid brown;
  }

  @media (min-width: 320px) and (max-width:480px){
    
    button {
      font-size: large;
      margin: 0;
      padding: 10px;
    }
    input {
      width: 190px;
    }
  }

  @media (min-width: 270px) and (max-width:320px){
    
    button {
      font-size: large;
      margin: 0;
      padding: 10px;
    }
    input {
      width: 130px;
    }
    
  }
</style>