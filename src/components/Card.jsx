import React from "react";

function Card() {
  return (
    <div className="card w-72 h-72 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="h-52"
        />
      </figure>
      <div className="card-body  p-2 flex flex-col items-center " >
        <h2 className="card-title t ">Room No.1</h2>
        <p >hey are u there</p>
      </div>
    </div>
    
  );
}

export default Card;
