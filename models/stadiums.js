const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stadium = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    homeTeam: { type: String, required: true },
    capacity: { type: Number, required: true },
    fieldSurface: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Stadium', Stadium)
