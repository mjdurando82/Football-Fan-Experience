import axios from 'axios'
import StadiumList from "./StadiumList"
import { Link } from 'react-router-dom'
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
    <div className='home'>
      <h1>Stadiums</h1>
    <div className="stadiums" key={stadiums.name}>
      {stadiums.map((stadium) => (
        <Link to= {`/stadium/${stadium._id}/reviews`}>
          <StadiumList key={stadium.name} name={stadium.name} location={stadium.location} imageUrl={stadium.imageUrl} homeTeam={stadium.homeTeam} capacity={stadium.capacity} fieldSurface={stadium.fieldSurface} />
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Home 