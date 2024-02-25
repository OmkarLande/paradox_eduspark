import React from "react";

function RoomMentor() {
  return (
    <div className="">
      <form
        className="flex flex-col space-y-4 shadow-xl p-3 px-5 mt-10"
        style={{ width: "460px" }}
      >
        <h1 className="text-center text-4xl font-Grish text-orange-400">
          New Room Creation
        </h1>
        <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="name">
            Room Name
          </label>
          <input
            onChange={(e) => {
              e.target.value;
            }}
            type="text"
            id="name"
            placeholder="Enter a name for the room"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
        </div>
        <div className="mb-6 pt-3 flex flex-col mt-10 ">
          <label className="block text-lg text-black " htmlFor="description">
            Room Description
          </label>
          <input
            onChange={(e) => {
              e.target.value;
            }}
            type="text"
            id="description"
            placeholder="Enter a name for the room"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
        </div>
        <div className="m-0 pt-3">
          <label className="block text-black text-lg" htmlFor="password">
            Age Group
          </label>
          <input
            onChange={(e) => {
              e.target.value;
            }}
            type="number"
            id="number"
            placeholder="Enter age of the Students"
            className={`bg-sky-400 rounded w-full placeholder:text-white p-3 `}
          />
        </div>
        

        <button
          className="bg-orange-400 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          // onClick={handleLogin}
        >
          Create room
        </button>
      </form>
    </div>
  );
}

export default RoomMentor;
