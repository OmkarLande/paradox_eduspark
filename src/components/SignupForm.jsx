import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignupForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const mode = props.mode


  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      "name": name,
      "email": email,
      "password": password,
      "age": age,
      "role": mode
    }

    try {
      console.log(formData)
      fetch('http://localhost:4000/user/signup', {
  method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json',
  //   // Other headers as needed
  // },
  // credentials: 'include', // or 'same-origin' depending on your requirements
  body: JSON.stringify(formData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

      console.log(formData);
    } catch (error) {
      console.error('Login failed', error);
    }
  };



  return (
    <form
    className="flex flex-col mt-10"
    method="POST"
    onSubmit={handleSubmit}
    style={{ width: "444px" }}
  >
    
    <div className="mb-2 pt-3  ">
      <label className="block  text-lg" for="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={e=>setName(e.target.value)}
        placeholder="Enter name"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="mb-2 pt-3  ">
      <label className="block  text-lg" for="email">
        Email
      </label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder="Enter email address"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="mb-2 pt-3  ">
      <label className="block  text-lg" for="age">
        Age
      </label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={e=>setAge(e.target.value)}
        placeholder="Age"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="mb-2 pt-3 ">
      <label className="block  text-lg   " for="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        placeholder="Enter password"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="mb-2 pt-3 ">
      <label className="block  text-lg   " for="confirm-password">
        Password
      </label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Re-enter password"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="flex ">
      
  

    </div>
    
    <button
      className="bg-orange-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
      type="submit"
    > Signup</button>
    Already have an account? <Link to="/" className='text-orange-400'>Login</Link> 
  </form>
  )
}

export default SignupForm