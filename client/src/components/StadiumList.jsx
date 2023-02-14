const StadiumList = (props) => {

  return(
    <div className="stadiums">
      <div className="stadium-info">
        <h3>{props.name}</h3>
        <img src={props.imageUrl} alt='stadium'></img>
        <h5>{props.location}</h5>
        <h5>Home Team: {props.homeTeam}</h5>
        <h5> Capacity: {props.capacity}</h5>
        <h5>Field Surface: {props.fieldSurface}</h5>
      </div>
    </div>
  )
}

export default StadiumList