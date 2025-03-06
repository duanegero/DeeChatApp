import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//importing helper functions
import submitUpdatedEmail from "./Helpers/submitUpdatedEmail";

//defining a function
export default function UpdateEmailForm() {
  //getting the user ID from the URL
  const userId = new URLSearchParams(window.location.search).get("userId");

  //state variables to handle email
  const [newEmail, setNewEmail] = useState("");

  //variable to handle navigation
  const navigate = useNavigate();

  //function to call on submit
  const handleSubmit = (event) => {
    //if no user ID throw error
    if (!userId) {
      throw new Error("User Id is missing");
    }
    event.preventDefault();

    //call helper function with passed in variables
    submitUpdatedEmail(newEmail, userId, navigate, setNewEmail);
  };

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border-4 m-5 rounded-4xl p-10 bg-white border-lime-400">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-center mb-2 font-goldman text-3xl tracking-widest">
            UPDATE EMAIL
          </h1>
          <p className="font-goldman w-1/2 mb-6 tracking-wider">
            You can update your email address here. Simply enter your new email
            in the field below and submit your changes. Make sure to use a valid
            email address, as this will be used for account notifications.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-x-4 mb-6 ">
          <label className=" text-xl font-goldman tracking-widest mb-2">
            New Email:
          </label>
          <input
            value={newEmail}
            type="email"
            placeholder="Type Here..."
            onChange={(e) => setNewEmail(e.target.value)}
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
