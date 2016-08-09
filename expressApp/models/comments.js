var db = require('../config/db')
  , DATABASE = 'expressapp_data'

exports.submit = function(user, comment, done) {
  var data = {
    _id: (new Date().toJSON()) + ':' + user,
    message: comment
  }

  db.save(DATABASE, data, function(err, doc) {
    if (err) return done('Unable to connect to CouchDB')
    if (doc.error) return done('Unable to save the comment')
    done(null, doc)
  })
}

exports.all = function(done) {
  db.all(DATABASE, {}, function(err, data) {
    if (err) return done('Unable to connect to CouchDB')
    if (data.error) return done('Unable to get the comments')
    console.log("in model"+data);
    done(null, data.rows)
  })
}

exports.recent = function(done) {
  db.all(DATABASE, {limit: 20, descending: true}, function(err, data) {
    if (err) return done('Unable to connect to CouchDB')
    if (data.error) return done('Unable to get the comments')
    done(null, data.rows)
  })
}