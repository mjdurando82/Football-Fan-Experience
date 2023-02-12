import axios from 'axios'
import StadiumList from "./StadiumList"
import { useState, useEffect } from "react"

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
        <h5>{review.name}</h5>
        <p>Game Attended: {review.gameAttended}</p>
        <p>Stadium: {review.stadiumRating}</p> 
        <p>Food: {review.foodRating}</p>
        <p>Parking {review.parking}</p>
        <p>Sat in Section: {review.seatSection}</p>
        <p>TicketPrice: {review.ticketPrice}</p> 
        <p>Additional Comments: {review.description}</p>
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    ))}
  </div>
  )
}

export default Reviews