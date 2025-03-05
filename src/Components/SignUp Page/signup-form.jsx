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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>complete all the fields to create user profile</p>
        </div>
        <div>
          <label>First Name</label>
          <input
            value={firstname}
            type="text"
            placeholder="Type Here..."
            onChange={(e) => setFirstname(e.target.value)}
          ></input>
          <label>Last Name</label>
          <input
            value={lastname}
            type="text"
            placeholder="Type Here..."
            onChange={(e) => setLastname(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            value={email}
            type="email"
            placeholder="Type Here..."
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>age</label>
          <input
            value={age}
            type="number"
            placeholder="0"
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <label>username</label>
          <input
            value={username}
            type="text"
            placeholder="Type Here..."
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>password</label>
          <input
            value={password}
            type="password"
            placeholder="Type Here..."
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
