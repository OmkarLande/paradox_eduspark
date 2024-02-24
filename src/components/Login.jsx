import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Make a POST request to your backend authentication endpoint
      const response = await axios.post("your-backend-api/login", {
        email,
        password,
      });

      // Assuming your backend returns a token upon successful log
      const token = response.data.token;

      // You may store the token in a secure way (e.g., localStorage) for future requests

      console.log("Login successful");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const [mode, setMode] = useState("student"); // Set default mode to 'student'

  const switchToStudent = () => {
    setMode("student");
  };

  const switchToInstructor = () => {
    setMode("instructor");
  };

    
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <div
          className="mt-8 flex flex-col items-center justify-center "
          style={{ height: "100%", width: "50%" }}
        >
          <img src="src/images/Logo.svg" alt="" />
          <form
            className="flex flex-col mt-10"
            
            style={{ width: "444px" }}
          >
            <h1 className="text-center text-5xl font-Grish">Login</h1>
            <div className="flex flex-row bg-sky-400 p-1 rounded-full items-center justify-center w-max m-auto mt-5">
              <button
                className={`bg-white text-orange-400 w-24 rounded-full p-2 ${
                  mode === "student" ? "border-2 border-orange-400" : ""
                }`}
                onClick={switchToStudent}
              >
                Student
              </button>
              <button
                className={`ml-5 p-2 text-white ${
                  mode === "instructor" ? "border-2 border-white" : ""
                }`}
                onClick={switchToInstructor}
              >
                Instructor
              </button>
            </div>

            
          </form>
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
            src="src/images/boylogin.svg"
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
