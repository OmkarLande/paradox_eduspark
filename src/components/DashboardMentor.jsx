import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Card from "./Card";
import RoomMentor from "./RoomMentor";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DashboardMentor = () => {
  const { email } = useParams();
  const [mode, setMode] = useState("card");
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:4000/rooms/admin/${email}`, {
          withCredentials: true
        });

        if (response.status === 200) {
          setRooms(response.data.rooms); // Set rooms data from the response
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
                  <Link to = '/create-room' className="ml-2" >
                     Add New Room
                  </Link>
                </div>
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
            (mode === "card" && rooms.map(room => (
              <div key={room._id}>
                <Card name= {room.roomName} desc = {room.roomDescription}></Card>
              </div>
            ))) || (mode === "form" && <RoomMentor />)
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardMentor;
