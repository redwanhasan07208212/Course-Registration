import PropTypes from "prop-types";
import Course from "../Course/Course";

const Courses = ({ courses, handleCourseDetail,handleCount }) => {
  // console.log(courses);
  return (
    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
      {courses.map((course, idx) => (
        <Course
          key={idx}
          course={course}
          handleCourseDetail={handleCourseDetail}
          handleCount={handleCount}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.array,
  handleCourseDetail: PropTypes.func,
  handleCount: PropTypes.func
};

export default Courses;
