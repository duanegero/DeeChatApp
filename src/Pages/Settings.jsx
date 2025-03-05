import React, { useEffect } from "react";

import UpdateUsernameForm from "../Components/Settings Page/updateUsername-form";
import UpdateUserInfo from "../Components/Settings Page/updateUserInfo-form";
import DeleteUser from "../Components/Settings Page/deleteUser";

export default function Settings() {
  useEffect(() => {
    document.title = "Settings";
  });

  return (
    <>
      <div>
        <h1 className="text-center mt-5">Settings</h1>
        <UpdateUsernameForm />
        <UpdateUserInfo />
        <DeleteUser />
      </div>
    </>
  );
}
