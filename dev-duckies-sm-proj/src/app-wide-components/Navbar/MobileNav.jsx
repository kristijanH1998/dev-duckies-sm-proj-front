import { NavLink } from 'react-router-dom'

export default function MobileNavbar() {
  return (
    <nav
      className='navbar is-fixed-bottom is-hidden-tablet'
      role='navigation'
    >
      <div className="navbar-brand">

        <NavLink to='/' className='navbar-item is-expanded is-block has-text-centered'>
          <span className="material-symbols-rounded">
            home
          </span>
          {/* <p className='is-size-7'>Home</p> */}
        </NavLink>

        <NavLink to="search" className="navbar-item is-expanded is-block has-text-centered">
          <span className="material-symbols-rounded">
            search
          </span>
          {/* <p className='is-size-7'>Search</p> */}
        </NavLink>

        <NavLink to='post' className='navbar-item is-expanded is-block has-text-centered'>
          <span className="material-symbols-rounded">
            add_box
          </span>
          {/* <p className='is-size-7'>Post</p> */}
        </NavLink>

        <NavLink to='profile' className='navbar-item is-expanded is-block has-text-centered'>
          <span className="material-symbols-rounded">
            person
          </span>
          {/* <p className='is-size-7'>Profile</p> */}
        </NavLink>

      </div>
    </nav>
  )
}