import axios from 'axios'
import StadiumList from "./StadiumList"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"

const Home = () => {
  const [stadiums, setStadiums] = useState([])
  
  const getStadiums = async () => {
    const response = await axios.get(`/api/stadiums`)
    setStadiums(response.data.stadiums)
  }

  useEffect(() => {
    getStadiums()
  }, [])

if(stadiums.length > 0){
  return(
    <div>
      <h1>Stadiums</h1>
    <div className="stadiums">
      {stadiums.map((stadium) => (
        <Link to= {`/stadium/${stadium._id}/reviews`}>
          <StadiumList key={stadium.name} name={stadium.name} location={stadium.location} imageUrl={stadium.imageUrl} homeTeam={stadium.homeTeam} capacity={stadium.capacity} fieldSurface={stadium.fieldSurface} />
        </Link>
      ))}
    </div>
    </div>
  )
} 
}

export default Home 