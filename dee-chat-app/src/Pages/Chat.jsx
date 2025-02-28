//import modules to use in app
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

//import component
import ChatForm from "../Components/Chat Page/chat-form";

//defining a function
export default function Chat() {
  //creating a use state variable to handle messages, an empty array
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    //setting the document title
    document.title = "Chat";

    //variable to handle URL search
    const params = new URLSearchParams(window.location.search);
    //variable to handle username from the URL
    const usernameFromUrl = params.get("username") || "Guest";
    //set the state of username to be what's in the URL
    setUsername(usernameFromUrl);

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
    };
  }, []); //empty dependeny array to run only when component mounts

  return (
    <>
      <ChatForm socket={socket} messages={messages} setMessages={setMessages} />
    </>
  );
}
