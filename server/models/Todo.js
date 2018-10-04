const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const { Schema } = mongoose

const todoSchema = new Schema({
  title: String,
  body: String,
  completed: { type: Boolean, default: false },
  owner: String
})

module.exports = mongoose.model('todos', todoSchema)