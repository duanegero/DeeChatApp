import React, { useEffect } from "react";

export default function Settings() {
  useEffect(() => {
    document.title = "Settings";
  });

  return (
    <>
      <p>settings</p>
    </>
  );
}
