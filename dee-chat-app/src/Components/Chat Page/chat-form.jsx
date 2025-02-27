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
      <div className="w-9/12 h-80 overflow-y-scroll border-2 p-3 mt-16 bg-gray-200">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 mb-2 border-b-2">
            {msg}
          </div>
        ))}
      </div>
      <input
        className="w-9/12 h-20 border rounded-2xl mt-4"
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        type="button"
        className="cursor-pointer border-2 mt-3 p-3 rounded-2xl"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
}
