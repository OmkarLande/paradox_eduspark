import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function StudAttendance(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { roomId } = useParams();
  const roomId = props.roomId;
  const userId = props.userId;
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        setLoading(true);
        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.get(
          `${apiUrl}/api/attendance/que/${roomId}`,
          {
            headers: headers,
            withCredentials: true,
          }
        );

        // console.log(response.data);
        setQuestion(response.data.question);

        // if (response.status === 200) {
        //   console.log(response.data) // Set rooms data from the response
        // } else {
        //   throw new Error('Network response was not ok');
        // }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, [roomId, userId]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      selectedOption: selectedOption,
    };

    try {
        // console.log(question)
      const response = await axios.post(
        `${apiUrl}/api/attendance/${question._id}/answer`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
     

      if (response.status === 200) {
        alert("Question answered successfully");
       
      } 
      if (response.status === 203){
        alert('You have already attempted this question.')
      } else{
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
    <div className="flex flex-col items-center">
    
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-1 shadow-xl p-3 px-5 "
        style={{ width: "460px" }}
      >
        <h1 className="text-center text-4xl font-Grish text-orange-400">
          Attendance Question
        </h1>
        <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="name">
            {question.ques}
          </label>
        </div>

        <div className="mb-6 pt-3 flex flex-row mt-10 ">
          <input
            checked={selectedOption === "option1"}
            onChange={handleChange}
            value="option1"
            type="radio"
            id="option1"
            className={` mr-3 `}
          />
          <label className="block text-lg text-black " htmlFor="description">
          {question.opt1}
          </label>
        </div>
        <div className="mb-6 pt-3 flex flex-row mt-10 ">
          <input
            checked={selectedOption === "option2"}
            onChange={handleChange}
            value="option2"
            type="radio"
            id="option2"
            className={` mr-3 `}
          />
          <label className="block text-lg text-black " htmlFor="description">
          {question.opt2}
          </label>
        </div>
        <div className="mb-6 pt-3 flex flex-row mt-10 ">
          <input
            checked={selectedOption === "option3"}
            onChange={handleChange}
            value="option3"
            type="radio"
            id="option3"
            className={` mr-3 `}
          />
          <label className="block text-lg text-black " htmlFor="description">
          {question.opt3}
          </label>
        </div>

        <button
          className="bg-orange-400 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudAttendance;
