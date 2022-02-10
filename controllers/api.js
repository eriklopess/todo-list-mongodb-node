const taskModel = require("../models/tasksModel");
const { getTasksFromDB } = require("../utils/getTasksFromDB");

// Cria um controller para a rota /get
exports.getTasks = async ({params}, res) => {
  try {
    const data = await getTasksFromDB(params)
    res.json(data)
  } catch (err) {
    res.status(404).send()
  }
};

// Cria um controller para a rota /post
exports.saveTask = async (req, res) => {
  const { title, description } = req.body.task;
  try {
    await taskModel.create({
      title,
      description,
      status: 0,
    });
    res.status(200).send();
  } catch (e) {
    res.status(404).send();
  }
};

// Cria um controller para a rota /delete
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.body;
    const task = await taskModel.findOneAndDelete({ _id: id });
    if (!task) res.status(404).send({ message: "Task não encontrada" });
    res.status(200).send();
  } catch (err) {
    res.status(404).send();
  }
};
