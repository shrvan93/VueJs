import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"
import './component/Task.js';
import './component/todo-list.js';
import store from './store/store..js'
var app = new Vue({
    el: '#app',
    store
});