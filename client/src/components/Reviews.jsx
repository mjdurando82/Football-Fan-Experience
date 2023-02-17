import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

const BASE_URL = `http://localhost:3001`


const Reviews = () => {
  const [reviews, setReviews] = useState([])
  
  let { id } = useParams()
  
  const getReviews = async () => {
    const response = await axios.get(`${BASE_URL}/stadium/${id}/reviews`)
    setReviews(response.data.reviews)
  }
  
  
  const handleDelete = async (reviewId) => {
    await axios.delete(`${BASE_URL}/review/${reviewId}`)
    getReviews()
  }
    
  useEffect(() => {
    getReviews()
  },[])



  return(
    <div>
    <h1 className='review-title'>Reviews</h1>
    {reviews.map((review) => (
      <div key={review._id} className='reviews'>
        <big>{review.name}</big>
        <p>Game Attended: {review.gameAttended}</p>
        <p>Stadium Rating: {review.stadiumRating}</p> 
        <p>Food Rating: {review.foodRating}</p>
        <p>Parking Rating: {review.parking}</p>
        <p>Sat in Section: {review.seatSection}</p>
        <p>Ticket Price: {review.ticketPrice}</p> 
        <p>Additional Comments: {review.description}</p>
        <section>
        <Link to={`/review/${review._id}/edit`}>
        <button className='edit'>Edit</button>
        </Link>
        <button className='delete' onClick={()=> handleDelete(review._id)}>Delete</button>
        </section>
      </div>
    ))}
    <section className='add-review'>
      <Link to='/add-review'>
      <button className='addReview'>Add Review</button>
      </Link>
    </section>
  </div>
  )
}

export default Reviews