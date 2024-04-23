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
        </NavLink>

        <NavLink to='post' className='navbar-item is-expanded is-block has-text-centered'>
          <span className="material-symbols-rounded">
            add_box
          </span>
        </NavLink>

        <NavLink to='profile' className='navbar-item is-expanded is-block has-text-centered'>
          <span className="material-symbols-rounded">
            person
          </span>
        </NavLink>

        <NavLink to='settings' className='navbar-item is-expanded is-block has-text-centered'>
          <span className="material-symbols-rounded">
            settings
          </span>
        </NavLink>

      </div>
    </nav>
  )
}