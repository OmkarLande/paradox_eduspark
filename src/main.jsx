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
    path: "/dashboard/:userId",
    element : <DashboardMentor/>
  },
  {
    path: "/dashboardstud/:userId",
    element : <DashboardStudent/>
  },
  {
    path: "/students/:userId/:roomId",
    element : <Students/>
  },
  {
    path: "/studroom/:userId/:roomId",
    element : <StudRoom/>
  },
  {
    path: "/create-room/:userId",
    element : <RoomMentor/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
