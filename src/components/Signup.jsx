import React, { useState } from "react";
import signup_img from "/images/signup.svg";
import SignupForm from "./SignupForm";
import axios from "axios";

function Signup() {
  const [mode, setMode] = useState("Student");

  const switchToStudent = () => {
    setMode("Student");
  };

  const switchToInstructor = () => {
    setMode("Admin");
  };

  return (
    <>
      <div className="flex flex-row  items-center justify-center">
        <div
          className=" flex flex-col items-center justify-center bg-orange-400 "
          style={{ height: "150vh", width: "50vw" }}
        >
          <h1 className="text-center text-white text-5xl font-Grish ">
            Greetings Everyone!! <br /> Join Us on EduSpark
          </h1>
          <p className="text-center text-white">
            Spark your passion of learning and embark on a journey of Virtual
            and <br /> personilized learning.
          </p>
          <img
            src={signup_img}
            className="mr-10"
            alt=""
            style={{ width: "70%" }}
          />
        </div>
        <div
          className="mt-5 flex flex-col items-center justify-center "
          style={{ height: "100vh", width: "50vw" }}
        >
          <img src="/images/Logo.svg" alt="" />
          <h1 className="text-center text-5xl font-Grish ">Signup</h1>
          <div className="flex flex-row bg-sky-400 p-1 rounded-full items-center justify-center w-max m-auto mt-5">
            <button
              className={` p-2 ${
                mode === "Student"
                  ? "border-2 text-orange-400 bg-white w-24 rounded-full p-2"
                  : "text-white"
              }`}
              onClick={switchToStudent}
              type="button"
            >
              Student
            </button>
            <button
              className={`ml-3 p-2 ${
                mode === "Admin"
                  ? "border-2 bg-white w-24 text-orange-400 rounded-full "
                  : "text-white"
              }`}
              onClick={switchToInstructor}
              type="button"
            >
              Instructor
            </button>
          </div>

          {mode === "Student" ? (
            <SignupForm mode={mode} />
          ) : (
            <SignupForm mode={mode} />
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
