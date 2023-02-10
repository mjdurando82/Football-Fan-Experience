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
      console.log(response)
      setStadiums(response)
    }
    getStadiums()
  }, [])

  return(
    <div className="stadiums">
      <h2>Stadiums</h2>
      <section className="container-grid"></section>
      {stadiums.map((stadium) => (
        <StadiumList name={stadium.name} location={stadium.location} image={stadium.imageUrl} homeTeam={stadium.homeTeam} capacity={stadium.capacity} fieldSurface={stadium.fieldSurface}/>
      ))}
    </div>
  )
}

export default Home 