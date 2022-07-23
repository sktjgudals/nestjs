import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
import List from "./List";

const Home: React.FC = () => {
  const url = `http://localhost:4000/to-do/`;
  return (
    <>
      <Link to="/" className="heading">
        All ToDoList
      </Link>
      <Link to="/daylist" className="icon_heading">
        <FiAlignLeft />
      </Link>
      <List url={url} />
    </>
  );
};

export default Home;
