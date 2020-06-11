const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const QRCodeSchema = new Schema({
  _allreadyUsed: {
    type: Boolean,
    default: false
  },
  useId : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: Number,
    default: 0
  },
  scanned:{
    type: Boolean,
    default: false
  },
  url: String,
  useInfo: {
    type: Object,
    default: {}
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  expireAt: {
    type: Date
  }
})

module.exports = mongoose.model('QRCodeModel', QRCodeSchema)