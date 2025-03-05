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
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-center">Confirm Delete</h1>
          <p className="w-1/2">
            To confirm the deletion of this user, please type 'confirm delete'
            in the field below. This action cannot be undone, so proceed with
            caution.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-x-4">
          <label>confirm delete</label>
          <input
            value={confirmDelete}
            type="text"
            onChange={(e) => setConfirmDelete(e.target.value)}
            placeholder="confirm delete"
          ></input>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}
