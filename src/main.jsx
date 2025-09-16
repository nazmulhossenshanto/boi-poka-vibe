import { StrictMode } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root'
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
