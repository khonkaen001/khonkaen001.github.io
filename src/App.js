import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import Moddata from "./Moddata";
import Todolist from "./Todolist";
import Todolistoption from "./Todolistoption";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todolist />} />
        <Route path="/x" element={<Moddata />} />
        <Route path="/todooption" element={<Todolistoption />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
