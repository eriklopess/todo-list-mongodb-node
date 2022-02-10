const taskModel = require("../models/tasksModel");

exports.getTasksFromDB = async ({ id }) => {
  let tasks;
  if (!id) {
    tasks = await taskModel.find();
  } else {
    tasks = await taskModel.findById(id);
  }
  return tasks;
};
