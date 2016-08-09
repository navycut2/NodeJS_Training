var express = require('express')
  , router = express.Router()

var Comments = require('../models/comments')

// Submit a comment
router.post('/submit', function(req, res) {
  Comments.submit(req.session.user._id, req.body.comment, function(err, doc) {
    res.redirect('/all')
  })
})

// Get all comments
router.get('/all', function(req, res) {
  console.log("in comments controller");
  Comments.all(function(err, docs) {
    res.render('comments', {comments: docs})
  })
})

// Get most recent comments
router.get('/recent', function(req, res) {
  Comments.recent(function(err, docs) {
    res.render('comments', {comments: docs})
  })
})

module.exports = router