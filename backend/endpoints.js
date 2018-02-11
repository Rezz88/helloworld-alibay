const funky = require('./funky')
const tools = require('./tools')
const express = require('express')
const app = express()

var fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))


allUsers = {};

app.post('/signUp', (req, res) => { 
    res.send(funky.signUp(JSON.parse(req.body)))
    fs.writeFileSync("userInfo.json", JSON.stringify(allUsers))
    console.log(allUsers);
})

app.post('/login', (req, res) => {
    allUsers = fileread("userInfo.json")
    console.log('test data read', allUsers)
    res.send(funky.login(JSON.parse(req.body), allUsers))
 })

// app.post('/')

app.listen(4000)
