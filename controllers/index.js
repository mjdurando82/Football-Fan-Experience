const Review = require('../models/review')
const Stadium = require('../models/stadium')

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Review.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Review Deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getStadiums = async (req, res) => {
  try {
    const stadiums = await Stadium.find()
    return res.status(200).json({ stadiums })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateStadium = async (req, res) => {
  try {
    const stadium = await Stadium.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(stadium)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
  getStadiums,
  updateStadium
}
