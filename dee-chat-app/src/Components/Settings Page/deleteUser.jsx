import React, { useState } from "react"; //importing react and useState

export default function DeleteUser() {
  const [confirmDelete, setConfirmDelete] = useState("");

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border m-5 rounded-4xl p-10 max-w-2xl">
      <div>
        <h1>Confirm Delete</h1>
      </div>
      <div>
        <p>Please type "confirm delete" to delete user.</p>
        <label>confirm delete</label>
        <input></input>
        <button>Confirm</button>
      </div>
    </div>
  );
}
