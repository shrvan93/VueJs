//import express from 'express' //ES6 module

const express = require('express') //node.js module
const { response } = require('express')
// cream serverul si setam portul
const server = express()
const port = 3000
const message = {message: 'Hi'}

//configuram rutele
server.get('/hello', (request, response) => response.send(message))
server.get('/test', (request, response) => response.send({message:'this is test'}))

//pornim serverul
server.listen(port, () => console.log(
    `Server started on http://localhost:${port}`
))