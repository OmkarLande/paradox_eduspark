import React, { useState } from "react";
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Make a POST request to your backend authentication endpoint
      const response = await axios.post('your-backend-api/login', {
        email,
        password,
      });

      // Assuming your backend returns a token upon successful login
      const token = response.data.token;

      // You may store the token in a secure way (e.g., localStorage) for future requests

      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  return (
    <>
      <div
        className="flex flex-row  items-center justify-center"
        
      >
        <div
          className="mt-16 flex flex-col items-center justify-center "
          style={{ height: "100%", width: "50%" }}
        >
          <img src="src/images/Logo.svg" alt="" />
          <form
            className="flex flex-col mt-10"
            method="POST"
            action="#"
            style={{ width: "444px" }}
          >
            <h1 className="text-center text-5xl font-Grish ">Login</h1>
            <div className="mb-6 pt-3  ">
              <label className="block  text-lg  " for="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter email address"
                className="bg-sky-400 rounded w-full placeholder:text-white  p-3"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 pt-3 ">
              <label className="block  text-lg   " for="password">
                Password
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter password"
                className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end ">
              <a href="#" className="text-sm  mb-6">
                Forgot your password?
              </a>
            </div>
            
            <button
              className="bg-orange-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
        <div
          className=" flex flex-col items-center justify-center bg-sky-400 "
          style={{ height: "100vh", width: "50%" }}
        >
                  <h1 className="text-center text-white text-5xl font-Grish ">Welcome!!</h1>
                  <p className="text-center text-white">Discover your passion today...</p>
                  <img src="src/images/boylogin.svg" className="ml-10" alt="" style={{"width":"70%"}}/>
        </div>
      </div>
    </>
  );
}

export default Login;
