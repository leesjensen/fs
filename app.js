var express = require('express');
var path = require('path');

var commentRouter = require('./routes/index');
var userRouter = require('./routes/user');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/comment', commentRouter);
app.use('/user', userRouter);

module.exports = app;
