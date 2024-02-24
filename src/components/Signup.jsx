import React from 'react'

function Signup() {
  return (
      <section className="mt-10 flex flex-col items-center justify-center ">
            
          <form className="flex flex-col w-96 shadow-lg shadow-black-200/50 p-16" method="POST" action="#"> 
              <h1 >Signup</h1>
                <div className="mb-6 pt-3  ">
                    <label className="block text-gray-700 text-sm font-bold " for="email">Email</label>
                    <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700   border-gray-300   px-3 pb-3"/>
                </div>
                <div className="mb-6 pt-3 ">
                    <label className="block text-gray-700 text-sm font-bold " for="password">Password</label>
                    <input type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700   border-gray-300   px-3 pb-3"/>
                </div>
                <div className="flex ">
                    <a href="#" className="text-sm  mb-6">Forgot your password?</a>
              </div>
              <div className="flex ">
                    <a href="#" className="text-sm  mb-6">Already have account</a>
                </div>
                <button className="bg-black text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
            </form>
        </section>
  )
}

export default Signup