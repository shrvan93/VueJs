<template>
  <div id="app">
   <TodoList list_name="Today"></TodoList>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(242, 205, 102);
    font-size: 1.2em;
}

#app {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 2em;
    margin-top: 2em;
    background-color: #f5f5f5;
    font-family: sans-serif;
    width: 40%;
    color:#888;
    --webkit-box-shadow: 10px 10px 11px -2px rgba(0,0,0,0.3); 
    --moz-box-shadow: 10px 10px 11px -2px rgba(0,0,0,0.3); 
    box-shadow: 10px 10px 11px -2px rgba(0,0,0,0.3); 
}
</style>
