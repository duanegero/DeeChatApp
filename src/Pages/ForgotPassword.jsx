import React, { useEffect } from "react"; //importing React and useEffect

//importing helper function
import ForgotPasswordForm from "../Components/Forgot Password Page/forgotpassword-form";

export default function ForgotPassword() {
  //call useEffect hook to set page title and page background
  useEffect(() => {
    document.title = "Forgot Password";

    document.body.classList.add("bg-black");

    return () => {
      document.body.classList.remove("bg-black");
    };
  });

  return (
    <>
      <ForgotPasswordForm />
    </>
  );
}
