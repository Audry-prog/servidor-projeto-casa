const express = require('express');
const app = express();

const index = require('./route/index');
const quadrosFamosos = require('./route/quadrosFamososRoute')

app.use((req, res, next) => {
    console.log('Nova requisição realizada.')
    next()
});

app.use('/', index);
app.use('/quadrosFamosos', quadrosFamosos);
module.exports = app;