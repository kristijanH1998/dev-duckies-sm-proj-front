
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import MobileNavbar from '../MobileNav'

export default function RootLayout() {
  return (
    <div className="grid">
      <Sidebar />

      <div className="cell is-col-span-3">
        <Outlet />
      </div>

      <MobileNavbar />
    </div>
  )
}