import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Link, useParams, useNavigate } from "react-router-dom";

function RoomMentor() {
  const { userId  } = useParams();
  const [roomname, setRoomName] = useState("");
  const [roomdes, setRoomDes] = useState("");
  const [age, setAge] = useState(0);
  const [mode, setMode] = useState("card");

  const navigate = useNavigate()
  // console.log(email);

  const displayCard = () => {
    setMode("card");
  };

  const displayForm = () => {
    setMode("form");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      roomName: roomname,
      roomDescription: roomdes,
      ageGroup: age,
    };

    try {
      
      const headers = {
        "Content-Type": "application/json",
      };
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await axios.post(
        `${apiUrl}/api/rooms/create`,
        formData,
        {
          headers: headers,
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Data successfully submitted");
        window.alert('Room Has Been Created!')
        navigate(`/dashboard/${userId}`)
        // Perform any necessary action after successful submission
      } else {
        console.error(
          "Failed to submit data. Server returned:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <Navbar userId ={userId} />
      <div className="flex flex-row">
        <div
          className="flex flex-col space-y-5 w-1/5 bg-white border-2  text-black px-1 py-4 "
          style={{ height: "100vh" }}
        >
          <ul className="flex flex-col space-y-5  ">
            <div className="bg-sky-400 rounded-xl text-white">
              <li className="">
                <div href="#" className="flex flex-row items-center p-2 ">
                  <FaHome />
                  <button className="ml-2" onClick={displayCard}>
                    ExistingRoom
                  </button>
                </div>
              </li>
            </div>

            <div className="hover:shadow-md rounded-xl">
              <li className="">
                <div className="flex flex-row items-center p-2 ">
                  <IoMdAddCircle />
                  <Link to="/create-room" className="ml-2">
                    Add New Room
                  </Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 shadow-xl p-3 px-5 mt-10 ml-64"
            style={{ width: "460px" }}
          >
            <h1 className="text-center text-4xl font-Grish text-orange-400">
              New Room Creation
            </h1>
            <div className="mb-6 pt-3 flex flex-col mt-10 ">
              <label className="block text-lg text-black " htmlFor="name">
                Room Name
              </label>
              <input
                onChange={(e) => {
                  setRoomName(e.target.value);
                }}
                type="text"
                id="name"
                placeholder="Enter a name for the room"
                className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
              />
            </div>
            <div className="mb-6 pt-3 flex flex-col mt-10 ">
              <label
                className="block text-lg text-black "
                htmlFor="description"
              >
                Room Description
              </label>
              <input
                onChange={(e) => {
                  setRoomDes(e.target.value);
                }}
                type="text"
                id="description"
                placeholder="Enter a description for the room"
                className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
              />
            </div>
            <div className="m-0 pt-3">
              <label className="block text-black text-lg" htmlFor="password">
                Age Group
              </label>
              <input
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type="number"
                id="number"
                placeholder="Enter age of the Students"
                className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
              />
            </div>

            <button
              className="bg-orange-400 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Create room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoomMentor;
