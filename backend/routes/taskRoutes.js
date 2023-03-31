const express = require('express');
const router = express.Router();
const controllers = require("../controllers");
const {protect} = require("../middleware/authMiddleware");
const models = require("../models");


router.get("/", (req, res) => {
    controllers.taskController.getTask(req, res)
});

/* router.get("/", protect, function (req, res) {
    controllers.taskController.getTask(req, res)
}) */

router.post("/", (req, res) => {
    controllers.taskController.addTask(req, res)
});

router.delete("/:id", (req, res) => {
    controllers.taskController.deleteTask(req, res)
});

router.put("/:id", (req, res) => {
    controllers.taskController.updateTask(req, res)
});


module.exports = router 


