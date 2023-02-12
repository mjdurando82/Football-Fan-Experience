import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className='navbar'>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add-review'>Add Review</NavLink>
        <NavLink to='/about'>About Page</NavLink>
      </header>
    </nav>
  )
}

export default Nav