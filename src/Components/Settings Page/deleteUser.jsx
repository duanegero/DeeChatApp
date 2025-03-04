import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

import submitDeleteUser from "./Helpers/submitDeleteUser";

export default function DeleteUser() {
  const userId = new URLSearchParams(window.location.search).get("userId");

  const [confirmDelete, setConfirmDelete] = useState("");

  //vaiable to handle navigate
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmDelete !== "confirm delete") {
      alert("Please type 'confirm delete' to delete user.");
    }
    submitDeleteUser(event, navigate, userId);
  };

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border m-5 rounded-4xl p-10 max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Confirm Delete</h1>
        </div>
        <div>
          <p>Please type "confirm delete" to delete user.</p>
          <label>confirm delete</label>
          <input
            value={confirmDelete}
            type="text"
            onChange={(e) => setConfirmDelete(e.target.value)}
            placeholder="confirm delete"
          ></input>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}
