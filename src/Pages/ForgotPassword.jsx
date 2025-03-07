import React, { useEffect } from "react";
import ForgotPasswordForm from "../Components/Forgot Password Page/forgotpassword-form";

export default function ForgotPassword() {
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
