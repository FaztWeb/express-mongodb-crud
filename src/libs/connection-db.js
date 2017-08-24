const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let db;

module.exports = function functionName() {
  if (!db) {1
    db = mongoose.connect('mongodb://localhost/crud-mongo', {
      useMongoClient: true
    });
  }
  return db;
}
