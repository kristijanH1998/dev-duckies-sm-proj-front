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
import Register from "../../../pages/register-page/register"
import LoginPage from "../../../pages/login/login-page"
import ForgotPassword from "../../../pages/forgot-password/forgot-password"

// layouts
import RootLayout from '../Layout/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="home" element={<RootLayout />}>
        <Route index path="feed" element={<PublicFeed />} />
        <Route path="search" element={<Search />} />
        <Route path="post" element={<CreatePost />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="forgotpw" element={<ForgotPassword />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<LoginPage />} />
    </>
  )
);

export default function NavbarRouter() {
  return (
    <RouterProvider router={router} />
  )
}