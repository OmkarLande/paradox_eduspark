import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./components/Login";
import Signup from "./components/Signup"
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardMentor from './components/DashboardMentor';
import DashboardStudent from './components/DashboardStudent';
import Students from './components/Students';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Login/> ,
  },
  {
    path: "/signup",
    element:<Signup/> ,
  },
  {
    path: "/dashboard/:email",
    element : <DashboardMentor/>
  },
  {
    path: "/dashboardstud",
    element : <DashboardStudent/>
  },
  {
    path: "/students",
    element : <Students/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
