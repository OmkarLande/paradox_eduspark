import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Zoomlogo from '../../public/ZOOMlogo.png';

const ZoomStud = () => {
  const {rId} = useParams()
  const [meetLinks, setMeetLinks] = useState('https://us04web.zoom.us/j/79626748997?pwd=9gicFeRZUU3mjOsppterrfx1lE9o8J.1');

  useEffect(() => {
    const fetchMeetLinks = async () => {
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
      
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `http://localhost:4000/meet/${rId}/list`,
        
        {
          headers: headers,
          withCredentials: true,
        }
      );


        const data = response.data;
        setMeetLinks(data.meetLink.link);
        console.log(meetLinks)
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
          className="bg-sky-400 w-28  text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
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
