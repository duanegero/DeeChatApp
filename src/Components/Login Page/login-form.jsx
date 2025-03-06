import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//import helper function
import submitLogin from "./Helpers/submitLogin";
import { LoginButton } from "../buttons";
import navigateSignUp from "../SignUp Page/Helpers/navigateSignUp";

//defining a function
export default function LoginForm() {
  //state variables to handle user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //variable to handle navigation
  const navigate = useNavigate();

  //function to handle the user login submit
  const handleSubmit = (event) => {
    //call the helper function with passed in variables
    submitLogin(event, username, setUsername, password, setPassword, navigate);
  };

  return (
    <>
      <div className="border-2 border-lime-400 p-6 rounded-4xl shadow-2xl shadow-lime-400 mx-auto max-w-2xl mt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center mt-20 ">
            <h1 className="font-edu text-7xl text-lime-400 mb-10 font-bold tracking-wider">
              DeeChatApp
            </h1>
            <p className="font-goldman tracking-wider text-xl text-fuchsia-500 mx-auto max-w-96 text-center border-2 border-lime-400 p-6 rounded-4xl shadow-2xl shadow-lime-400">
              Welcome to DeeChatApp! Connect with friends, chat, and share
              moments in a simple and fun way.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-20">
            <label className="font-edu font-bold text-lime-400 text-2xl tracking-widest mb-4">
              Username:
            </label>
            <input
              value={username}
              type="text"
              placeholder="Type here..."
              onChange={(e) => setUsername(e.target.value)}
              className="text-xl px-4 py-2 border-2 border-lime-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 mb-8 shadow-xl shadow-lime-400 text-white"
            ></input>
            <label className="font-edu font-bold text-lime-400 text-2xl tracking-widest">
              Password:
            </label>
            <input
              value={password}
              type="password"
              placeholder="Type here..."
              onChange={(e) => setPassword(e.target.value)}
              className="text-xl px-4 py-2 border-2 border-lime-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 mb-8 shadow-xl shadow-lime-400 text-white"
            ></input>
            <LoginButton type="submit"></LoginButton>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-10 max-w-2xl mx-auto mb-6">
        <button
          className="bg-black w-full p-4 rounded-4xl border-2 font-edu text-2xl font-bold tracking-wider border-lime-400 text-lime-400 shadow-xl hover:border-white hover:text-white hover:bg-zinc-800 cursor-pointer"
          onClick={() => navigateSignUp(navigate)}
        >
          SignUp
        </button>
      </div>
    </>
  );
}
