import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./components/Login";
import Signup from "./components/Signup"
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardMentor from './components/DashboardMentor';
import DashboardStudent from './components/DashboardStudent';
import Students from './components/Students';
import StudRoom from './components/StudRoom';
import RoomMentor from './components/RoomMentor';

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
  {
    path: "/studroom",
    element : <StudRoom/>
  },
  {
    path: "/create-room",
    element : <RoomMentor/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
