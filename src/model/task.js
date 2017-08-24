module.exports = function () {

  var db = require('./../libs/connection-db')();
  var Schema = require('mongoose').Schema;

  var task = Schema({
    title: String,
    description: String,
    status: Boolean,
  });

  return db.model('tasks', task);

}
