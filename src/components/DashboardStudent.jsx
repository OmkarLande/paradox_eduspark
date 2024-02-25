import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import axios from "axios";

import CardStud from "./CardStud";
import { useParams } from "react-router-dom";

const DashboardStudent =() =>{

  const { email } = useParams();
  const [rooms, setRooms]= useState([])
  const [loading, setLoading] = useState(true);
  const apr= []
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const authToken = document.cookie
        ? document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1]
        : null;
  
        if (authToken) {
          headers["Authorization"] = `Bearer ${authToken.trim()}`;
        }
        
        const headers = {
          "Content-Type": "application/json",
        };
  
        const response = await axios.get(
          `http://localhost:4000/rooms/student`,
          
          {
            headers: headers,
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          const enrolledStudents = response.data.rooms.map(room => ({
            name: room.roomName,
            desc: room.roomDescription,
            id: room.roomId
          }));
          console.log(enrolledStudents)
          setRooms(enrolledStudents)

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
  }, []);
    

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
          
        {rooms.map((student, index) => (
              <li key={student.id}><CardStud rId ={student.id} name = {student.name} desc = {student.desc}/></li>
            ))}
                  
        </div>
      </div>
    </div>
  );
}

export default DashboardStudent;
