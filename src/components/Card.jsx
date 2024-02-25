import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const colors = [
    "#FF5733",
    // "#33FF57",
    "#5733FF",
    "#FF33E6",
    // "#33FFFF",
    // "#FFD700",
  ];
  
  return (
    <div className="flex flex-row flex-wrap" >
      {colors.map((color, index) => (
      <Link to="/Students">
        
        <div
            className="card w-72 h-72 m-2 shadow-xl "
            key={index}
            style={{"backgroundColor":color,}}
        >
          <div className="card-body flex flex-col-reverse items-center  p-2 ">
            <div className="mb-5 flex flex-col items-center text-white">
              <h2 className="card-title  font-Grish text-3xl">DSA </h2>
                <p className="text-xl font-sans">Data Structres & Algorithms</p>
                <p className="">By Siddhesh Wayal</p>
            </div>
          </div>
        </div>
      </Link>
      ))}
    </div>
  );
};


export default Card;
