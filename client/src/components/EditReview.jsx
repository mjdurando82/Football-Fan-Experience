import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

const BASE_URL = `http://localhost:3001`

const EditReview = () => {
  
  let { id } = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  
  
  let initialState = {
    stadium: '63e53d83294a9028beb35f36',
    name: '',
    gameAttended: '',
    stadiumRating: '',
    foodRating: '',
    seatSection: '',
    ticketPrice: '',
    parking: '',
    description: ''
  }
  const [review, setReview] = useState(initialState)
  
  const getReviewsById = async () => {
    const response = await axios.get(`${BASE_URL}/review/${id}`)
    console.log(response.data.review)
    setReview(response.data.review)
  }
  
  useEffect(() => {
    getReviewsById()
  },[])

  const [formState, setFormState] = useState(initialState)

  const [stadium, setStadium] = useState()

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
    setStadium(formState.stadium)
  }

  const handleUpdate = async () => {
    await axios.put(`${BASE_URL}/review/${id}`, formState)
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
placeholder={review.name}
/>
<label htmlFor="gameAttended">Game You Attended:</label>
<input
type="text"
id="gameAttended"
onChange={handleChange}
value={formState.gameAttended}
placeholder={review.gameAttended}
/>
<label htmlFor="stadiumRating">Stadium Rating 1-5:</label>
<input 
type="text"
id="stadiumRating"
onChange={handleChange}
value={formState.stadiumRating}
placeholder={review.stadiumRating}
/>
<label htmlFor="foodRating">Food Rating 1-5:</label>
<input
type="text"
id="foodRating"
onChange={handleChange}
value={formState.foodRating}
placeholder={review.foodRating}
/>
<label htmlFor="seatSection">Section You Sat In:</label>
<input
type="text"
id="seatSection"
onChange={handleChange}
value={formState.seatSection}
placeholder={review.seatSection}
/>
<label htmlFor="ticketPrice">Ticket Price:</label>
<input
type="text"
id="ticketPrice"
onChange={handleChange}
value={formState.ticketPrice}
placeholder={review.ticketPrice}
/> 
<label htmlFor="parking">Parking Rating: </label>
<input
type="text"
id="parking"
onChange={handleChange}
value={formState.parking}
placeholder={review.parking}
/> 
<label htmlFor="description">Comments</label>
<textarea
id="description"
cols="35"
rows="7"
onChange={handleChange}
value={formState.description}
placeholder={review.description}
></textarea>
<button type="save" onClick={()=>handleUpdate()}>Save</button>
</form>
)
}

export default EditReview