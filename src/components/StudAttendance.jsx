import React, { useState } from "react";

function StudAttendance() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      question: question,
      option1: option1,
      option2: option2,
      option3: option3,
    };

    try {
      const response = await fetch("http://localhost:4000/rooms/create", {
        method: "GET",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Data successfully submitted");
        navigate("/");
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
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            type="text"
            id="name"
            placeholder="Enter a name for the room"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
        </div>

        <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="description">
            Option1
          </label>
          <input
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
            onChange={(e) => {
              setOption3(e.target.value);
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
          style={{ marginTop: "20px" }}
          // onClick={handleLogin}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudAttendance;
