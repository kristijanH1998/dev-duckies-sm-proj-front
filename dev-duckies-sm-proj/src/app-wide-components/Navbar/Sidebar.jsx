import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="cell is-hidden-mobile">
      <nav id='sidebar'>

        <NavLink to="/" className='sidebar-item'>
          <span class="icon-text">
            <span class="icon">
              <i class="fa-solid fa-house"></i>
            </span>
            <span>Home</span>
          </span>
        </NavLink>

        <NavLink to="search" className='sidebar-item'>
          <span class="icon-text">
            <span class="icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <span>Search</span>
          </span>
        </NavLink>

        <NavLink to="post" className='sidebar-item'>
          <span class="icon-text">
            <span class="icon">
              <i class="fa-solid fa-square-plus"></i>
            </span>
            <span>Post</span>
          </span>
        </NavLink>

        <NavLink to="profile" className='sidebar-item'>
          <span class="icon-text">
            <span class="icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <span>Profile</span>
          </span>
        </NavLink>

      </nav>
    </div>
  )
}