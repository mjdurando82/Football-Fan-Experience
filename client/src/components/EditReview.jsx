import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EditReview = () => {
  
  const [stadium, setStadium] = useState()
  const [review, setReview] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  let { id } = useParams()
  let initialState = {}
  
  const getReviewsById = async () => {
    const response = await axios.get(`https://football-fan-experience.vercel.app/api/review/${id}`)
    setReview(response.data.review)
    setIsLoaded(true)
  }
  
  useEffect(() => {
    getReviewsById()
  },[])
  
  
  const handleUpdate = async () => {
    await axios.put(`/api/review/${id}`, formState)
  }

  if (isLoaded === true){
    initialState = {
    stadium: review.stadium,
    name: review.name,
    gameAttended: review.gameAttended,
    stadiumRating: review.stadiumRating,
    foodRating: review.foodRating,
    seatSection: review.seatSection,
    ticketPrice: review.ticketPrice,
    parking: review.parking,
    description: review.description
  }
}
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
    setStadium(formState.stadium)
  }

return (
  <form>
    <h3>Edit Review</h3>
    <label htmlFor="name">Your Name:</label>
  <input
    type="text"
    id="name"
    onChange={handleChange}
    value={formState.name}
    placeholder={initialState.name}
  />
      <label htmlFor="gameAttended">Game You Attended:</label>
    <input
    type="text"
    id="gameAttended"
    onChange={handleChange}
    value={formState.gameAttended}
    placeholder={initialState.gameAttended}
    />
    <label htmlFor="stadiumRating">Stadium Rating 1-5:</label>
  <input 
    type="text"
    id="stadiumRating"
    onChange={handleChange}
    value={formState.stadiumRating}
    placeholder={initialState.stadiumRating}
  />
    <label htmlFor="foodRating">Food Rating 1-5:</label>
  <input
    type="text"
    id="foodRating"
    onChange={handleChange}
    value={formState.foodRating}
    placeholder={initialState.foodRating}
  />
    <label htmlFor="seatSection">Section You Sat In:</label>
  <input
    type="text"
    id="seatSection"
    onChange={handleChange}
    value={formState.seatSection}
    placeholder={initialState.seatSection}
  />
    <label htmlFor="ticketPrice">Ticket Price:</label>
  <input
    type="text"
    id="ticketPrice"
    onChange={handleChange}
    value={formState.ticketPrice}
    placeholder={initialState.ticketPrice}
  /> 
    <label htmlFor="parking">Parking Rating: </label>
  <input
    type="text"
    id="parking"
    onChange={handleChange}
    value={formState.parking}
    placeholder={initialState.parking}
  /> 
    <label htmlFor="description">Comments</label>
  <textarea
    id="description"
    cols="35"
    rows="7"
    onChange={handleChange}
    value={formState.description}
    placeholder={initialState.description}
  ></textarea>
  <Link to='/'>
    <button type="save" onClick={()=>handleUpdate()}>Save</button>
    </Link>
  </form>
  )
}

export default EditReview