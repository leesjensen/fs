var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;
const dbName = 'comments';

const dbURL = `mongodb+srv://${userName}:${password}@${hostname}/${dbName}`;

mongoose.connect(dbURL);

const Comments = require('../models/Comments');
const Comment = mongoose.model('Comment');

/* GET home page. */
router.get('/api', function (req, res, next) {
  res.send('in index');
});

module.exports = router;
