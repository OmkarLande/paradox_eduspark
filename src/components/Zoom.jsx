import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Zoomlogo from '../../public/ZOOMlogo.png';


const Zoom = () => {
  const { roomId } = useParams();
  const link = "zoommtg://zoom.us/start?confno=";
  
  const [inviteLink, setInviteLink] = useState('')
   const zoomLink = () => {
       window.open(link, "_blank");  
   } 

   const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      roomId: roomId,
      link: inviteLink
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
     
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        `${apiUrl}/api/meet/publish-link`,
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
    <div>
      
      <div className="p-2">
        <div className='flex flex-row items-center justify-between'>
          <img src={Zoomlogo} alt="not"  className='h-32'/>
          <button
          className="bg-sky-400 w-28  text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          onClick={zoomLink}
        >
          Create
          </button>
        </div>
        
        <ul className=" mt-2">
          <li className="text-xl flex flex-row justify-between items-center w-5/5 p-3 bg-sky-300 rounded-xl font-semibold mt-5">
            <div>
              <input type="text" name="link" id="link" onChange={e=>setInviteLink(e.target.value)} className='rounded-full p-2 w-96'/>
            </div>
            <div>
              <button className="bg-orange-500 p-2 mx-2 text-white rounded-lg" onClick={handleSubmit}>
                Publish
              </button>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Zoom;
