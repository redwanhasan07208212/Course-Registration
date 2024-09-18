import PropTypes from "prop-types";
import Course from "../Course/Course";

const Courses = ({ courses, handleCourseDetail }) => {
  // console.log(courses);
  return (
    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
      {courses.map((course, idx) => (
        <Course
          key={idx}
          course={course}
          handleCourseDetail={handleCourseDetail}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.array,
  handleCourseDetail: PropTypes.func
};

export default Courses;
