import React, { useState, useCallback } from "react";
import { FiAlignLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "react-date-range";
import ko from "date-fns/locale/ko";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DayList: React.FC = () => {
  const nav = useNavigate();
  const onChangeDate = useCallback((date: Date): void | undefined => {
    console.log(date);
    // date 변경값을 받아오는 함수
    if (!date) {
      return;
    } // 날짜값이 없을 때 예외처리
    nav(`/daylist/${date}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Link to="/" className="icon_heading">
        <FiAlignLeft />
      </Link>
      <Link to="/daylist" className="heading">
        DayList
      </Link>
      <Calendar
        locale={ko}
        // minDate={tomorrow} // 최소날짜값 내일이면 내일부터 선택가능하다.
        // date={date}
        onChange={onChangeDate}
        dateDisplayFormat={"yyyy.mm.dd"}
      />
    </>
  );
};

export default DayList;
