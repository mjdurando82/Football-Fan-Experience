import axios from "axios"
import { useState } from "react"
const BASE_URL = `http://localhost:3001`

const AddReview = (props) => {
  const initialState = {
    stadium: '',
    name: '',
    gameAttended: '',
    stadiumRating: '',
    foodRating: '',
    parking: '',
    seatSection: '',
    ticketPrice: '',
    description: '',
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/stadium/:id/reviews', formState)
    setFormState(initialState)
    props.getReviews()
  }

  const postReview = async () => {
    try {
      let res = await axios.post(`${BASE_URL}reviews`)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h3>Review</h3>
      <label htmlFor="stadiumChoice">Pick a Stadium</label>
  <select id="stadium" onChange={handleChange} value={formState.stadium}>
    <option value="63e53d83294a9028beb35f36">Acrisure Stadium</option>
    <option value="63e53d83294a9028beb35f37">Allegiant Stadium</option>
    <option value="63e53d83294a9028beb35f38">Arrowhead Stadium</option>
    <option value="63e53d83294a9028beb35f39">AT&T Stadium</option>
    <option value="63e53d83294a9028beb35f3a">Bank of America Stadium</option>
    <option value="saints">Ceasars Superdome</option>
    <option value="broncos">Empower Field</option>
    <option value="commanders">FedEx Field</option>
    <option value="browns">First Energy Stadium</option>
    <option value="lions">Ford Field</option>
    <option value="pats">Gillette Stadium</option>
    <option value="fins">Hard Rock Stadium</option>
    <option value="bills">Highmark Stadium</option>
    <option value="packers">Lambeau Field</option>
    <option value="49ers">Levi Stadium</option>
    <option value="eagles">Lincoln Financial Field</option>
    <option value="colts">Lucas Oil Stadium</option>
    <option value="seahawks">Lumen Field</option>
    <option value="ravens">M&T Bank Stadium</option>
    <option value="falcons">Mercedes Benz Stadium</option>
    <option value="ny">MetLife Stadium</option>
    <option value="titans">Nissan Stadium</option>
    <option value="texans">NRG Stadium</option>
    <option value="bengals">Paycor Stadium</option>
    <option value="buccanneers">Raymond James Stadium</option>
    <option value="la">SoFi Stadium</option>
    <option value="bears">Soldier Field</option>
    <option value="cardinals">State Farm Stadium</option>
    <option value="jaguars">TIAA Bank Field</option>
    <option value="vikings">US Bank Stadium</option>
  </select>
  <label htmlFor="name">Your Name:</label>
  <input
    type="text"
    id="name"
    onChange={handleChange}
    value={formState.name}
  />
    <label htmlFor="gameAttended">Game You Attended:</label>
  <input
    type="text"
    id="gameAttended"
    onChange={handleChange}
    value={formState.gameAttended}
  />
    <label htmlFor="stadiumRating">Stadium Rating 1-5</label>
  <input
    type="text"
    id="stadiumRating"
    onChange={handleChange}
    value={formState.stadiumRating}
  />
    <label htmlFor="foodRating">Food Rating 1-5:</label>
  <input
    type="text"
    id="foodRating"
    onChange={handleChange}
    value={formState.foodRating}
  />
    <label htmlFor="seatSection">Section You Sat In:</label>
  <input
    type="text"
    id="seatSection"
    onChange={handleChange}
    value={formState.seatSection}
  />
    <label htmlFor="ticketPrice">Ticket Price:</label>
  <input
    type="text"
    id="ticketPrice"
    onChange={handleChange}
    value={formState.ticketPrice}
  /> 
  <label htmlFor="description">Comments</label>
  <textarea
    id="description"
    cols="30"
    rows="50"
    onChange={handleChange}
    value={formState.description}
  ></textarea>
  <button type="submit" onSubmit={postReview}>Submit</button>
    </form>
  )
}

export default AddReview