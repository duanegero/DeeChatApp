import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//importing helper function
import submitDeleteUser from "./Helpers/submitDeleteUser";

export default function DeleteUser() {
  //vaiable to hand the user ID i nthe URL
  const userId = new URLSearchParams(window.location.search).get("userId");

  //state variable to handle user input
  const [confirmDelete, setConfirmDelete] = useState("");

  //vaiable to handle navigate
  const navigate = useNavigate();

  //function to hancle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //stat variable no equal to delete string alert user/ clear the field
    if (confirmDelete !== "confirm delete") {
      alert("Please type 'confirm delete' to delete user.");
      setConfirmDelete("");
      return;
    }
    //call the helper function with passed in variables
    submitDeleteUser(event, navigate, userId);
  };

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border m-5 rounded-4xl p-10">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center w-full">
          <h1 className="text-center">Confirm Delete</h1>
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
