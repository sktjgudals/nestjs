import { Component, ReactPropTypes } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

class DateComponent extends Component {
  constructor(props: ReactPropTypes) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
      // 이 컴포넌트의 state 설정
      date: "", // date 초기값
    };
  }
  handleSelect(date: Date) {
    this.setState(date);
  }
  render() {
    return <Calendar date={new Date()} onChange={this.handleSelect} />;
  }
}

export default DateComponent;
