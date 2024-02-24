import React from 'react'

function Form() {
  return (
      <div>
          <div className="mb-6 pt-3">
                  <label className="block text-lg" htmlFor="email">
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      e.target.value;
                    }}
                    type="text"
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
                    onChange={(e) => {
                      e.target.value;
                    }}
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
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
                  // onClick={handleLogin}
                >
                  Login
                </button>
    </div>
  )
}

export default Form