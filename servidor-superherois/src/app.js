const express = require ('express');
const app = express();

const index = require('./route/index');
const superHerois = require('./route/superHeroisRoute')

app.use ((req, res, next) => {
    console.log('Nova requisição realizada.')
    next()
});

app.use('/', index);
app.use('/superHerois', superHerois);
module.exports = app;