import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import Attendance from "./contexts/AttendanceCreateFrom";
import Zoom from "./Zoom";
import { Link, useParams } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import StudAttendance from "./StudAttendance";
import ZoomStud from "./ZoomStud";

function StudRoom() {
  const [mode, setMode] = useState("room");
  const [students, setStudents] = useState("attendance");
  const displayroom = () => {
    setMode("room");
  };
  const { userId, roomId } = useParams();
  
  const displayattendance = () => {
    setStudents("attendance");
  };
  const displayZoom = () => {
    setStudents("zoom");
  };


  return (
    <>
      <Navbar userId = {userId} />
      <div className="flex flex-row ">
        <div
          className="flex flex-col space-y-5 w-1/5 bg-white border-2  text-black px-1 py-4 min-h-screen"
          
        >
          {/* Sidebar content here */}
          <ul className="flex flex-col space-y-5  ">
            <div className="bg-sky-400 rounded-xl text-white">
              <li className="">
                <a href="#" className=" flex flex-row items-center p-2 ">
                  <FaHome />

                  <button onClick={displayroom}>
                    <p className="ml-2"> Room</p>
                  </button>
                </a>
              </li>
            </div>

            <div className=" bg-slate-300 rounded-xl text-black">
              <li className="">
                <a href="#" className=" flex flex-row items-center p-2 ">
                  <RiDashboardFill />
                  <Link to="/dashboardstud">
                    <button >
                      <p className="ml-2 "> DashBoard</p>
                    </button>
                  </Link>
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-4/5 p-4 flex flex-row justify-center space-x-3">
          {/* Page content here */}
         
            <div className="w-4/5">
              <div className="flex flex-row space-x-5 ">
                
                <button
                  className="border-b-2  border-sky-400  font-Grish text-2xl text-orange-400"
                  onClick={displayattendance}
                >
                  {" "}
                  Attendance
                </button>
                <button
                  className="border-b-2  border-sky-400  font-Grish text-2xl text-orange-400"
                  onClick={displayZoom}
                >
                  {" "}
                  Zoom Link
                </button>
              </div>
              <div className="flex flex-col mt-5">
                {/* <button onClick={fetchAttendance}> */}
                {students === "attendance" && <StudAttendance userId = {userId} roomId = {roomId} />}
                {/* </button> */}
                {students === "zoom" && <ZoomStud userId = {userId} roomId = {roomId} />}
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default StudRoom;
