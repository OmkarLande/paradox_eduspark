import React, { useState } from "react";
import axios from "axios";
import Form from './Form';

const Login = () => {
  const [mode, setMode] = useState("Student");

  const switchToStudent = () => {
    setMode("Student");
  };

  const switchToInstructor = () => {
    setMode("Admin");
  };

  return (
    <>
      <div className="flex bg-white flex-row items-center justify-center">
        <div
          className="mt-8 flex flex-col items-center justify-center "
          style={{ height: "100%", width: "50%" }}
        >
          <img src="/images/Logo.svg" alt="" />
          <div
            className="flex flex-col mt-10"
            style={{ width: "444px" }}
          >
            <h1 className="text-center text-5xl font-Grish text-black">Login</h1>
            <div className="flex flex-row bg-sky-400 p-1 rounded-full items-center justify-center w-max m-auto mt-5">
              <button
                className={`p-2 ${mode === "Student" ? "border-2 text-orange-400 bg-white w-24 rounded-full p-2" : "text-white"
                  }`}
                onClick={switchToStudent}
                type="button"
              >
                Student
              </button>
              <button
                className={`ml-3 p-2 ${mode === "Admin" ? "border-2 bg-white w-24 text-orange-400 rounded-full " : "text-white"
                  }`}
                onClick={switchToInstructor}
                type="button"
              >
                Instructor
              </button>
            </div>

            {mode === "Student" ? <Form mode={mode} /> : <Form mode={mode} />}

          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center bg-sky-400"
          style={{ height: "100vh", width: "50%" }}
        >
          <h1 className="text-center text-white text-5xl font-Grish">
            Welcome!!
          </h1>
          <p className="text-center text-white">
            Discover your passion today...
          </p>
          <img
            src="/images/boylogin.svg"
            className="ml-10"
            alt=""
            style={{ width: "70%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
