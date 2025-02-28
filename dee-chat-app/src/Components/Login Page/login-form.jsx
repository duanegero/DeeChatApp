import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//import helper function
import submitLogin from "./Helpers/submitLogin";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Login</p>
        </div>
        <div>
          <label>Username:</label>
          <input
            value={username}
            type="text"
            placeholder="Type here..."
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>Password:</label>
          <input
            value={password}
            type="password"
            placeholder="Type here..."
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
