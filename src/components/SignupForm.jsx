import React from 'react'

function SignupForm() {
  return (
    <form
    className="flex flex-col mt-10"
    method="POST"
    action="#"
    style={{ width: "444px" }}
  >
    <h1 className="text-center text-5xl font-Grish ">Signup</h1>
    <div className="mb-2 pt-3  ">
      <label className="block text-black  text-lg" for="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter name"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="mb-2 pt-3  ">
      <label className="block text-black text-lg" for="email">
        Email
      </label>
      <input
        type="text"
        id="email"
        placeholder="Enter email address"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="mb-2 pt-3  ">
      <label className="block text-black  text-lg" for="age">
        Age
      </label>
      <input
        type="number"
        id="age"
        placeholder="Age"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="mb-2 pt-3 ">
      <label className="block  text-lg   text-black" for="password">
        Password
      </label>
      <input
        type="password"
        id="email"
        placeholder="Enter password"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="mb-2 pt-3 text-black ">
      <label className="block  text-lg   " for="confirm-password">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Re-enter password"
        className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
      />
    </div>
    <div className="flex text-black">
      <a href="#" className="text-sm  mb-6">
       Already have an account? Login
      </a>
    </div>
    
    <button
      className="bg-orange-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
      type="submit"
    >
      Signup
    </button>
  </form>
  )
}

export default SignupForm