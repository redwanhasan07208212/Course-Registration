import { useEffect, useState } from "react";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [courses, setCourses] = useState([]);
  const [courseDetail, setcourseDetail] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleCourseDetail = (id) => {
    const newCourseDetail = [...courseDetail, id];
    setcourseDetail(newCourseDetail);
  };
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex container mx-auto">
        <Courses
          courses={courses}
          handleCourseDetail={handleCourseDetail}
          handleCount={handleCount}
        ></Courses>
        <CourseDetail courseDetail={courseDetail} count={count}></CourseDetail>
      </div>
    </>
  );
}

export default App;
