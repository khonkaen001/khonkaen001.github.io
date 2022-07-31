import React from "react";
import "./css/App.css";
import Board from "./Board";
import Moddata from "./Moddata";
import Todolist from "./Todolist";
import Todolistoption from "./Todolistoption";
import Counter from "./features/counter/Counter";
import Dashboardbank from "./Dashboardbank";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import { Manu } from "./logic/manu.nav";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="manu-nav">
          <Manu />
        </div>

        {/* RoutePath */}
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/x" element={<Moddata />} />
          <Route path="/todooption" element={<Todolistoption />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/board" element={<Board />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/dashboardbank" element={<Dashboardbank />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
