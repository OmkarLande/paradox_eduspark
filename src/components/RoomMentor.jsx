import React,{useState} from "react";

function RoomMentor() {
  const [roomname, setRoomName] = useState("");
  const [roomdes, setRoomDes] = useState("");
  const [age, setAge] = useState(0);
    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(document.cookie)

    const formData = {
      roomname: roomname,
      roomdes : roomdes,
      age: age,
    };

    try {
      const response = await fetch("http://localhost:4000/rooms/create", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Data successfully submitted");
        navigate("/");
      } else {
        console.error(
          "Failed to submit data. Server returned:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        method="POST"
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
              setRoomName(e.target.value) ;
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
             setRoomDes(e.target.value) ;
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
             setAge( e.target.value);
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
