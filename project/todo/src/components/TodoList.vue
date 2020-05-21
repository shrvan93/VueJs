<template>
  <div class="todo-list">
    <h1>{{list_name}}</h1>
    <div class="filters">
      <label>Show done:</label>
      <input type="checkbox" v-model="showDone" />
    </div>
    <ul>
      <Task
        v-for="(todo, index) in filtersTodos"
        :key="index"
        :todo="todo"
        @checked="checkTodo(index)"
        @deleted="deleteTodo(index)"
      ></Task>
    </ul>
    <div class="new_task">
      Task:
      <input type="text" v-model="task" @keyup.enter="saveTodo" />
      <div class="save_task">
        <button @click="saveTodo">Save item</button>
      </div>
    </div>
  </div>
</template>
<script>
import Task from './Task.vue';
import Todo from '../classes/todo.js';
export default {
    name: 'TodoList',
     data() {
        return {
            todos: [
                new Todo('Something to do')
            ],
            task: '',
            showDone: true
        }
    },
    props: ['list_name'],
    components: {
        Task
    },
    methods: {
        saveTodo() {
            // adaugam valoarea din task in lista de todo
            this.todos.push(new Todo(this.task));
            // resetam task-ul
            this.task = '';
        },
        checkTodo(index) {
            this.todos[index].switchDone();
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    },
    computed: {
        filteredTodos() {
            return this.todos.filter(todo => this.showDone || !todo.isDone)
        }
    },
};
</script>

<style scoped>

h1 {
    margin-top: 0;
    margin-bottom: 0.5em;
    padding-bottom: 0.2em;
    font-size: 1.5em;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
}
.new_task {
    margin-top: 1em;
    text-align: right;
}

.save_task {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5em;
}

button {
    font-size: 1em;
    border: 1px solid rgb(88, 137, 180);
    border-radius: 5px;
    background-color: rgb(51, 121, 182);
    color: white;
    padding: 0.4em;
}
button:focus {
    outline-style: none;
}

input[type="text"] {
    font-size: 1em;
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 0.5em;
    width: 85%;
}
input[type=text]:focus {
    outline-style: none;
    border-bottom: 1px solid #e0e0e0;
}

.filters {
    text-align: right;
    margin-bottom: 0.5em;
}

</style>