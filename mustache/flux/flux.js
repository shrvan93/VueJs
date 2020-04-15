var app = new Vue({
    el: '#app',
    data: {
        good: true,
        todo: [
            'stay at home',
            'be safe',
            'learn vueJs',
        ],
    },
    methods: {
        hour() {
            let now = new Date();
            return now.getHours();
        }
    },
    addNewItem() {
        this.todo.splice(2, 1, 'Test arrays.' );
    }
});