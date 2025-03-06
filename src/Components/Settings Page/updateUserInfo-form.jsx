import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//import helper function
import submitUpdatedUserDetails from "./Helpers/submitUpdateUserDetails";

export default function UpdateUserInfo() {
  //varibale to handle username and user ID from URL
  const userId = new URLSearchParams(window.location.search).get("userId");
  const username = new URLSearchParams(window.location.search).get("username");

  //state variables to handle user input
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  //vaiable to handle navigate
  const navigate = useNavigate();

  //function to handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //call helper function with passed in variables
    submitUpdatedUserDetails(
      event,
      firstname,
      lastname,
      email,
      age,
      navigate,
      userId,
      username
    );
  };

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border-lime-400 m-5 rounded-4xl p-10 bg-white border-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-center mb-2 font-goldman text-3xl tracking-widest">
            UPDATE USER INFO
          </h1>
          <p className="font-goldman w-1/2 mb-6 tracking-wider">
            You can update your user information here. Please ensure all fields
            are completed before saving your changes. Keeping your profile
            details up to date helps us provide a better experience for you.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <label className=" text-xl font-goldman tracking-widest mb-2">
            First Name
          </label>
          <input
            value={firstname}
            type="text"
            placeholder="Type Here"
            onChange={(e) => setFirstname(e.target.value)}
            className="w-64 p-1 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2">
            Last Name
          </label>
          <input
            value={lastname}
            type="text"
            placeholder="Type Here"
            onChange={(e) => setLastname(e.target.value)}
            className="w-64 p-1 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2">
            Email
          </label>
          <input
            value={email}
            type="email"
            placeholder="Type Here"
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 p-1 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></input>
          <label className=" text-xl font-goldman tracking-widest mb-2">
            Age
          </label>
          <input
            value={age}
            type="number"
            placeholder="Type Here"
            onChange={(e) => setAge(e.target.value)}
            className="w-64 p-1 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
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
