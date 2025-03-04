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
      <UpdateUsernameForm />
      <UpdateUserInfo />
      <DeleteUser />
    </>
  );
}
