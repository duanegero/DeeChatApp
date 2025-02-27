//import modules to use in app
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

//import component
import ChatForm from "../Components/Chat Page/chat-form";

//varirable to handle socket url
const socket = io("http://localhost:3000", {
  transports: ["websocket"],
});

//defining a function
export default function Chat() {
  //creating a use state variable to handle messages, an empty array
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //setting the document title
    document.title = "Chat";

    //listening for incoming message events from the server
    socket.on("message", (message) => {
      //update the messages state by adding the new message to array of existing messages
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    //remove the message event listener on unmount
    return () => {
      socket.off("message");
    };
  }, []); //empty dependeny array to run only when component mounts

  return (
    <>
      <ChatForm socket={socket} messages={messages} setMessages={setMessages} />
    </>
  );
}
