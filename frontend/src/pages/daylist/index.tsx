import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const DayList: React.FC = () => {
  return (
    <>
      <Link to="/" className="icon_heading">
        <FiAlignLeft />
      </Link>
      <Link to="/daylist" className="heading">
        DayList
      </Link>
      <div></div>
    </>
  );
};

export default DayList;
