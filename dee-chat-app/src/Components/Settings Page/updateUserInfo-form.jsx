import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

export default function UpdateUserInfo() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border m-5 rounded-4xl p-10 max-w-2xl">
      <div>
        <h1>Update User Info</h1>
      </div>
      <div>
        <label>First Name</label>
        <input></input>
        <label>Last Name</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <label>Age</label>
        <input></input>
      </div>
    </div>
  );
}
