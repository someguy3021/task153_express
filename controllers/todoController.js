const Todo = require('../models/todo') 

const all = async (req, res) => {
    const todos = await Todo.findAll({
        include: Todo
    });
    return res.json(todos); 
}
const store = async (req, res, next) => {
    try {
        const newTodo = await Todo.create({
            text: req.body.text,
            is_done: req.body.is_done,
        });
    
        res.status(201).json(newTodo);
        } catch (error) {
            next(error);
        }
}
const show = async (req, res) => {
    try {
        const todoID = parseInt(req.params.id);
        const todo = await Todo.findByPk(todoID);

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(todo);
    } catch (error) {
        next(error);
    }
}
const update = async (req, res) => {
    try {
        const todoID = parseInt(req.params.id);
        const todo = await Todo.findByPk(todoID);

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    await todo.update({
        text: req.body.text,
        is_done: req.body.is_done,
    });

    res.json(todo);
    } catch (error) {
        next(error);
    }
}
const destroy = async (req, res) => {
    try {
        const todoID = parseInt(req.params.id);
        const todo = await Todo.findByPk(todoID);

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

        await todo.destroy();
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        next(error);
    }
}
module.exports = { all, store, show, update, destroy }