import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import List from "./pages/daylist/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daylist" element={<List />} />
      </Routes>
    </div>
  );
};

export default App;
