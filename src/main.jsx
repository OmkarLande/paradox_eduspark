import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./components/Login";
import Signup from "./components/Signup"
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Login/> ,
  },
  {
    path: "/signup",
    element:<Signup/> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
