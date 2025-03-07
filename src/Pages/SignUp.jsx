import React, { useEffect } from "react"; //importing React and useEffect

//importing form to display on page
import SignUpForm from "../Components/SignUp Page/signup-form";

export default function SignUp() {
  //Effect to handle page title and background color
  useEffect(() => {
    document.title = "Sign Up";

    document.body.classList.add("bg-black");

    return () => {
      document.body.classList.remove("bg-black");
    };
  });

  return (
    <>
      <SignUpForm />
    </>
  );
}
