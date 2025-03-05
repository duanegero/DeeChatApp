import React, { use, useEffect } from "react";
import SignUpForm from "../Components/SignUp Page/signup-form";

export default function SignUp() {
  useEffect(() => {
    document.title = "Sign Up";
  });

  return (
    <>
      <SignUpForm />
    </>
  );
}
