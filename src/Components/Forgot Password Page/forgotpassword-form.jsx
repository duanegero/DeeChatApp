import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import submitEmailReset from "./Helpers/submitEmailReset";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(
    "enter email address to get username and a link will be sent to rest your password"
  );

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitEmailReset(email, setUsername, setMessage);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>forgot password</h1>
          <p>{message}</p>
        </div>
        <div>
          <label>email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p>Username: {username}</p>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
