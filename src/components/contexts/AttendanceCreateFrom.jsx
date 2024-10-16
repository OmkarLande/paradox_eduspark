import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function Attendance() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [correctoption, setCorrectOption] = useState("");
  const { roomId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      ques: question,
      opt1: option1,
      opt2: option2,
      opt3: option3,
      correctRes: correctoption
    };
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        `${apiUrl}/api/attendance/${roomId}/questions`,
        formData,
        {
          headers: headers,
          withCredentials: true,
        }
      );
      // console.log(response.data)

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
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col space-y-1 shadow-xl p-3 px-5 "
        style={{ width: "460px" }}
      >
        <h1 className="text-center text-4xl font-Grish text-orange-400">
          Attendance Question
        </h1>
        <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="name">
            Question
          </label>
          <input
          value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            type="text"
            id="name"
            placeholder="Enter a name for the room"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
        </div>
        <label className="block text-lg text-black " htmlFor="description">
          Answer
        </label>
        <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="description">
            Option1
          </label>
          <input
            value={option1}
            onChange={(e) => {
              setOption1(e.target.value);
            }}
            type="text"
            id="description"
            placeholder="Enter a name for the room"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
        </div>
        <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="description">
            Option2
          </label>
          <input
          value={option2}
            onChange={(e) => {
              setOption2(e.target.value);
            }}
            type="text"
            id="description"
            placeholder="Enter a name for the room"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
        </div>
        <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="description">
            Option3
          </label>
          <input
          value={option3}
            onChange={(e) => {
              setOption3(e.target.value);
            }}
            type="text"
            id="description"
            placeholder="Enter a name for the room"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
              </div>
              <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="description">
           Correct Option
          </label>
          <input
            onChange={(e) => {
              setCorrectOption(e.target.value);
            }}
            type="text"
            id="description"
            placeholder="Enter a name for the room"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
        </div>

        <button
          className="bg-orange-400 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                  type="submit"
                  style={{marginTop:"20px"}}
          // onClick={handleLogin}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Attendance;
