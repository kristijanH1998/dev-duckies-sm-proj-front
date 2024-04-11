import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './App.css'

// pages
import PublicFeed from './pages/public-feed/public-feed';
import ProfilePage from "./pages/profile-page/profile-page";
import NotFound from './pages/not-found/NotFound'
import Search from "./pages/search/Search";
import CreatePost from "./app-wide-components/create-post";

// layouts
import RootLayout from "./layouts/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PublicFeed />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="search" element={<Search />} />
      <Route path="post" element={<CreatePost />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}