const express = require("express");
const{ getTasks,createTask } = require("../controllers/taskControllers");

const router = express.Router();

//get all tasks
router.get("/", getTasks);

//create new task
router.post("/", createTask);

module.exports = router;
