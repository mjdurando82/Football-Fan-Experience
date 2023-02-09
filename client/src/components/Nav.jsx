import { NavLink } from 'react-router-dom'

const Nav = () => {

  return(
    <nav className="navbar">
      <h4>Football Fan Experience</h4>
      <div>
        <NavLink to='/'>Stadium</NavLink>
        <NavLink to='/add-review'>Add Review</NavLink>
        <NavLink to='/about'>About</NavLink>
      </div>
    </nav>
  )
}

export default Nav