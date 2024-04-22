import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import '../Navbar.css'

// pages
import PageNotFound from '../PageNotFound'
import PublicFeed from '../../../pages/public-feed/public-feed'
import Search from '../../../pages/search/Search'
import CreatePost from '../../create-post'
import ProfilePage from '../../../pages/profile-page/profile-page'
import Settings from '../../../pages/settings/settings'

// layouts
import RootLayout from '../Layout/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PublicFeed />} />
      <Route path="search" element={<Search />} />
      <Route path="post" element={<CreatePost />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="settings" element={<Settings />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

export default function NavbarRouter() {
  return (
    <RouterProvider router={router} />
  )
}