import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/home";
import About from './pages/about';
import Menu from './pages/menu';
import NotFoundpages from './pages/NotFoundpages';
import RouteLeout from './Leaout/RouteLeout';

function App() {

  const routes = createBrowserRouter([

    {
      path: "/",
      element: <RouteLeout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
      ]
    },
    {
      path: "*",
      element: <NotFoundpages />,
    }
  ],

{
  basename: "/laycha-/"

}
);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App