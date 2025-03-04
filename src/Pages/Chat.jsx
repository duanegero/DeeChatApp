//import modules to use in app
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";

//import component
import ChatForm from "../Components/Chat Page/chat-form";
import openSettings from "../Components/Settings Page/Helpers/openSettings";

//defining a function
export default function Chat() {
  //creating a use state variable to handle messages, an empty array
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    //setting the document title
    document.title = "Chat";

    document.body.classList.add("bg-black");

    //variable to handle URL search
    const params = new URLSearchParams(window.location.search);
    //variable to handle username from the URL
    const usernameFromUrl = params.get("username") || "Guest";
    //set the state of username to be what's in the URL
    setUsername(usernameFromUrl);

    const userIdFromUrl = params.get("userId");
    setUserId(userIdFromUrl);

    //varirable to handle socket url, and query of headers/url
    const newSocket = io("http://localhost:3000", {
      transports: ["websocket"],
      query: { username: usernameFromUrl },
    });

    //set the state of scoket to be the new socket variable
    setSocket(newSocket);

    //listening for incoming message events from the server
    newSocket.on("message", (message) => {
      //update the messages state by adding the new message to array of existing messages
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    //remove the message event listener on unmount
    return () => {
      newSocket.off("message");
      newSocket.disconnect();
      document.body.classList.remove("bg-black");
    };
  }, []); //empty dependeny array to run only when component mounts

  return (
    <>
      <div className="relative h-16">
        <CiSettings
          onClick={() => openSettings(username, userId, navigate)}
          className="absolute top-4 left-4 bg-black text-7xl text-lime-400 cursor-pointer active:text-fuchsia-400 hover:text-white"
        />
        <button className="absolute top-4 right-4 bg-white border text-black rounded-3xl px-4 py-2">
          Logout
        </button>
      </div>

      <div className="mt-6">
        <ChatForm
          socket={socket}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </>
  );
}
