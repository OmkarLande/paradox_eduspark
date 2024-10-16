import { useState, useEffect } from 'react';
import React from "react";
import logo from "/images/Logo.svg"
import avatar from '/images/avatar.svg';
import { Link } from "react-router-dom";
import axios from 'axios'

function Navbar(props) {
  const userId = props.userId

  const [loading, setLoading] = useState(true)
  const [photourl, setPhotourl] = useState(null);

  useEffect(() => {
    const fetchAvatar = async() => {
      try {
        setLoading(true);
        const headers = {
          "Content-Type": "application/json",
        };
        const apiUrl = import.meta.env.VITE_API_URL;

        const response = await axios.get(
          `${apiUrl}/api/user/${userId}`,
          {
            headers: headers,
            withCredentials: true,
          }
        );
        setPhotourl(response.data.avatarUrl);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pending students:", error);
        setLoading(false);
      }
    }
  
    fetchAvatar()
  }, [userId])
  

  return (
    <div className="navbar flex justify-center items-center bg-white shadow-lg">
      <div className="flex-1 w-max">
        <a className="  ">
          <img src={logo} className="w-48" alt="" />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="avatar online">
              <div className=" rounded-full">
              <img src={photourl || avatar} alt="User Avatar" />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52"
          >
            <a>
              <Link to='/'>
              <button className="btn btn-error w-full py-0 text-white">
                LogOut
                </button>
                </Link>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
