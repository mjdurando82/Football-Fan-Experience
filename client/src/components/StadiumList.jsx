const StadiumList = (props) => {

  return(
    <div className="stadiums">
      <div className="image-wrapper">
        <img src={props.imageUrl} alt='stadium'></img>
      </div>
      <div className="stadium-info">
        <h3>{props.name}</h3>
        <h5>{props.location}</h5>
        <h5>Home of the {props.homeTeam}</h5>
        <p> capacity: {props.capacity}</p>
        <p>Field Surface: {props.fieldSurface}</p>
      </div>
    </div>
  )
}

export default StadiumList