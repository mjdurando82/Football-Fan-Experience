import axios from 'axios'
import { Link } from 'react-router-dom'
import StadiumList from "./StadiumList"
import { useEffect, useState } from "react"
const BASE_URL = `http://localhost:3001`

const Home = () => {
  const [stadiums, setStadiums] = useState([])

  useEffect(() => {
    const getStadiums = async () => {
      const response = await axios.get(`${BASE_URL}/stadiums`)
      setStadiums(response.data.stadiums)
    }
    getStadiums()
  }, [])

  return(
    <div className="stadiums">
      <h2>Stadiums</h2>
      <section className="container-grid"></section>
      {stadiums.map((stadium) => (
        <Link to="/stadium/:id/reviews">
          <StadiumList key={stadium.name} name={stadium.name} location={stadium.location} imageUrl={stadium.imageUrl} homeTeam={stadium.homeTeam} capacity={stadium.capacity} fieldSurface={stadium.fieldSurface}/>
        </Link>
      ))}
    </div>
  )
}

export default Home 