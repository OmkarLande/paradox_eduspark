import React,{useState} from "react";
import { Link } from "react-router-dom";

const CardStud = (props) => {
const [isHovered, setIsHovered] = useState(false);
  const name = props.name
  const desc = props.desc
  const roomId = props.roomId
  const userId = props.userId
   

  const defaultStyle = {
    transition: 'transform 0.3s ease-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Apply pop-out effect only on hover
  };
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
    <div className="flex flex-row flex-wrap " >
      <Link to={`/StudRoom/${userId}/${roomId}`}>
        
        <div
            className="card w-72 h-72 m-2 shadow-xl "
            style={{"backgroundColor":getRandomColor(),}}
        >
          <div className="card-body flex flex-col-reverse items-center  p-2 ">
            <div className="mb-5 flex flex-col items-center text-white">
              <h2 className="card-title  font-Grish text-3xl">{name} </h2>
                <p className="text-xl font-sans">{desc}</p>

            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};


export default CardStud;
