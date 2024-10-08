import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  // const [thisStadium, setThisStadium] = useState(stadiums)

  let { id } = useParams()
  // const selectStadium = () => {
  //   setThisStadium(stadiums.find((stadium) => stadium._id === `${id}`))
  // }
  
  // // useEffect(() => {
  // //   selectStadium()
  // // })

  const getReviews = async () => {
    const response = await axios.get(`/api/stadium/${id}/reviews`)
    setReviews(response.data.reviews)
  }
  
  
  const handleDelete = async (reviewId) => {
    await axios.delete(`/api/review/${reviewId}`)
    getReviews()
  }
    
  useEffect(() => {
    getReviews()
  },[])



  return(
    <div>
    {/* <div className='stadium-card'> */}
    {/* <h3>{props.name}</h3>
        <img src={thisStadium.imageUrl} alt='stadium'></img>
        <h5>{thisStadium.location}</h5>
        <h5>Home Team: {thisStadium.homeTeam}</h5>
        <h5> Capacity: {thisStadium.capacity}</h5>
        <h5>Field Surface: {thisStadium.fieldSurface}</h5>
    </div> */}
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
        <Link to={`https://football-fan-experience.vercel.app/review/${review._id}/edit`}>
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