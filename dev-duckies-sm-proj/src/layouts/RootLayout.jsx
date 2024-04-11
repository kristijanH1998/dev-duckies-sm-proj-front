import { Outlet } from "react-router-dom"
import Sidebar from '../app-wide-components/Navbar/Sidebar'
import MobileNavbar from '../app-wide-components/Navbar/MobileNavbar'

export default function RootLayout() {
  return (
    <>
      <div className="grid">

        <div className="cell is-hidden-mobile">
          <Sidebar />
        </div>

        <div className="cell is-col-span-3">
          <main>
            <Outlet />
          </main>
        </div>
        
        <MobileNavbar />

      </div>
    </>
  )
}
