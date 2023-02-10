import axios from "axios"
import { useState } from "react"

const AddReview = (props) => {
  const initialState = {
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
    await axios.post('http://localhost:3001/review', setFormState)
    setFormState(initialState)
  }

  return(
    <form onSubmit={handleSubmit}>
      <h3>Review</h3>
      <label htmlFor="stadiumChoice">Pick a Stadium</label>
  <select id="issueType" onChange={handleChange} value={formState.issueType}>
    <option value="steelers">Acrisure Stadium</option>
    <option value="raiders">Allegiant Stadium</option>
    <option value="chiefs">Arrowhead Stadium</option>
    <option value="cowboys">AT&T Stadium</option>
    <option value="panthers">Bank of America Stadium</option>
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
  <label htmlFor="subject">Subject:</label>
  <input
    type="text"
    id="subject"
    onChange={handleChange}
    value={formState.subject}
  />
  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    cols="30"
    rows="10"
    onChange={handleChange}
    value={formState.message}
  ></textarea>
  <button type="submit">Send</button>
    </form>
  )
}

export default AddReview