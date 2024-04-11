import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <section className="section">
      <aside className="menu" id='sidebar'>

        <NavLink to="/" className="sidebar-item">
          <span className="icon-text">
            <span className="icon">
              <i className="fa-solid fa-house"></i>
            </span>
            <span>Home</span>
          </span>
        </NavLink>

        <NavLink to="search" className="sidebar-item">
          <span className="icon-text">
            <span className="icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <span>Search</span>
          </span>
        </NavLink>

        <NavLink to="post" className="sidebar-item">
          <span className="icon-text">
            <span className="icon">
              <i className="fa-regular fa-square-plus"></i>
            </span>
            <span>Post</span>
          </span>
        </NavLink>

        <NavLink to="profile" className="sidebar-item">
          <span className="icon-text">
            <span className="icon">
              <i className="fa-regular fa-user"></i>
            </span>
            <span>Profile</span>
          </span>
        </NavLink>

      </aside>
    </section>
  )
}