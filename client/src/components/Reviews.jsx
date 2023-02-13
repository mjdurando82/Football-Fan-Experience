import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

const BASE_URL = `http://localhost:3001`


const Reviews = () => {
  const [reviews, setReviews] = useState([])

  let { id } = useParams()

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios.get(`${BASE_URL}/stadium/${id}/reviews`)
      setReviews(response.data.reviews)
      console.log(response.data.reviews)
    }
    getReviews()
  },[])


  return(
    <div>
    <h3>Reviews</h3>
    {reviews.map((review) => (
      <div key={review._id} className='review-container'>
        <h4>{review.name}</h4>
        <p>Game Attended: {review.gameAttended}</p>
        <p>Stadium: {review.stadiumRating}</p> 
        <p>Food: {review.foodRating}</p>
        <p>Parking {review.parking}</p>
        <p>Sat in Section: {review.seatSection}</p>
        <p>TicketPrice: {review.ticketPrice}</p> 
        <p>Additional Comments: {review.description}</p>
        <button className="edit">Edit</button>
      </div>
    ))}
  </div>
  )
}

export default Reviews