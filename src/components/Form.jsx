import React, { useState } from 'react'
import {Link} from 'react-router-dom';
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
    <form onSubmit={handleSubmit}>
      <div className="mb-6 pt-3">
        <label className="block text-lg" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Enter email address"
          className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
        />
      </div>
      <div className="mb-6 pt-3">
        <label className="block text-lg" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Enter password"
          className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
        />
      </div>
      <div className="flex">
        <a href="#" className="text-sm mb-6">
          Don't have an account? <Link to="/signup" className='text-orange-400'>Login</Link> 
        </a>
      </div>
      <button
        className="bg-orange-400 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        type="submit"
      >
        Login
      </button>
    </form>
  )
}

export default Form;
