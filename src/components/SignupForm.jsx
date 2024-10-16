import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignupForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");
  const mode = props.mode;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      password: password,
      age: age,
      role: mode,
    };
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${apiUrl}/api/user/signup`, {
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
    <form
      className="flex flex-col mt-10"
      method="POST"
      onSubmit={handleSubmit}
      style={{ width: "444px" }}
    >
      <div className="mb-2 pt-3  ">
        <label className="block text-black  text-lg" for="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
        />
      </div>
      <div className="mb-2 pt-3  ">
        <label className="block text-black text-lg" for="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
        />
      </div>
      <div className="mb-2 pt-3  ">
        <label className="block text-black  text-lg" for="age">
          Age
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
        />
      </div>
      <div className="mb-2 pt-3 ">
        <label className="block  text-lg   text-black" for="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
        />
      </div>
      <div className="mb-2 pt-3 text-black ">
        <label className="block  text-lg   " for="confirm-password">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Re-enter password"
          className="bg-sky-400 rounded w-full placeholder:text-white  p-3   "
        />
      </div>
      <button
        className="bg-orange-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        type="submit"
      >
        {" "}
        Signup
      </button>
      Already have an account?{" "}
      <Link to="/" className="text-orange-400">
        Login
      </Link>
    </form>
  );
}

export default SignupForm;
