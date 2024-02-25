import React, { useState } from "react";
import axios from "axios";

function RoomMentor() {
  const [roomname, setRoomName] = useState("");
  const [roomdes, setRoomDes] = useState("");
  const [age, setAge] = useState(0);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      roomName: roomname,
      roomDescription: roomdes,
      ageGroup: age,
    };
    
    try {
      const authToken = document.cookie
      ? document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1]
      : null;
      
      if (authToken) {
        headers["Authorization"] = `Bearer ${authToken.trim()}`;
      }
      console.log(authToken);
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "http://localhost:4000/rooms/create",
        formData,
        {
          headers: headers,
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Data successfully submitted");
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 shadow-xl p-3 px-5 mt-10"
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
          <label className="block text-lg text-black " htmlFor="description">
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
  );
}

export default RoomMentor;
