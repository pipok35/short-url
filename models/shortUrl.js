const { Schema, model } = require('mongoose')

const shortUrlSchema = new Schema({
  full: { type: String, required: true },
  short: { type: String, required: true },
  domain: { type: String, required: true },
  clicks: { type: Number, required: true, default: 0 },
  code: { type: String, required: true, unique: true },
})

module.exports = model('ShortUrl', shortUrlSchema)
