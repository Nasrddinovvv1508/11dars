import React from 'react'
import { DatePicker } from 'antd';
import Sidebar from './Sidebar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MainLayout from './layout/MainLayout';

function App() {
  let routes = createBrowserRouter([
    {
      path: `/`,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: `/about`,
          element: <About />
        },
        {
          path: `/contact`,
          element: <Contact />
        },
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App