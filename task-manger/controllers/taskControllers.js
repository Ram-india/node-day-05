const Task = require('../model/taskModel');

//Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Internal server Error"});
    }
};

//create new task
const createTask = async(req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }catch (error){
        res.status(500).json({error: "Internal server Error"});
    }
};

module.exports = {
    getTasks,
    createTask
}