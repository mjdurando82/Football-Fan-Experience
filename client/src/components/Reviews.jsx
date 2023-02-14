import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

const BASE_URL = `http://localhost:3001`


const Reviews = () => {
  const [reviews, setReviews] = useState([])
  
  let { id } = useParams()

  const getReviews = async () => {
    const response = await axios.get(`${BASE_URL}/stadium/${id}/reviews`)
    setReviews(response.data.reviews)
  }

  useEffect(() => {
    getReviews()
  },[])

  const handleDelete = async (reviewId) => {
    await axios.delete(`${BASE_URL}/review/${reviewId}`)
    getReviews()
  }

  const handleUpdate = async (reviewId) => {
    await axios.put(`${BASE_URL}/review/${reviewId}`)
  }


  return(
    <div>
    <h3 className='review-title'>Reviews</h3>
    {reviews.map((review) => (
      <div key={review._id} className='reviews'>
        <big>{review.name}</big>
        <p>Game Attended: {review.gameAttended}</p>
        <p>Stadium: {review.stadiumRating}</p> 
        <p>Food: {review.foodRating}</p>
        <p>Parking {review.parking}</p>
        <p>Sat in Section: {review.seatSection}</p>
        <p>TicketPrice: {review.ticketPrice}</p> 
        <p>Additional Comments: {review.description}</p>
        <button className='edit' onClick={()=>handleUpdate(review._id)}>Edit</button>
        <button className='delete' onClick={()=> handleDelete(review._id)}>Delete</button>
      </div>
    ))}
  </div>
  )
}

export default Reviews