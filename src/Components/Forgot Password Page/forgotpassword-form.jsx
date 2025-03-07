//importing React and use's to use in app
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//importing the helper function
import submitEmailReset from "./Helpers/submitEmailReset";

export default function ForgotPasswordForm() {
  //state variables to handle user input and output to screen
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loginPageButton, setLoginPageButton] = useState(false);
  const [message, setMessage] = useState(
    "Please enter your email address to retrieve your associated username. A password reset link will be sent to your email, allowing you to securely reset your password and regain access to your account."
  );

  //variable to handle navigation
  const navigate = useNavigate();

  //function to handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //call helper function with passed in variables
    submitEmailReset(
      email,
      setUsername,
      setMessage,
      setEmail,
      setLoginPageButton
    );
  };

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border-4 m-5 rounded-4xl p-10 bg-white border-lime-400">
      <form onSubmit={handleSubmit}>
        <div>
          {loginPageButton && (
            <button
              className="border border-white bg-white font-goldman cursor-pointer rounded-xl tracking-widest text-black-400 hover:border-lime-400 hover:bg-black hover:text-lime-400 mb-4 p-2"
              onClick={() => navigate(`/login`)}
            >
              Login Page
            </button>
          )}
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-center mb-2 font-goldman text-4xl tracking-widest">
            FORGOT PASSWORD
          </h1>
          <p className="font-goldman w-1/2 mb-6 tracking-wider text-lg">
            {message}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-x-4 mb-6 ">
          <label className=" text-2xl font-goldman tracking-widest mb-2">
            EMAIL
          </label>
          <input
            value={email}
            type="email"
            placeholder="Type here..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 p-1 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></input>
          {username && (
            <p className="font-goldman w-1/2 mb-12 tracking-widest p-2 text-center text-2xl border-2 border-lime-400 bg-black text-lime-400 rounded-2xl">
              {username}
            </p>
          )}

          <button
            className="border-2 py-2 px-10 items-center rounded-xl text-xl font-goldman cursor-pointer hover:border-zinc-600 hover:text-zinc-600 hover:bg-zinc-100 tracking-wider mt-10"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
