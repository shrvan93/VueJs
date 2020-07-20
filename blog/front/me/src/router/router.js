import VouRouter from 'vue-roouter'

export default new VouRouter ({
    router: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signiup',
            component: SignUp
        },
        
    ]
})