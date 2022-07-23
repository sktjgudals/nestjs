import React, { useEffect } from "react";
import { FiAlignLeft } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "../../../components/style.css";
import List from "./list";

const Date: React.FC = () => {
  const location = useLocation().pathname.split("daylist/")[1];
  useEffect(() => {
    document.title = `To Do List At ${location}`;
  }, [location]);

  return (
    <>
      <Link to="/daylist" className="icon_heading">
        <FiAlignLeft />
      </Link>
      <div className="heading"> To Do List at {location}</div>

      <List location={location} />
    </>
  );
};

export default Date;
