import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

import submitNewUserDetails from "./Helpers/submitNewUserDetails";

export default function SignUpForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (password === confirmPassword) {
      submitNewUserDetails(
        event,
        firstname,
        lastname,
        email,
        age,
        username,
        password,
        navigate,
        setFirstname,
        setLastname,
        setEmail,
        setAge,
        setUsername,
        setPassword
      );
    } else {
      alert("Password fields aren't the same.");
      return;
    }
  };

  return (
    <div className="border-2 rounded-4xl m-10 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center mt-12 mb-8">
          <h1 className="text-center mb-2 font-goldman text-6xl tracking-wider">
            Sign Up
          </h1>
          <p className="font-goldman w-1/2 justify-center items-center text-center tracking-wider">
            To create a complete user profile, ensure that all necessary fields
            are filled out during the profile creation process.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className=" text-xl font-goldman tracking-widest mb-2">
            FIRST NAME
          </label>
          <input
            value={firstname}
            type="text"
            placeholder="Type Here..."
            onChange={(e) => setFirstname(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2 mt-2">
            LAST NAME
          </label>
          <input
            value={lastname}
            type="text"
            placeholder="Type Here..."
            onChange={(e) => setLastname(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2 mt-2">
            EMAIL
          </label>
          <input
            value={email}
            type="email"
            placeholder="Type Here..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2 mt-2">
            AGE
          </label>
          <input
            value={age}
            type="number"
            placeholder="0"
            onChange={(e) => setAge(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2 mt-2">
            USERNAME
          </label>
          <input
            value={username}
            type="text"
            placeholder="Type Here..."
            onChange={(e) => setUsername(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2 mt-2">
            PASSWORD
          </label>
          <input
            value={password}
            type="password"
            placeholder="Type Here..."
            onChange={(e) => setPassword(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2 mt-2">
            RE-ENTER PASSWORD
          </label>
          <input
            value={confirmPassword}
            type="password"
            placeholder="Type Here..."
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        <div className="flex justify-center items-center mt-12 mb-12">
          <button
            className="border-2 py-3 px-10 rounded-xl text-xl font-goldman cursor-pointer hover:border-zinc-600 hover:text-zinc-600 hover:bg-zinc-100"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
