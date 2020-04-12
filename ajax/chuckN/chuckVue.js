var app = new Vue({
    el: "#app",
    data: {
        fact: "loading..."
    },
    //metoda ce se apeleaza cand porneste aplicatia
    mounted() {
        axios
            .get('http://api.icndb.com/jokes/random')
            .then(response => this.fact = response.data.value.joke)
            .catch(error => console.log(error));
    }
}); 