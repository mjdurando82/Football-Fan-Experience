import AddReview from "./AddReview"
import { useState, useEffect } from "react"
import axios from 'axios'
const BASE_URL = `http://localhost:3001`

const Reviews = () => {

  const postReview = async () => {
    try {
      let res = await axios.post(`${BASE_URL}reviews`)
    } catch (err) {
      console.log(err)
    }
  }

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
        <h5>{review.name}</h5>
        <p>Game Attended: {review.gameAttended}</p>
        <p>Stadium: {review.stadiumRating}</p> 
        <p>Food: {review.foodRating}</p>
        <p>Parking {review.parking}</p>
        <p>Sat in Section: {review.seatSection}</p>
        <p>TicketPrice: {review.ticketPrice}</p> 
        <p>Additional Comments: {review.description}</p>
      </div>
    ))}
  </div>
  )
}

export default Reviews