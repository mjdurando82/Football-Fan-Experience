import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const BASE_URL = `http://localhost:3001`

const EditReview = () => {
  
  const [stadium, setStadium] = useState()
  const [review, setReview] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  let { id } = useParams()
  let initialState = {}
  
  const getReviewsById = async () => {
    const response = await axios.get(`${BASE_URL}/review/${id}`)
    setReview(response.data.review)
    setIsLoaded(true)
  }
  
  useEffect(() => {
    getReviewsById()
  },[])
  
  
  const handleUpdate = async () => {
    await axios.put(`${BASE_URL}/review/${id}`, formState)
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
  <label htmlFor="stadium">Pick a Stadium</label>
  <select id="stadium" onChange={handleChange} value={formState.stadium}>
    <option value="63e53d83294a9028beb35f36">Acrisure Stadium</option>
    <option value="63e53d83294a9028beb35f37">Allegiant Stadium</option>
    <option value="63e53d83294a9028beb35f38">Arrowhead Stadium</option>
    <option value="63e53d83294a9028beb35f39">AT&T Stadium</option>
    <option value="63e53d83294a9028beb35f3a">Bank of America Stadium</option>
    <option value="63e53d83294a9028beb35f3b">Ceasars Superdome</option>
    <option value="63e53d83294a9028beb35f3c">Empower Field</option>
    <option value="63e53d83294a9028beb35f3d">FedEx Field</option>
    <option value="63e53d83294a9028beb35f3e">First Energy Stadium</option>
    <option value="63e53d83294a9028beb35f3f">Ford Field</option>
    <option value="63e53d83294a9028beb35f40">Gillette Stadium</option>
    <option value="63e53d83294a9028beb35f41">Hard Rock Stadium</option>
    <option value="63e53d83294a9028beb35f42">Highmark Stadium</option>
    <option value="63e53d83294a9028beb35f43">Lambeau Field</option>
    <option value="63e53d83294a9028beb35f44">Levi Stadium</option>
    <option value="63e53d83294a9028beb35f45">Lincoln Financial Field</option>
    <option value="63e53d83294a9028beb35f46">Lucas Oil Stadium</option>
    <option value="63e53d83294a9028beb35f47">Lumen Field</option>
    <option value="63e53d83294a9028beb35f48">M&T Bank Stadium</option>
    <option value="63e53d83294a9028beb35f49">Mercedes Benz Stadium</option>
    <option value="63e53d83294a9028beb35f4a">MetLife Stadium</option>
    <option value="63e53d83294a9028beb35f4b">Nissan Stadium</option>
    <option value="63e53d83294a9028beb35f4c">NRG Stadium</option>
    <option value="63e53d83294a9028beb35f4d">Paycor Stadium</option>
    <option value="63e53d83294a9028beb35f4e">Raymond James Stadium</option>
    <option value="63e53d83294a9028beb35f4f">SoFi Stadium</option>
    <option value="63e53d83294a9028beb35f50">Soldier Field</option>
    <option value="63e53d83294a9028beb35f51">State Farm Stadium</option>
    <option value="63e53d83294a9028beb35f52">TIAA Bank Field</option>
    <option value="63e53d83294a9028beb35f53">US Bank Stadium</option>
  </select>
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