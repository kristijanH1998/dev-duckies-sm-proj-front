import { Outlet } from "react-router-dom"
import Sidebar from '../app-wide-components/Navbar/Sidebar'
import MobileNavbar from '../app-wide-components/Navbar/MobileNavbar'

export default function RootLayout() {
  return (
    <div className="grid">
      <Sidebar />

      <div className="cell is-col-span-3" id="outlet">
        <Outlet />
      </div>

      <MobileNavbar />
    </div>
  )
}