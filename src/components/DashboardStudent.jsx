import React from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Card from "./Card";
import RoomMentor from "./RoomMentor";

const DashboardStudent =() =>{
    

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
                  <button ><p className="ml-2"> My Classrooms</p></button>     
                </a>
              </li>
            </div>

            
          </ul>
        </div>
        <div className="w-4/5 p-4 flex flex-row  space-x-3">
          <Card/>
                  
        </div>
      </div>
    </div>
  );
}

export default DashboardStudent;
