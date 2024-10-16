import React, { useState, useEffect } from "react";
import axios from "axios";
import Zoomlogo from '../../public/ZOOMlogo.png';

const ZoomStud = (props) => {
  const [meetLinks, setMeetLinks] = useState('');
  const roomId = props.roomId;
  const userId = props.userId

  useEffect(() => {
    const fetchMeetLinks = async () => {
      try {
      //  const authToken = document.cookie
      // ? document.cookie
      // .split("; ")
      // .find((row) => row.startsWith("token="))
      // ?.split("=")[1]
      // : null;

      // if (authToken) {
      //   headers["Authorization"] = `Bearer ${authToken.trim()}`;
      // }
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${apiUrl}/api/meet/${roomId}/list`,
        
        {
          headers: headers,
          withCredentials: true,
        }
      );


        const data = response.data.meetLink.link;
        setMeetLinks(data);
        // console.log(data)
      } catch (error) {
        console.error("Error fetching meet links:", error);
        // Handle errors here, e.g., set an error state or display a message to the user
      }
      
    };

    fetchMeetLinks();
  }, []);

  return (
    <div>
      <div className='flex flex-row items-center justify-between'>
          <img src={Zoomlogo} alt="not"  className='h-32'/>
          <button
          className="bg-sky-300 w-28  text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          
        >
          <ul className="">
          <a href={meetLinks}>Join Meet</a> 
        </ul>
          </button>
        </div>
      
    </div>
  );
};

export default ZoomStud;
