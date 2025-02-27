import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <h1 className="text-6xl">login</h1>
    </>
  );
}
