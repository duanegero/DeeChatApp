import React, { useEffect } from "react";
import LoginForm from "../Components/Login Page/login-form";

export default function Login() {
  useEffect(() => {
    document.title = "Login";

    document.body.classList.add("bg-black");

    return () => {
      document.body.classList.remove("bg-black");
    };
  });

  return (
    <>
      <LoginForm />
    </>
  );
}
