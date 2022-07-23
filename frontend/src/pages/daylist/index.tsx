import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import DateComponent from "../../components/Date";
import DateProvider from "../../context/DateContext";
const DayList: React.FC = () => {
  // const w = new DateComponent( this.props);
  // console.log(w);
  return (
    <>
      <Link to="/" className="icon_heading">
        <FiAlignLeft />
      </Link>
      <Link to="/daylist" className="heading">
        DayList
      </Link>
      <DateComponent />
    </>
  );
};

export default DayList;
