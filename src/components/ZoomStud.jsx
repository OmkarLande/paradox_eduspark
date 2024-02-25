import React, { useState, useEffect } from "react";
import axios from "axios";

const ZoomStud = () => {
  const [meetLinks, setMeetLinks] = useState([]);

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
        "http://localhost:4000/meet/list",
        
        {
          headers: headers,
          withCredentials: true,
        }
      );


        const data = response.data;
        setMeetLinks(data.meetLinks);
        console.log(data)
      } catch (error) {
        console.error("Error fetching meet links:", error);
        // Handle errors here, e.g., set an error state or display a message to the user
      }
      
    };

    fetchMeetLinks();
  }, []);

  return (
    <div>
      <div className="p-2">
        <ul className="mt-2">
          {meetLinks.map((meetLink, index) => (
            <li
              key={index}
              className="text-xl flex flex-row justify-between items-center w-5/5 p-3 bg-slate-200 rounded-xl font-semibold"
            >
              
              <div>
                <p>MeetLink: {meetLink}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ZoomStud;
