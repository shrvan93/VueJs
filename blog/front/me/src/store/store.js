import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: null,
            email: null,
            token: null,
        
        },
    },
    mutations: {
        login:(state, loginUser) => {
            state.user = loginUser
        },
        logout: (state) => {
            state.user = {
                name: null,
                email: null,
                token: null
            }
        }
    }
})