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
      
    </form>
  )
}

export default AddReview