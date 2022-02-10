const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: Number,
    required: true
  }
});

const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;