//import express from 'express' //ES6 module

const express = require('express') //node.js module

const redis = require('redis')
//const { response } = require('express')
// cream serverul si setam portul
const server = express()
const port = 3000

// cream clientul de redis
const client = redis.createClient()

//decodeaza teate body-ul request-ului in JSON
server.use(express.json())
 


function shortify(request, response) {
    const longUri = request.body.longUri
    //generam uri-ul scurt 
    const shortUriId = Math.random().toString(16).substr(2, 8)
    const shortUri = `http://localhost:${port}/uris/${shortUriId}`
    // salvam legatura intre shortUri si longUri in redis
    client.set(shortUri, longUri)
    //response.send(shortUri: shortUri) // key value pair
    //trimitem raspunsul
    response.send({shortUri}) //ES6
}

function longify(request, response) {
    const shortUriId = request.params.shortUriId
    const shortUri = `http://localhost:${port}/uris/${shortUriId}`
    const longUri = client.get(shortUri, (longUri) => response.send({longUri}))
    
}

//configuram rutele
server.post('/uris', shortify)
server.get('/uris/:shortUriId', longify)   

//pornim serverul
server.listen(port, () => console.log(
    `Server started on http://localhost:${port}`
))