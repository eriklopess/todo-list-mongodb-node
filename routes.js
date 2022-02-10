const express = require('express');
const { getTasks, saveTask, deleteTask } = require('./controllers/api');
const route = express.Router();

route.get('/:id?', getTasks);
route.post('/', saveTask);
route.delete('/', deleteTask);

module.exports = route;