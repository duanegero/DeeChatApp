import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

import submitNewUserDetails from "./Helpers/submitNewUserDetails";

export default function UpdateUserInfo() {
  const userId = new URLSearchParams(window.location.search).get("userId");
  const username = new URLSearchParams(window.location.search).get("username");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewUserDetails(
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
    <div className=" mt-10 flex flex-col justify-center items-center border m-5 rounded-4xl p-10 max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Update User Info</h1>
        </div>
        <div>
          <label>First Name</label>
          <input
            value={firstname}
            type="text"
            placeholder="Type Here"
            onChange={(e) => setFirstname(e.target.value)}
          ></input>
          <label>Last Name</label>
          <input
            value={lastname}
            type="text"
            placeholder="Type Here"
            onChange={(e) => setLastname(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            value={email}
            type="email"
            placeholder="Type Here"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Age</label>
          <input
            value={age}
            type="number"
            placeholder="Type Here"
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
