import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LandingPage from './pages/LandingPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ServicesSection } from './components/ServicesSection/ServicesSection.jsx'
import Hosting from './components/Hosting/Hosting.jsx'
const router = createBrowserRouter([
  {
    path: "/demo_focalx",
    element: <App />,
    children: [
      {
        path: "/demo_focalx",
        element: <LandingPage />,
        children: [
          {
            path: "/demo_focalx/services",
            element: <ServicesSection />
          },
          {
            path: "/demo_focalx/hosting",
            element: <Hosting />

          }
        ]
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// "react-slick": "^0.30.1",
// "slick-carousel": "^1.8.1",