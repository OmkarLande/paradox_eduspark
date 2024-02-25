import React from "react";

const Zoom = () => {
   const zoomLink = () => {
       window.open("zoommtg://zoom.us/start?confno=", "_blank");  
   } 

  return (
    <div>
      <div className="p-2">
        <button
          className="bg-sky-400 w-28 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          onClick={zoomLink}
        >
          Create
        </button>
        <ul className=" mt-2">
          <li className="text-xl flex flex-row justify-between items-center w-5/5 p-3 bg-slate-200 rounded-xl font-semibold">
            <div>
              <p>ClassName</p>
            </div>
            <div>
              <button className="bg-orange-400 p-2 mx-2 text-white rounded-lg">
                Publish
              </button>
              <button className="bg-red-400 p-2 text-white rounded-lg">
                Destroy
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Zoom;
