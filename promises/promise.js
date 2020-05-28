// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('promise kept') ,2000)
// });

// //another way of writing promises in js
// myPromise.then(result => alert(result))
//           .catch(error => alert(error))  



// myPromise.then(
//    result => alert(result),
//    error => alert(error)  
// )



new Promise((resolve, reject) => {
    setTimeout(() => resolve("unu"), 3000)
}).then(result => {
    addDiv(result)
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve("doi"), 2000)
    })
}).then(result => {
    addDiv(result)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("trei"), 1000)
    })
}).then(result => {
    addDiv(result)
})

function addDiv(text) {
    let div = document.createElement('div')
    div.innerText = text
    document.querySelector('body').appendChild(div)
}