const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  title: String,
  upvotes: { type: Number, default: 0 },
});

mongoose.model('Comment', CommentSchema);
