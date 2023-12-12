import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Home from '../../07ReactRouter/src/components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "service",
        element: <Service/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
