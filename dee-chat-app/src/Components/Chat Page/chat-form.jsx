//importing React and useState
import React, { useState } from "react";

//defining a function with passed in variables
export default function ChatForm({ socket, messages, setMessages }) {
  //use state variable to handle new messages
  const [newMessage, setNewMessage] = useState("");

  //defining a function to handle send button click
  const handleSendMessage = () => {
    //if new message emit/add message, set messages with new message and clear the input of old message
    if (newMessage.trim()) {
      socket.emit("message", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-edu text-7xl text-lime-400 tracking-wider">
        Matrix Chat
      </h1>
      <div className="w-9/12 h-96 overflow-y-scroll border-2 rounded-2xl shadow-2xl shadow-lime-400 p-3 mt-10 text-lime-400 bg-black tracking-wider mb-10">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="p-2 mb-2 border-b-2 border-fuchsia-400 break-words whitespace-pre-wrap"
          >
            {msg}
          </div>
        ))}
      </div>
      <textarea
        className="w-9/12 h-20 border border-lime-400 shadow-2xl shadow-lime-400 rounded-2xl mt-4 p-4 bg-zinc-800 text-fuchsia-400 tracking-wider whitespace-pre-wrap break-words"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        type="button"
        className="cursor-pointer border-2 my-5 px-8 py-3 rounded-2xl bg-fuchsia-400 font-funnel font-bold tracking-wider text-xl hover:bg-fuchsia-300 hover:text-2xl active:bg-lime-400"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
}
