import React, { useEffect } from "react";
import ForgotPasswordForm from "../Components/Forgot Password Page/forgotpassword-form";

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "Forgot Password";
  });

  return (
    <>
      <ForgotPasswordForm />
    </>
  );
}
