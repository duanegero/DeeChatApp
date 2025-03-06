import React, { useEffect } from "react";

import UpdateUsernameForm from "../Components/Settings Page/updateUsername-form";
import UpdateUserInfo from "../Components/Settings Page/updateUserInfo-form";
import UpdateEmailForm from "../Components/Settings Page/updateEmail-form";
import DeleteUser from "../Components/Settings Page/deleteUser";

export default function Settings() {
  useEffect(() => {
    document.title = "Settings";

    document.body.classList.add("bg-black");

    return () => {
      document.body.classList.remove("bg-black");
    };
  });

  return (
    <>
      <div>
        <h1 className="text-center mt-5 text-6xl font-goldman tracking-widest text-fuchsia-400">
          Settings
        </h1>
        <UpdateUsernameForm />
        <UpdateUserInfo />
        <UpdateEmailForm />
        <DeleteUser />
      </div>
    </>
  );
}
