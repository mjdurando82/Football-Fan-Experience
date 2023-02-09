import { NavLink } from 'react-router-dom'

const Nav = () => {

  return(
    <header>
      <nav className="navbar">
        <NavLink to='/'>Stadium</NavLink>
        <NavLink to='/add-review'>Add Review</NavLink>
        <NavLink to='/about'>About</NavLink>
    </nav>
    </header>
  )
}

export default Nav