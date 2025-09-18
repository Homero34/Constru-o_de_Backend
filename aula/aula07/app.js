const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', indexRouter);

const tarefas = [];

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
})

app.post('/tarefas', (req, res) => {
    res.status(201).json({id:1,nome:"Estudar para P1",concluida:false});
})

module.exports = app;
