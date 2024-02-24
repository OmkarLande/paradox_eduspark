import React, { useState } from "react";

const Login = () => {
  const [mode, setMode] = useState(null);

  const switchToStudent = () => {
    setMode("student");
  };

  const switchToInstructor = () => {
    setMode("instructor"); // Fix: Change to lowercase 'instructor'
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
            method="POST"
            action="#"
            style={{ width: "444px" }}
          >
            <h1 className="text-center text-5xl font-Grish">Login</h1>
            <div className="flex flex-row bg-sky-400 p-1 rounded-full items-center justify-center w-max m-auto mt-5">
              <button
                className="bg-white text-orange-400 w-24 rounded-full p-2"
                onClick={switchToStudent}
              >
                Student
              </button>
              <button
                className="ml-5 p-2 text-white"
                onClick={switchToInstructor}
              >
                Instructor
              </button>
            </div>

            {mode === 'instructor' && (
              <>
                <div className="mb-6 pt-3">
                  <label className="block text-lg" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter instructor email address"
                    className="bg-sky-400 rounded w-full placeholder:text-white p-3"
                  />
                </div>
                <div className="mb-6 pt-3">
                  <label className="block text-lg" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password" // Fix: Change to 'password'
                    id="password" // Fix: Change to 'password'
                    placeholder="Enter password"
                    className="bg-sky-400 rounded w-full placeholder:text-white p-3"
                  />
                </div>
                <div className="flex">
                  <a href="#" className="text-sm mb-6">
                    Don't have an account? Signup
                  </a>
                </div>
                <button
                  className="bg-orange-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                  type="submit"
                >
                  Login
                </button>
              </>
                      )}
                      {mode === 'student' && (
              <>
                <div className="mb-6 pt-3">
                  <label className="block text-lg" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email address"
                    className="bg-sky-400 rounded w-full placeholder:text-white p-3"
                  />
                </div>
                <div className="mb-6 pt-3">
                  <label className="block text-lg" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password" // Fix: Change to 'password'
                    id="password" // Fix: Change to 'password'
                    placeholder="Enter password"
                    className="bg-sky-400 rounded w-full placeholder:text-white p-3"
                  />
                </div>
                <div className="flex">
                  <a href="#" className="text-sm mb-6">
                    Don't have an account? Signup
                  </a>
                </div>
                <button
                  className="bg-orange-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                  type="submit"
                >
                  Login
                </button>
              </>
            )}
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
