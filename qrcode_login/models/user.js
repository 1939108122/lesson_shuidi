const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const USerSchema = new Schema({
  username: String,
  password: String,
  token: String
})

module.exports = mongoose.model('User', USerSchema)