import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Card from "./Card";
import RoomMentor from "./RoomMentor";
import { Link } from "react-router-dom";

const DashboardMentor = () => {
  const [mode, setMode] = useState("card");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchData = async () => {
      console.log(1)
      try {
        setLoading(true);
        console.log(2)

        const authToken = localStorage.getItem('token');
        console.log(authToken)
        if (!authToken) {
          throw new Error('No authToken found in localStorage');
        }

        console.log(4)
        const response = await fetch('http://localhost:4000/rooms/admin/sona@example.com', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result)
        setData(result);
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
            (mode === "card" && <Card data={data} />) || (mode === "form" && <RoomMentor />)
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardMentor;
