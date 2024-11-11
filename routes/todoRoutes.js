const express = require('express');
const Todo = require('../model/TODO');
const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

// Add new todo
router.post('/add', async (req, res) => {
  await Todo.create({ task: req.body.task });
  console.log( req.body.task)
  res.redirect('/');
});

// Mark as completed
router.post('/complete/:id', async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, { completed: true });
  res.redirect('/');
});

// Delete todo
router.post('/delete/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
