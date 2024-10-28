import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs.jsx';
import BlogDetails from './Pages/BlogDetails/BlogDetails.jsx';
import Newsletter from './Pages/Newsletter/Newsletter.jsx';


const routes=createBrowserRouter (
  [
    {
      path:'/',
      element:<Blogs />
    },
{
  path:'/blogdetail',
  element:<BlogDetails />
},
{
  path:'newsletter',
  element:<Newsletter />
}
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routes} />
  </StrictMode>,
)
