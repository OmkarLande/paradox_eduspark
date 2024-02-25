<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from 'react'
>>>>>>> 47720012b47f69dcf1bea3108e20e1b44ca73dda

function Form(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mode = props.mode

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      "email": email,
      "password": password,
      "role": mode
    }
    try {
      const response = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        console.log('Data successfully submitted');
      } else {
        console.error('Failed to submit data. Server returned:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    

  };
  return (
<<<<<<< HEAD
    <div>
      <div className="mb-6 pt-3" >
        <label className="block text-lg text-black" htmlFor="email">
          Email
        </label>
        <input
          onChange={(e) => {
            e.target.value;
          }}
          type="text"
=======
    <form onSubmit={handleSubmit}>
      <div className="mb-6 pt-3">
        <label className="block text-lg" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
>>>>>>> 47720012b47f69dcf1bea3108e20e1b44ca73dda
          id="email"
          placeholder="Enter email address"
          className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
        />
      </div>
      <div className="mb-6 pt-3">
<<<<<<< HEAD
        <label className="block text-black text-lg" htmlFor="password">
          Password
        </label>
        <input
          onChange={(e) => {
            e.target.value;
          }}
=======
        <label className="block text-lg" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
>>>>>>> 47720012b47f69dcf1bea3108e20e1b44ca73dda
          type="password"
          id="password"
          placeholder="Enter password"
          className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
        />
      </div>
      <div className="flex">
<<<<<<< HEAD
        <a href="#" className="text-sm mb-6 text-black">
          Don't have an account? Signup
=======
        <a href="#" className="text-sm mb-6">
          Don't have an account? <Link to="/signup" className='text-orange-400'>Login</Link> 
>>>>>>> 47720012b47f69dcf1bea3108e20e1b44ca73dda
        </a>
      </div>
      <button
        className="bg-orange-400 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        type="submit"
<<<<<<< HEAD
        // onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
=======
      >
        Login
      </button>
    </form>
  )
>>>>>>> 47720012b47f69dcf1bea3108e20e1b44ca73dda
}

export default Form;
