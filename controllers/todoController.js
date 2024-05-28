const Todo = require('../models/todo') 

const all = async (req, res) => {
 const todos = await Todo.all()
 res.json(todos)
}
const store = async (req, res) => {
    const todo = new Todo(req.body.text, req.body.isDone)
    await todo.save()
    res.status(201).json(todo)
}
const show = async (req, res) => {
    const todo = await Todo.getById(req.params.id)
    res.json(todo)
}
const update = async (req, res) => {
    const todo = await Todo.update(req.params.id, req.body)
    res.json(todo)
}
const destroy = async (req, res) => {
    await Todo.destroy(req.params.id)
    res.status(204).send()
}
module.exports = { all, store, show, update, destroy }