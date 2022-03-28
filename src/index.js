const express = require("express");

const userController = require("./controllers/userController");
const todoController = require("./controllers/todoController");

const app = express();

app.use(express.json());
app.use("/user", userController)
app.post("/user", userController)
app.use("/todo", todoController)
app.post("/todo", todoController)
module.exports = app;