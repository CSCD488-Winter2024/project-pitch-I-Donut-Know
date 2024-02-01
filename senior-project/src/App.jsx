import React from 'react'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Belligol from './pages/Belligol'
import Team from './pages/Team'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Belligol',
    element: <Belligol />,
  
  },
  {
    path: '/Team',
    element: <Team />,
  },
  
  {
    path: '*',
    element: <ErrorPage />,
  },
  
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App