import axios from 'axios'
import Reviews from './Reviews'
import AddReview from './AddReview'
import StadiumList from "./StadiumList"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"

const BASE_URL = `http://localhost:3001`

const Home = () => {
  const [stadiums, setStadiums] = useState([])
  const [reviews, setReviews] = useState([])
  
  useEffect(() => {
    const getStadiums = async () => {
      const response = await axios.get(`${BASE_URL}/stadiums`)
      console.log(response.data.stadiums)
      setStadiums(response.data.stadiums)
    }
    getStadiums()
  }, [])

  const postReview = async () => {
    try {
      let res = await axios.post('http://localhost:3001/reviews')
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <div>
      <h2>Stadiums</h2>
    <div className="stadiums">
      <section className="container-grid"></section>
      {stadiums.map((stadium) => (
        <Link to="/stadium/:id/reviews">
          <StadiumList key={stadium.name} name={stadium.name} location={stadium.location} imageUrl={stadium.imageUrl} homeTeam={stadium.homeTeam} capacity={stadium.capacity} fieldSurface={stadium.fieldSurface} />
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Home 