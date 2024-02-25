import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

  const name = props.name;
  const desc = props.desc;
  const colors = [
    "#FF5733",
    // "#33FF57",
    "#5733FF",
    "#FF33E6",
    // "#33FFFF",
    // "#FFD700",
  ];

  function getRandomColor() {
    const colors = [
      "#FF5733",
      // "#33FF57",
      "#5733FF",
      "#FF33E6",
      // "#33FFFF",
      // "#FFD700",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
  
  return (
    <div className="flex flex-row flex-wrap">
      
      <Link to={`/Students/${props.roomId}`}>
        
        <div
            className="card w-72 h-72 m-2 shadow-xl"
            style={{"backgroundColor":getRandomColor()}}
        >
          <div className="card-body flex justify-center  items-center  ">
            <div className=" flex flex-col  items-center text-white">
              <h2 className="  font-Grish text-3xl">{name} </h2>
                <p className="text-xl font-sans">{desc}</p>

              </div>
              </div>
          </div>
        </Link>
    </div>
  )
      }

export default Card;
