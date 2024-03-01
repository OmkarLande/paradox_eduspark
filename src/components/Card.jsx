import React from "react";
import { Link } from "react-router-dom";
import '../components/styles/Card.css'

const Card = (props) => {

  const name = props.name;
  const desc = props.desc;
  const roomId = props.roomId;
  const userId = props.userId
  // console.log(roomId, name, desc)
  
  

  function getRandomColor() {
    const colors = [
      "#D13D0E",
      // "#33FF57",
      "#3C26A6",
      "#E60DC7",
      // "#33FFFF",
      // "#FFD700",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
  
  return (
    <div className="flex flex-row flex-wrap">
      <Link to={`/Students/${userId}/${roomId}`}>
        <div className="card w-72 h-72 m-2 shadow-xl" style={{ backgroundColor: getRandomColor() }}>
          <div className="card-body flex flex-col-reverse items-center  p-2  ">
            <div className=" mb-5 flex flex-col items-center text-white ">
              <h2 className=" font-Grish text-3xl">{name} </h2>
                <p className="text-xl font-sans">{desc}</p>

              </div>
              </div>
          </div>
        </Link>
    </div>
  )
      }

export default Card;
