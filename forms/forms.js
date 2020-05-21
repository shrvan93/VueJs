import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';

let app = new Vue({
    el: '#app',
    data: {
        name: null,
        age: null,
        framework: null,
        error:[] 
    },
    methods: {
        validate() {
            //validate name ,age  and framework not empty
            
        }
    },
    computed: {
        hasErrors() {
            return this.hasErrors.length > 0;
        }
    }
})