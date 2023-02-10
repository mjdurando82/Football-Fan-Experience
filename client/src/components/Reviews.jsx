import AddReview from "./AddReview"
import { useState, useEffect } from "react"
import axios from 'axios'
const BASE_URL = `http://localhost:3001`

const Reviews = () => {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios.get(`${BASE_URL}/reviews`)
      console.log(response)
      setReviews(response.data.reviews)
    }
    getReviews()
  },[])
  


  return(
    <div>
    <h3>Reviews:</h3>
    {reviews.map((review) => (
      <div key={review.id} className='review-container'>
        <p>{review.name} {review.gameAttended} {review.stadiumRating} {review.foodRating} {review.parking} {review.seatSection} {review.ticketPrice} {review.description} </p>
      </div>
    ))}
  </div>
  )
}

export default Reviews