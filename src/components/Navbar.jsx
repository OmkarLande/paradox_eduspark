import React from "react";
import logo from '../images/Logo.svg'
import avatar from '../images/avatar.svg'

function Navbar() {
  return (
    <div className="navbar flex justify-center items-center bg-white shadow-lg">
      <div className="flex-1 w-max">
        <a className="  ">
          <img src={logo} className="w-48" alt="" />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="avatar online">
              <div className=" rounded-full">
                <img src={avatar} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52"
          >
            <a>
              <button className="btn btn-error w-full py-0 text-white">
                LogOut
              </button>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
