
axios
    .get('http://api.icndb.com/jokes/random')
    .then(
         response => {document.querySelector('div:nth-child(1)').innerText = response.data.value.joke
                    console.log(response)
                    return axios.get('http://api.icndb.com/jokes/random')
                    }  

    )
    .then(
        response => {document.querySelector('div:nth-child(2)').innerText = response.data.value.joke
                     return axios.get('http://api.icndb.com/jokes/random')
                    console.log(response)
    }
    )
    .then(
        response => {document.querySelector('div:nth-child(3)').innerText = response.data.value.joke
                   
    }
    )
    .catch(
         error => console.log(error)
    )