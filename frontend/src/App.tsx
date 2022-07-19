import React from "react";
import "./App.css";
import Home from "./components/Home";
const App: React.FC = () => {
  return (
    <div className="App">
      <a href="/" className="heading">
        ToDoList
      </a>
      <Home />
    </div>
  );
};

export default App;
