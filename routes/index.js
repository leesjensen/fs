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

router.param('comment', function (req, res, next, id) {
  const query = Comment.findById(id);
  query.exec(function (err, comment) {
    if (err || !comment) {
      return next(new Error(`can't find comment with id ${id}`));
    }
    req.comment = comment;
    return next();
  });
});

router.get('/comments', function (req, res, next) {
  Comment.find(function (err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

router.post('/comments', function (req, res, next) {
  const comment = new Comment(req.body);
  comment.save(function (err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

router.get('/comments/:comment', function (req, res) {
  res.json(req.comment);
});

router.put('/comments/:comment/upvote', function (req, res, next) {
  req.comment.upvote(function (err, comment) {
    if (err) {
      return next(err);
    }
    res.json(comment);
  });
});

module.exports = router;
