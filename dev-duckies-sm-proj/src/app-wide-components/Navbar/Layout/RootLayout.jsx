import { useLocalStorage } from "@uidotdev/usehooks"
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import MobileNavbar from '../MobileNav'

export default function RootLayout() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useLocalStorage("theme", preference)

  return (
    <div className="grid" data-theme={theme ? "dark" : "light"}>
      <Sidebar />

      <div className="cell is-col-span-3">
        <Outlet />
      </div>

      <MobileNavbar />
    </div>
  )
}