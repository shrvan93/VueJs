<template>
    <div>
    <form>
        <h2>Sign Up</h2>
        <label for="email">Email adress</label>
        <input type="text" name="email" id="email" v-model="email">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name">
        <label for="password">Password</label>
        <input type="password" name="password" id="pas0sword" v-model="password">
        <input type="button" name="Submit" @click="signup">
    </form>        
    <div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return{
            email: null,
            name: null,
            password: null,
        }
    },
    methods: {
        signup() {
            axios
                .post(
                    'http://localhost:8000/user',
                    {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }
                )
                .then(this.$router.push('/signup/succes'))
                .catch(err => console.log(error))
        }
    }
}   
</script>

<style scoped>

</style>
//min58