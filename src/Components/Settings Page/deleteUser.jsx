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
    <div className=" mt-10 flex flex-col justify-center items-center border-4 m-5 rounded-4xl p-10 bg-gray-100 border-red-500">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-center mb-2 font-goldman text-3xl tracking-widest text-red-500">
            DELETE USER
          </h1>
          <p className="font-goldman w-1/2 mb-6 tracking-wider text-red-500">
            To confirm the deletion of this user, please type 'confirm delete'
            in the field below. This action cannot be undone, so proceed with
            caution.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-x-4">
          <label className=" text-xl font-goldman tracking-widest mb-2 text-red-500">
            Type Here &#8594;{" "}
          </label>
          <input
            value={confirmDelete}
            type="text"
            onChange={(e) => setConfirmDelete(e.target.value)}
            placeholder="'confirm delete'"
            className="w-64 p-1 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            className="border-2 border-red-500 text-red-500 py-2 px-10 rounded-xl text-xl font-goldman cursor-pointer hover:border-white hover:text-white hover:bg-red-500 tracking-wider"
            type="submit"
          >
            DELETE
          </button>
        </div>
      </form>
    </div>
  );
}
