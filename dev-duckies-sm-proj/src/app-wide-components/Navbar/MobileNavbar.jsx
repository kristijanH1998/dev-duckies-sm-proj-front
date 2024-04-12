import { NavLink } from 'react-router-dom'

export default function MobileNavbar() {
  return (
    <>
      <nav
        className='navbar is-fixed-bottom is-hidden-tablet'
        role='navigation'
      >
        <div className="navbar-brand">

          <NavLink
            to='/'
            className='navbar-item is-expanded is-block has-text-centered'
          >
            <i className="fa-solid fa-house"></i>
            <p className='is-size-7'>Home</p>
          </NavLink>

          <NavLink to="search" className="navbar-item is-expanded is-block has-text-centered">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p className='is-size-7'>Search</p>
          </NavLink>
          
          <NavLink
            to='post'
            className='navbar-item is-expanded is-block has-text-centered'
          >
            <i className="fa-solid fa-square-plus"></i>
            <p className='is-size-7'>Post</p>
          </NavLink>

          <NavLink
            to='profile'
            className='navbar-item is-expanded is-block has-text-centered'
          >
            <i className="fa-solid fa-user"></i>
            <p className='is-size-7'>Profile</p>
          </NavLink>

        </div>
      </nav>
    </>
  )
}