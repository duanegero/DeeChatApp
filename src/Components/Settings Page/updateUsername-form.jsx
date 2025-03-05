import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//import helper function
import submitNewUsername from "./Helpers/submitNewUsername";

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
    submitNewUsername(event, newUsername, navigate, username);
  };

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border m-5 rounded-4xl p-10 ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-center mb-2">Update Username</h1>
          <p className=" w-1/2">
            You can update your username here. Simply enter your new username in
            the field below and save your changes. This will update your profile
            name across the platform.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-x-4">
          <label>New username:</label>
          <input
            value={newUsername}
            type="text"
            placeholder="New Username"
            onChange={(e) => setNewUsername(e.target.value)}
          ></input>
        </div>
        <div className="flex justify-center w-full mt-3">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
