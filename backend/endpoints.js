const funky = require('./funky');
const { fileread } = require('./tools');
const express = require('express');
const morgan = require('morgan');
const app = express()

var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.raw({ type: '*/*' }))
app.use(morgan('dev'));

app.post('/signUp', async (req, res) => {
    console.log('signup');
    res.send(await funky.signUp(JSON.parse(req.body.toString())));
})

app.post('/login', (req, res) => {
    allUsers = fileread('userInfo.json')
    // console.log('test data read', allUsers)
    res.send(funky.login(JSON.parse(req.body), allUsers))
 })

// app.post('/')

app.listen(4003, console.log("We're a go!"))
