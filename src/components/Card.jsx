import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF33E6",
    "#33FFFF",
    "#FFD700",
  ];
  
  return (
    <div className="flex flex-row flex-wrap">
      {colors.map((color, index) => (
        <Link to="/Students" key={index} className="m-2">
          <div
            className="card w-72 h-72 shadow-xl"
            style={{ backgroundColor: color }}
          >
            <div className="card-body flex flex-col-reverse items-center p-2">
              <div>
                <h2 className="card-title">Room No.1</h2>
                <p>Hey, are you there?</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
