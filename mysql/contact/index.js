const mysql = require("mysql")
const express = require("express")
const bodyParse = require("body-parser")
const port = 80
const uri = `http://localhost:${port}`

const app = express()
app.use(bodyParse.urlencoded({extended: true}))



var con = mysql.createConnection({
    host: "localhost",
    user: "myuser",
    password: "1234",
    database: "gregs_list"

})
con.connect((err) => {
    if (err) throw err
    console.log("Connected to MySQL")
   
})
// inregistreaza rutele
app.post("/contact", (req, res) => {
 console.log(req.body)
    con.query(`INSERT INTO contact VALUES(NULL, '${req.body.name}', '${req.body.email}', '${req.body.messgae}')`)
 //dam respuns 200 ok 
 res.sendStatus(200)
    
})
//porneste aplicaita server
app.listen (
  port, () => (`Server started on ${uri}`)  
)