import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import "../../../components/style.css";
import List from "../../../components/List";

const Date: React.FC = () => {
  const location = useLocation().pathname.split("daylist/")[1];
  const url = `http://localhost:4000/to-do/${location}`;
  return (
    <>
      <Header
        title={`To Do List at ${location.split("T")[0]}`}
        path={`/daylist/${location.split("T")[0]}`}
      />
      <Link to="/daylist" className="icon_heading">
        <FiAlignLeft />
      </Link>
      <List url={url} />
    </>
  );
};

export default Date;
