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
    res.send(await funky.signUp(JSON.parse(req.body)));
})

app.post('/login', (req, res) => {
    allUsers = fileread('userInfo.json')
    // console.log('test data read', allUsers)
    res.send(funky.login(JSON.parse(req.body), allUsers))
 })

// app.post('/')

app.listen(4000)
