import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import axios from "axios";

import CardStud from "./CardStud";
import { useParams } from "react-router-dom";

const DashboardStudent =() =>{

  const { userId } = useParams();
  const [rooms, setRooms]= useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        setLoading(true);        
        const headers = {
          "Content-Type": "application/json",
        };
        const apiUrl = import.meta.env.VITE_API_URL;
        
        const response = await axios.get(
          `${apiUrl}/api/rooms/student/${userId}`,
          
          {
            headers: headers,
            withCredentials: true,
          }
        );

        if (response.status === 200) {        
          setRooms(response.data.rooms)

        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);
    

  return (
    <div className="">
      <Navbar userId = {userId} />
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
          
        {
          rooms.map((room, index) => (
            <div key={index}>
              <CardStud userId = {userId} roomId ={room._id} name = {room.roomName} desc = {room.roomDescription} ></CardStud>
            </div>
          ))
        }
                  
        </div>
      </div>
    </div>
  );
}

export default DashboardStudent;
