import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/HomePage/Homepage';
import Timeline from './pages/Timeline/Timeline';
import Stats from './pages/Stats/Stats';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>

      },
      {
        path: "/stats",
        element: <Stats></Stats>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
