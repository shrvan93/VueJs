import Todo from '../class/todo.js'

export default new Vuex.Store( {

    state: {
        todos:  [
            new Todo('Somethong too do')
        ],
        showDone: true
    },
    mutations: {
        saveTodo: (state, task) => state.todos.push(new Todo(task)),
        checkTodo: (state, index) => state.todos[index].switchDone(),
        deleteTodo: (state, index) => state.todos.splice(index, 1),
        changeShowDone: (state, value) => state.showDone = value,
    },
    getters: {
        filteredTodos: (state) => state.todos.filter(todo => this.showDone || !todo.isDone)
    }
})