const express = require('express');
const router = express.Router();
const model = require('../model/task')();

// READ
router.get('/', (req, res) => {
  model.find({}, function (err, tasks) {
    if (err) throw err;

    res.render('index', {
      title: 'Welcome to NodeMongoCrud',
      tasks
    });
  });
});

// CREATE
router.post('/add', (req, res, next) => {
  let body = req.body;
  body.status = false;
  model.create(body, (err, task) => {
    if(err) throw err;
    res.redirect('/');
  });
});

// UPDATE
router.get('/turn/:id', (req, res, next) => {
  let id = req.params.id;
  model.findById(id, (err, task) => {
    if (err) throw err;
    task.status = !task.status;
    task.save()
      .then(() => res.redirect('/'));
  });
});

// DELETE
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;
  model.remove({_id: id}, (err, task) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
