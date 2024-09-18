import PropTypes from "prop-types";
import Detail from "./Detail";

const CourseDetail = ({ courseDetail, creditCount ,creditRemaining}) => {
  return (
    <div className="lg:w-1/3 lg:ml-12 mt-10 lg:mt-0 bg-[#FFF] shadow-xl h-fit py-6 px-6 drop-shadow rounded-xl">
      <h1 className="text-[#2F80ED] text-xl font-bold border-b-2 pb-4">Credit Hour Remaining {creditRemaining} hr</h1>
      <h1 className="text-[rgb(28,27,27)] text-[20px] font-bold py-6">Course Name</h1>
      <div className="text-[#1C1B1B99] pb-6 border-b-2">
      {courseDetail.map((detail, idx) => (
        <Detail key={idx} detail={detail}></Detail>
      ))}
      </div>
      <div className="pt-4 text-[#1C1B1BCC] text-[16px] font-medium border-b-2 pb-4">Total Credite Hour: {creditCount}</div>
    </div>
  );
};

CourseDetail.propTypes = {
  courseDetail: PropTypes.array,
  creditCount:PropTypes.number,
  creditRemaining:PropTypes.number
};

export default CourseDetail;
