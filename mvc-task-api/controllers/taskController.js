const { tasks } = require('../models/taskModel');

// CREATE
exports.createTask = (req, res) => {
    const { title, description } = req.body;

    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

// READ ALL
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// READ ONE
exports.getTaskById = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};

// UPDATE
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;

    res.json(task);
};

// DELETE
exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    const deleted = tasks.splice(index, 1);
    res.json(deleted);
};