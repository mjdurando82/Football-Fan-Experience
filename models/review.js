const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema({
  stadium_id: { type: Schema.Types.ObjectId, ref: 'stadium_id' },
  name: { type: String, required: true },
  gameAttended: { type: String, required: true },
  stadiumRating: { type: Number, required: true },
  foodRating: { type: Number, required: true },
  Parking: { type: Number, required: true },
  seatSection: { type: String, required: true },
  ticketPrice: { type: Number, required: true },
  description: { type: String, required: false }
})
