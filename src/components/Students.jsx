import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import RoomMentor from "./RoomMentor";
import { MdPersonAdd } from "react-icons/md";
import Attendance from "./AttendanceCreateFrom";
import Zoom from "./Zoom";
import { Link } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";

function Students() {
  const [mode, setMode] = useState("room");
  const [students, setStudents] = useState("exist");
  const displayroom = () => {
    setMode("room");
  };
  
  const displayexist = () => {
    setStudents("exist");
  };
  const displaypending = () => {
    setStudents("pending");
  };
  const displayattendance = () => {
    setStudents("attendance");
  };
  const displayZoom = () => {
    setStudents("zoom");
  };

  return (
    <>
      <Navbar />
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
                  <Link to="/dashboard">
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
              <div className="flex flex-row space-x-5">
                <button
                  className="border-b-2  border-sky-400  font-Grish text-2xl text-orange-400"
                  onClick={displayexist}
                >
                  Existing Students{" "}
                </button>
                <button
                  className="border-b-2  border-sky-400  font-Grish text-2xl text-orange-400"
                  onClick={displaypending}
                >
                  {" "}
                  Pending Students
                </button>
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
                {students === "exist" && (
                  <div>
                    <ul className="">
                      <li className="text-xl w-5/5 p-4 bg-slate-200 rounded-xl font-semibold">
                        Siddhesh
                      </li>
                    </ul>
                  </div>
                )}{" "}
                {students === "pending" && (
                  <div>
                    <ul className="">
                      <li className="text-xl flex flex-row justify-between items-center w-5/5 p-3 bg-slate-200 rounded-xl font-semibold">
                        <p>Siddhesh</p>
                        <p>Class: DSA</p>
                        <MdPersonAdd className="w-7 h-10 text-sky-400" />
                      </li>
                    </ul>
                  </div>
                )}
                {students === "attendance" && <Attendance />}
                {students === "zoom" && <Zoom />}
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Students;
