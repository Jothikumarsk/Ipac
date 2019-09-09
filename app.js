var express = require('express');
var app = express();
var db = require('./db');
const cors = require('cors')
var UserController = require('./user/UserController');
app.use('*', cors());
app.use('/users', UserController);

module.exports = app;