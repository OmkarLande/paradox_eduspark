import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Card from "./Card";
import RoomMentor from "./RoomMentor";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DashboardMentor = () => {
  const { userId } = useParams();
  const [mode, setMode] = useState("card");
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const apiUrl = import.meta.env.VITE_API_URL;

        const response = await axios.get(`${apiUrl}/api/rooms/admin/${userId}`, {
          withCredentials: true
        });
        // console.log(response.data)
        if (response.status === 200) {
          setRooms(response.data.rooms);
          // console.log(response) // Set rooms data from the response
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
  }, []);

  const displayCard = () => {
    setMode("card");
  };

  const displayForm = () => {
    setMode("form");
  };

  return (
    <div className="">
      <Navbar userId = {userId} />
      <div className="flex flex-row ">
        <div
          className="flex flex-col space-y-5 w-1/5 bg-white border-2  text-black px-1 py-4 min-h-screen"
          // style={{ height: "150vh" }}
        >
          <ul className="flex flex-col space-y-5  ">
            <div className="bg-sky-400 rounded-xl text-white">
              <li className="">
                <div href="#" className="flex flex-row items-center p-2 ">
                  <FaHome />
                  <button className="ml-2"onClick={displayCard}>
                    ExistingRoom
                  </button>
                </div>
              </li>
            </div>

            <div className="hover:shadow-md rounded-xl">
              <li className="">
                <div className="flex flex-row items-center p-2 ">
                  <IoMdAddCircle />
                  <Link to = {`/create-room/${userId}`} className="ml-2" >
                     Add New Room
                  </Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-4/5 p-4 flex flex-row flex-wrap justify-center items-center space-x-3">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            (mode === "card" && rooms.map(room => (
              <div key={room._id}>
              {/* {console.log(room)} */}
              {/* {console.log(room._id, room.roomName)} */}
                <Card userId = {userId} roomId = {room._id} name = {room.roomName} desc = {room.roomDescription}></Card>
              </div>
            ))) || (mode === "form" && <RoomMentor />)
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardMentor;
