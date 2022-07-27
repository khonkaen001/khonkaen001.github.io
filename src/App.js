import React from "react";
import "./App.css";
import Board from "./Board";
import Moddata from "./Moddata";
import Todolist from "./Todolist";
import Todolistoption from "./Todolistoption";
import Counter from "./features/counter/Counter";
import Dashboardbank from "./Dashboardbank";
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
        <Route path="/board" element={<Board />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dashboardbank" element={<Dashboardbank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
