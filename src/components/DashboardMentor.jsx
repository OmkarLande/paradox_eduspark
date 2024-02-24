import React, {useState } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Card from "./Card";
import RoomMentor from "./RoomMentor";

const DashboardMentor =() =>{
    const [mode, setMode] = useState("card");

    const displaycard = () => {
        setMode("card")
    }
    const displayform = () => {
        setMode("form")
    }

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row ">
        <div
          className="flex flex-col space-y-5 w-1/5 bg-white border-2  text-black px-1 py-4 "
          style={{ height: "100vh" }}
        >
          {/* Sidebar content here */}
          <ul className="flex flex-col space-y-5  ">
            <div className="bg-sky-400 rounded-xl text-white">
              <li className="">
                <a href="#" className=" flex flex-row items-center p-2 ">
                  <FaHome />
                  <button onClick={displaycard}><p className="ml-2"> ExistingRoom</p></button>     
                </a>
              </li>
            </div>

            <div className="hover:shadow-md rounded-xl">
              <li className="">
                <a href="#" className=" flex flex-row items-center p-2 ">
                <IoMdAddCircle />
                  <button onClick={displayform}><p className="ml-2"> Add New Room</p></button>                 
                  
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-4/5 p-4 flex flex-row justify-center space-x-3">
          {/* Page content here */}
                  {mode === "card" ? <Card /> : <RoomMentor />}
                  
        </div>
      </div>
    </div>
  );
}

export default DashboardMentor;
