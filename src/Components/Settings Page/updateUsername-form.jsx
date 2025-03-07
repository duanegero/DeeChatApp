import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//import helper function
import submitUpdatedUsername from "./Helpers/submitUpdatedUsername";

export default function UpdateUsernameForm() {
  //variable to handle user name from URL
  const username = new URLSearchParams(window.location.search).get("username");

  //state variable to handle new username
  const [newUsername, setNewUsername] = useState("");

  //vaiable to handle navigate
  const navigate = useNavigate();

  //function to handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //call helper function with passed in variables
    submitUpdatedUsername(newUsername, navigate, username, setNewUsername);
  };

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border-4 m-5 rounded-4xl p-10 bg-white border-lime-400">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-center mb-2 font-goldman text-3xl tracking-widest">
            UPDATE USERNAME
          </h1>
          <p className="font-goldman w-1/2 mb-6 tracking-wider">
            You can update your username here. Simply enter your new username in
            the field below and submit your changes. This will update your
            profile name across the platform.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-x-4 mb-6 ">
          <label className=" text-xl font-goldman tracking-widest mb-2">
            New Username:
          </label>
          <input
            value={newUsername}
            type="text"
            placeholder="Type here..."
            onChange={(e) => setNewUsername(e.target.value)}
            className="w-64 p-1 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        <div className="flex justify-center w-full mt-3">
          <button
            className="border-2 py-2 px-10 rounded-xl text-xl font-goldman cursor-pointer hover:border-zinc-600 hover:text-zinc-600 hover:bg-zinc-100 tracking-wider"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
