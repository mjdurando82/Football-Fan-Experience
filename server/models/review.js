const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    stadium: { type: Schema.Types.ObjectId, ref: 'Stadium' },
    name: { type: String, required: true },
    gameAttended: { type: String, required: true },
    stadiumRating: { type: String, required: true },
    foodRating: { type: String, required: true },
    parking: { type: String, required: true },
    seatSection: { type: String, required: true },
    ticketPrice: { type: String, required: true },
    description: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
