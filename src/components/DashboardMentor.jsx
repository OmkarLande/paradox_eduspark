import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Card from "./Card";
import RoomMentor from "./RoomMentor";
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DashboardMentor = () => {
  const { email } = useParams()
  const [mode, setMode] = useState("card");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          setLoading(true);

          const response = await axios.get(`http://localhost:4000/rooms/admin/${email}`, {
              withCredentials: true
          });

          // Check if the request was successful (status code 2xx)
          if (response.status >= 200 && response.status < 300) {
            const responseData = response.data;
            // Extract rooms from the response data
            const rooms = responseData.rooms;
            // Check if there are rooms available
            if (rooms && rooms.length > 0) {
                // Set the first room's name and description
                setRoomName(rooms[0].roomName);
                setRoomDescription(rooms[0].roomDescription);
            } else {
                setError('No rooms found');
            }
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};

  fetchData();
}, [email]);

  const displayCard = () => {
    setMode("card");
  };

  const displayForm = () => {
    setMode("form");
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row ">
        <div
          className="flex flex-col space-y-5 w-1/5 bg-white border-2  text-black px-1 py-4 "
          style={{ height: "100vh" }}
        >
          <ul className="flex flex-col space-y-5  ">
            <div className="bg-sky-400 rounded-xl text-white">
              <li className="">
                <a href="#" className="flex flex-row items-center p-2 ">
                  <FaHome />
                  <button onClick={displayCard}>
                    <p className="ml-2"> ExistingRoom</p>
                  </button>
                </a>
              </li>
            </div>

            <div className="hover:shadow-md rounded-xl">
              <li className="">
                <a href="#" className="flex flex-row items-center p-2 ">
                  <IoMdAddCircle />
                  <button onClick={displayForm}>
                    <p className="ml-2"> Add New Room</p>
                  </button>
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-4/5 p-4 flex flex-row justify-center space-x-3">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            (mode === "card" && <Card data={data} />) || (mode === "form" && <RoomMentor />)
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardMentor;
