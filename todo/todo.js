var app = new Vue({
    el: '#app',
    data: {
        todos: [],
        task: '',
    },
    methods: {
        saveItem() {
            //we add the value from task to todo list
            this.todos.push(this.task);
            // reset task
            this.task = '';
        }
    }
});