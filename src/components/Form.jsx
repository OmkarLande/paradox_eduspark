import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Form(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mode = props.mode
  const navigate = useNavigate()

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      "email": email,
      "password": password,
      "role": mode
    };
    const apiUrl = import.meta.env.VITE_API_URL;
 
    try {
        const response = await axios.post(`${apiUrl}/api/user/login`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        const userId = response.data.user._id

        if (response.status === 200) {
            console.log('Data successfully submitted');
            // console.log('role is  ',response.data.user.role);
            // console.log()
            (response.data.user.role === 'Student') ? navigate(`/dashboardstud/${userId}`) : navigate(`/dashboard/${userId}`);
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
  
          Don't have an account? <Link to="/signup" className='text-orange-400'>Signup</Link> 
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
