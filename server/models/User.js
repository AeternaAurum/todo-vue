const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const { Schema } = mongoose

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('users', userSchema)