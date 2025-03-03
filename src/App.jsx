import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<Chat />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
