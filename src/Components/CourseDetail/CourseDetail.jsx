import PropTypes from "prop-types";
import Detail from "./Detail";

const CourseDetail = ({ courseDetail}) => {
  return (
    <div className="md:w-1/3 ml-12">
        <h1>Course Name</h1>
      <div>
        {courseDetail.map((detail,idx) => (
          <Detail key={idx} detail={detail}></Detail>
        ))}
      </div>
    </div>
  );
};

CourseDetail.propTypes = {
  courseDetail: PropTypes.array,
};

export default CourseDetail;
